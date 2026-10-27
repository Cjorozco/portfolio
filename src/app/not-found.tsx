import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">Página no encontrada</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        La página que buscas no existe o fue movida.
      </p>
      <Link
        href="/"
        className="inline-flex px-6 py-3 bg-orange-700 hover:bg-orange-800 text-white font-medium rounded-md transition-colors"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
