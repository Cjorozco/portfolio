import type { Metadata } from "next";
import Link from "next/link";
import LabStage from "./LabStage";

export const metadata: Metadata = {
  title: "Laboratorio 3D",
  description:
    "Experimento técnico con Three.js: una escena 3D interactiva cargada solo en esta ruta, con alternativa estática para movimiento reducido.",
};

export default function LabPage() {
  return (
    <main className="min-h-screen bg-black px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center text-sm text-gray-400 transition-colors hover:text-orange-400"
        >
          ← Volver al portfolio
        </Link>

        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">Laboratorio 3D</h1>
        <p className="mt-3 max-w-2xl text-gray-300 leading-relaxed">
          Un experimento para jugar: conduce el carro y empuja las cajas hasta el anillo naranja. Está hecho con
          Three.js, sin motor de física ni modelos externos, y su código solo se descarga en esta página.
        </p>

        <div className="mt-8">
          <LabStage />
        </div>

        <section aria-labelledby="lab-controls" className="mt-6 text-sm text-gray-400">
          <h2 id="lab-controls" className="font-semibold text-gray-200">
            Controles
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Teclado: haz clic en la escena (o llega con Tab) y usa WASD o las flechas.</li>
            <li>Ratón o pantalla táctil: arrastra sobre la escena; arriba acelera, abajo frena y los lados giran.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
