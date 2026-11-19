"use client";

import { useEffect, useRef, useState } from "react";
import {
  AmbientLight,
  BoxGeometry,
  Color,
  CylinderGeometry,
  DirectionalLight,
  Fog,
  GridHelper,
  Group,
  Mesh,
  MeshStandardMaterial,
  PCFShadowMap,
  PerspectiveCamera,
  PlaneGeometry,
  RingGeometry,
  Scene,
  Vector3,
  WebGLRenderer,
} from "three";

/** Half size of the square arena, in world units. */
const ARENA = 9;
const CRATE_SIZE = 0.8;
/** Car-to-crate distance below which the car pushes the crate. */
const PUSH_DISTANCE = 1.25;
const GOAL = { x: 6, z: 6, radius: 1.6 };
const CRATE_START: ReadonlyArray<[number, number]> = [
  [-3, 2],
  [2, -2],
  [-5, -4],
  [4, 3],
  [0, 5],
  [-2, -6],
];

const MAX_SPEED = 7;
const ACCELERATION = 10;
const FRICTION = 4;
const TURN_RATE = 2.4;
/** Drag distance, in CSS px, that maps to full throttle or full steering. */
const JOYSTICK_RANGE = 60;

const COLORS = {
  background: 0x0a0a0a,
  floor: 0x141414,
  car: 0xea580c,
  cabin: 0xf5f5f4,
  wheel: 0x262626,
  crate: 0x737373,
  crateDone: 0xf97316,
  goal: 0xf97316,
};

type Props = {
  /** Called when WebGL cannot start, so the stage can show the fallback. */
  onError: () => void;
};

/**
 * Small driving toy in plain Three.js: drive the car and push the crates into the
 * orange ring. Renders only while visible and releases every GPU resource on unmount.
 */
