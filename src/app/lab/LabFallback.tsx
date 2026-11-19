export type FallbackReason = "reduced-motion" | "no-webgl" | "error";

const MESSAGES: Record<FallbackReason, string> = {
  "reduced-motion":
    "Tienes activado «reducir movimiento», así que la escena 3D no se carga. Esta imagen muestra la misma idea.",
  "no-webgl": "Tu navegador no tiene WebGL disponible, así que la escena 3D no se puede mostrar. Esta imagen muestra la misma idea.",
  error: "La escena 3D no pudo iniciar en este dispositivo. Esta imagen muestra la misma idea.",
};

/** Static stand-in for the 3D scene: same idea (car, crates, goal ring), no WebGL, no motion. */
export default function LabFallback({ reason }: { reason: FallbackReason }) {
  return (
    <figure className="overflow-hidden rounded-xl border border-gray-800 bg-neutral-950">
      <svg
        viewBox="0 0 320 180"
        role="img"
        aria-label="Ilustración: un carro naranja sobre una cuadrícula empuja cajas grises hacia un anillo naranja"
        className="block h-auto w-full"
      >
        <defs>
          <pattern id="lab-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20" fill="none" stroke="#27272a" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="320" height="180" fill="url(#lab-grid)" />
        <ellipse cx="250" cy="130" rx="38" ry="18" fill="none" stroke="#f97316" strokeWidth="4" />
        <rect x="236" y="112" width="22" height="22" rx="2" fill="#f97316" />
        <rect x="150" y="96" width="22" height="22" rx="2" fill="#737373" />
        <rect x="70" y="40" width="22" height="22" rx="2" fill="#737373" />
        <rect x="200" y="36" width="22" height="22" rx="2" fill="#737373" />
        <g transform="translate(96 104) rotate(-20)">
          <rect x="-24" y="-12" width="48" height="24" rx="4" fill="#ea580c" />
          <rect x="-6" y="-9" width="18" height="18" rx="3" fill="#f5f5f4" />
          <rect x="-18" y="-16" width="10" height="5" rx="2" fill="#262626" />
          <rect x="10" y="-16" width="10" height="5" rx="2" fill="#262626" />
          <rect x="-18" y="11" width="10" height="5" rx="2" fill="#262626" />
          <rect x="10" y="11" width="10" height="5" rx="2" fill="#262626" />
        </g>
        <path d="M128 100 L146 104" stroke="#a3a3a3" strokeWidth="2" strokeDasharray="4 4" />
      </svg>
      <figcaption className="border-t border-gray-800 px-4 py-3 text-sm text-gray-300">{MESSAGES[reason]}</figcaption>
    </figure>
  );
}
