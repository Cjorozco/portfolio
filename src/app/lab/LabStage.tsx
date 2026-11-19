"use client";

import dynamic from "next/dynamic";
import { useCallback, useState, useSyncExternalStore } from "react";
import LabFallback from "./LabFallback";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

type Mode = "checking" | "scene" | "reduced-motion" | "no-webgl";

const Placeholder = () => (
  <div
    className="flex h-[60svh] min-h-80 w-full items-center justify-center rounded-xl border border-gray-800 bg-neutral-950 text-sm text-gray-400"
    role="status"
  >
    Cargando escena 3D…
  </div>
);

// Three.js lives only in this chunk: it is requested once the stage decides to show the scene.
const LabScene = dynamic(() => import("./LabScene"), { ssr: false, loading: Placeholder });

let webglSupport: boolean | undefined;
function hasWebGL(): boolean {
  if (webglSupport === undefined) {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl2") ?? canvas.getContext("webgl");
      webglSupport = Boolean(gl);
      // Release the probe context right away; browsers cap live WebGL contexts.
      gl?.getExtension("WEBGL_lose_context")?.loseContext();
    } catch {
      webglSupport = false;
    }
  }
  return webglSupport;
}

function subscribe(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getMode(): Mode {
  if (window.matchMedia(REDUCED_MOTION).matches) return "reduced-motion";
  return hasWebGL() ? "scene" : "no-webgl";
}

const getServerMode = (): Mode => "checking";

/** Chooses between the 3D scene and its static fallback; reacts if reduced motion is toggled. */
export default function LabStage() {
  const mode = useSyncExternalStore(subscribe, getMode, getServerMode);
  const [failed, setFailed] = useState(false);
  const onError = useCallback(() => setFailed(true), []);

  if (mode === "checking") return <Placeholder />;
  if (mode !== "scene") return <LabFallback reason={mode} />;
  if (failed) return <LabFallback reason="error" />;
  return <LabScene onError={onError} />;
}