export default function LabScene({ onError }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const resetRef = useRef<() => void>(() => {});
  const [delivered, setDelivered] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: WebGLRenderer;
    try {
      renderer = new WebGLRenderer({ antialias: true, powerPreference: "low-power" });
    } catch {
      onError();
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFShadowMap;
    renderer.domElement.className = "block h-full w-full touch-none";
    container.appendChild(renderer.domElement);

    const scene = new Scene();
    scene.background = new Color(COLORS.background);
    scene.fog = new Fog(COLORS.background, 14, 30);

    const camera = new PerspectiveCamera(50, 1, 0.1, 100);

    scene.add(new AmbientLight(0xffffff, 0.55));
    const sun = new DirectionalLight(0xffffff, 1.6);
    sun.position.set(6, 12, 4);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    Object.assign(sun.shadow.camera, { left: -12, right: 12, top: 12, bottom: -12 });
    scene.add(sun);

    const geometries = [
      new PlaneGeometry(ARENA * 2, ARENA * 2),
      new BoxGeometry(1.2, 0.4, 2),
      new BoxGeometry(0.9, 0.35, 0.9),
      new CylinderGeometry(0.28, 0.28, 0.2, 16),
      new BoxGeometry(CRATE_SIZE, CRATE_SIZE, CRATE_SIZE),
      new RingGeometry(GOAL.radius - 0.15, GOAL.radius, 48),
    ];
    const [floorGeo, bodyGeo, cabinGeo, wheelGeo, crateGeo, goalGeo] = geometries;

    const materials = {
      floor: new MeshStandardMaterial({ color: COLORS.floor, roughness: 1 }),
      car: new MeshStandardMaterial({ color: COLORS.car, roughness: 0.5 }),
      cabin: new MeshStandardMaterial({ color: COLORS.cabin, roughness: 0.3 }),
      wheel: new MeshStandardMaterial({ color: COLORS.wheel, roughness: 0.9 }),
      crate: new MeshStandardMaterial({ color: COLORS.crate, roughness: 0.8 }),
      crateDone: new MeshStandardMaterial({ color: COLORS.crateDone, roughness: 0.6 }),
      goal: new MeshStandardMaterial({ color: COLORS.goal, emissive: COLORS.goal, emissiveIntensity: 0.6 }),
    };

    const floor = new Mesh(floorGeo, materials.floor);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    const grid = new GridHelper(ARENA * 2, ARENA * 2, 0x3f3f46, 0x27272a);
    grid.position.y = 0.01;
    scene.add(grid);

    const goal = new Mesh(goalGeo, materials.goal);
    goal.rotation.x = -Math.PI / 2;
    goal.position.set(GOAL.x, 0.02, GOAL.z);
    scene.add(goal);

    const car = new Group();
    const body = new Mesh(bodyGeo, materials.car);
    body.position.y = 0.45;
    const cabin = new Mesh(cabinGeo, materials.cabin);
    cabin.position.set(0, 0.82, -0.15);
    car.add(body, cabin);
    for (const [x, z] of [
      [-0.62, 0.65],
      [0.62, 0.65],
      [-0.62, -0.65],
      [0.62, -0.65],
    ]) {
      const wheel = new Mesh(wheelGeo, materials.wheel);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(x, 0.28, z);
      car.add(wheel);
    }
    car.traverse((child) => {
      if (child instanceof Mesh) child.castShadow = true;
    });
    scene.add(car);

    const crates = CRATE_START.map(() => {
      const crate = new Mesh(crateGeo, materials.crate);
      crate.castShadow = true;
      crate.receiveShadow = true;
      scene.add(crate);
      return crate;
    });

    // Driving state
    let speed = 0;
    let heading = 0;
    let lastDelivered = -1;

    const reset = () => {
      speed = 0;
      heading = 0;
      car.position.set(0, 0, 0);
      car.rotation.y = 0;
      crates.forEach((crate, i) => {
        const [x, z] = CRATE_START[i];
        crate.position.set(x, CRATE_SIZE / 2, z);
        crate.rotation.y = 0;
      });
    };
    reset();
    resetRef.current = reset;

    // Input: keyboard while the stage has focus, drag as a virtual joystick.
    const keys = new Set<string>();
    const joystick = { active: false, startX: 0, startY: 0, throttle: 0, steer: 0 };
    const DRIVE_KEYS = new Set(["arrowup", "arrowdown", "arrowleft", "arrowright", "w", "a", "s", "d"]);

    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (!DRIVE_KEYS.has(key)) return;
      event.preventDefault();
      keys.add(key);
    };
    const onKeyUp = (event: KeyboardEvent) => keys.delete(event.key.toLowerCase());
    const onBlur = () => keys.clear();

    const onPointerDown = (event: PointerEvent) => {
      container.focus({ preventScroll: true });
      joystick.active = true;
      joystick.startX = event.clientX;
      joystick.startY = event.clientY;
      renderer.domElement.setPointerCapture(event.pointerId);
    };
    const onPointerMove = (event: PointerEvent) => {
      if (!joystick.active) return;
      const clamp = (v: number) => Math.max(-1, Math.min(1, v / JOYSTICK_RANGE));
      joystick.throttle = -clamp(event.clientY - joystick.startY);
      joystick.steer = clamp(event.clientX - joystick.startX);
    };
    const onPointerUp = () => {
      joystick.active = false;
      joystick.throttle = 0;
      joystick.steer = 0;
    };

    container.addEventListener("keydown", onKeyDown);
    container.addEventListener("keyup", onKeyUp);
    container.addEventListener("blur", onBlur);
    renderer.domElement.addEventListener("pointerdown", onPointerDown);
    renderer.domElement.addEventListener("pointermove", onPointerMove);
    renderer.domElement.addEventListener("pointerup", onPointerUp);
    renderer.domElement.addEventListener("pointercancel", onPointerUp);

    const forward = new Vector3();
    const cameraTarget = new Vector3();
    const cameraPosition = new Vector3();
    const limit = ARENA - CRATE_SIZE / 2;

    const step = (dt: number) => {
      const pressed = (a: string, b: string) => keys.has(a) || keys.has(b);
      const throttle =
        (pressed("arrowup", "w") ? 1 : 0) - (pressed("arrowdown", "s") ? 1 : 0) + joystick.throttle;
      const steer =
        (pressed("arrowright", "d") ? 1 : 0) - (pressed("arrowleft", "a") ? 1 : 0) + joystick.steer;

      speed += Math.max(-1, Math.min(1, throttle)) * ACCELERATION * dt;
      speed -= Math.sign(speed) * Math.min(Math.abs(speed), FRICTION * dt);
      speed = Math.max(-MAX_SPEED / 2, Math.min(MAX_SPEED, speed));
      if (Math.abs(speed) > 0.05) {
        heading -= Math.max(-1, Math.min(1, steer)) * TURN_RATE * dt * Math.sign(speed);
      }

      forward.set(Math.sin(heading), 0, Math.cos(heading));
      car.position.addScaledVector(forward, speed * dt);
      car.position.x = Math.max(-ARENA + 1, Math.min(ARENA - 1, car.position.x));
      car.position.z = Math.max(-ARENA + 1, Math.min(ARENA - 1, car.position.z));
      car.rotation.y = heading;

      let inGoal = 0;
      for (const crate of crates) {
        const dx = crate.position.x - car.position.x;
        const dz = crate.position.z - car.position.z;
        const distance = Math.hypot(dx, dz);
        if (distance < PUSH_DISTANCE && distance > 0.0001) {
          const overlap = PUSH_DISTANCE - distance;
          crate.position.x = Math.max(-limit, Math.min(limit, crate.position.x + (dx / distance) * overlap));
          crate.position.z = Math.max(-limit, Math.min(limit, crate.position.z + (dz / distance) * overlap));
          crate.rotation.y += speed * dt * 0.3;
        }
        const done = Math.hypot(crate.position.x - GOAL.x, crate.position.z - GOAL.z) < GOAL.radius;
        crate.material = done ? materials.crateDone : materials.crate;
        if (done) inGoal += 1;
      }
      if (inGoal !== lastDelivered) {
        lastDelivered = inGoal;
        setDelivered(inGoal);
      }

      // Chase camera: behind and above the car, eased.
      cameraPosition.copy(car.position).addScaledVector(forward, -7).setY(5.5);
      camera.position.lerp(cameraPosition, 1 - Math.exp(-4 * dt));
      cameraTarget.copy(car.position).setY(0.6);
      camera.lookAt(cameraTarget);
    };

    camera.position.set(0, 5.5, -7);

    const resize = () => {
      const { clientWidth, clientHeight } = container;
      if (clientWidth === 0 || clientHeight === 0) return;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / clientHeight;
      // Portrait screens see too little of the arena at 50°; widen the view there.
      camera.fov = camera.aspect < 1 ? 72 : 50;
      camera.updateProjectionMatrix();
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    // Render only while the stage is on screen and the tab is visible.
    let frame = 0;
    let last = 0;
    let onScreen = false;
    const loop = (time: number) => {
      const dt = Math.min((time - last) / 1000, 1 / 20);
      last = time;
      step(dt);
      renderer.render(scene, camera);
      frame = requestAnimationFrame(loop);
    };
    const start = () => {
      if (frame || !onScreen || document.hidden) return;
      last = performance.now();
      frame = requestAnimationFrame(loop);
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };
    const intersection = new IntersectionObserver(([entry]) => {
      onScreen = Boolean(entry?.isIntersecting);
      if (onScreen) start();
      else stop();
    });
    intersection.observe(container);
    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      intersection.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      container.removeEventListener("keydown", onKeyDown);
      container.removeEventListener("keyup", onKeyUp);
      container.removeEventListener("blur", onBlur);
      geometries.forEach((geometry) => geometry.dispose());
      Object.values(materials).forEach((material) => material.dispose());
      grid.dispose();
      renderer.dispose();
      renderer.domElement.remove();
      resetRef.current = () => {};
    };
  }, [onError]);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        tabIndex={0}
        role="application"
        aria-roledescription="escena 3D interactiva"
        aria-label="Laboratorio 3D: conduce el carro con WASD o las flechas y empuja las cajas al anillo naranja"
        className="h-[60svh] min-h-80 w-full overflow-hidden rounded-xl border border-gray-800 bg-neutral-950 outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
      />
      <div className="pointer-events-none absolute inset-x-3 top-3 flex items-start justify-between gap-3">
        <p className="rounded-md bg-black/70 px-3 py-1.5 text-sm text-gray-200" aria-live="polite">
          Cajas en el anillo: <span className="font-semibold text-orange-400">{delivered}</span> / {CRATE_START.length}
        </p>
        <button
          type="button"
          onClick={() => resetRef.current()}
          className="pointer-events-auto min-h-11 rounded-md border border-gray-700 bg-black/70 px-3 text-sm font-medium text-gray-200 transition-colors hover:border-orange-500 hover:text-orange-400"
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
}
