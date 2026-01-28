// Este componente es SERVER COMPONENT por defecto
// Se ejecuta en el servidor, no en el navegador

type Repo = {
    id: number;
    name: string;
    html_url: string;
    description: string;
    language: string;
};

async function getRepos(): Promise<Repo[]> {
    // fetch en Next.js soporta caching y revalidación
    const res = await fetch(
        'https://api.github.com/users/Cjorozco/repos',
        {
            // Revalida cada 1 hora
            next: { revalidate: 3600 }
        }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch repos');
    }

    const allRepos: Repo[] = await res.json();

    // Priorizamos los repositorios solicitados por el usuario
    const priorityRepos = ['portfolio', 'node-api-for-frontend', 'react-shop'];

    return allRepos.sort((a, b) => {
        const aPriority = priorityRepos.indexOf(a.name);
        const bPriority = priorityRepos.indexOf(b.name);

        if (aPriority !== -1 && bPriority !== -1) return aPriority - bPriority;
        if (aPriority !== -1) return -1;
        if (bPriority !== -1) return 1;
        return 0;
    });
}

export default async function ProjectsPage() {
    const repos = await getRepos();

    return (
        <section className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8 text-black dark:text-white border-b-2 border-orange-500 pb-2 inline-block">
                Projects
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.map(repo => (
                    <div key={repo.id} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                        <h2 className="text-xl font-bold mb-2 text-orange-600 dark:text-orange-400 capitalize">
                            {repo.name.replace(/-/g, ' ')}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-2">
                            {repo.description || 'Sin descripción.'}
                        </p>
                        {repo.language && (
                            <span className="text-xs font-medium bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-800 dark:text-gray-200 mb-4 inline-block">
                                {repo.language}
                            </span>
                        )}
                        <div className="mt-auto pt-4">
                            <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-500 hover:underline font-medium text-sm"
                            >
                                Ver en GitHub →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
