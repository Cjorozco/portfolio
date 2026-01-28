import React from 'react';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
  repoUrl?: string;
  status: 'completed' | 'in-progress';
}

async function getRepos(): Promise<Project[]> {
  try {
    const res = await fetch(
      'https://api.github.com/users/Cjorozco/repos?sort=updated&per_page=6',
      {
        next: { revalidate: 3600 } // Revalidate every hour
      }
    );

    if (!res.ok) {
      console.error('Failed to fetch repos');
      return [];
    }

    const repos = await res.json();

    // Priorizamos los repositorios solicitados: portfolio, node-api-for-frontend y react-shop
    const priorityRepos = ['portfolio', 'node-api-for-frontend', 'react-shop'];

    return repos
      .filter((repo: any) => !repo.fork)
      .sort((a: any, b: any) => {
        const aPriority = priorityRepos.indexOf(a.name);
        const bPriority = priorityRepos.indexOf(b.name);

        if (aPriority !== -1 && bPriority !== -1) return aPriority - bPriority;
        if (aPriority !== -1) return -1;
        if (bPriority !== -1) return 1;

        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      })
      .slice(0, 6)
      .map((repo: any) => ({
        id: repo.id.toString(),
        title: repo.name.replace(/-/g, ' '),
        description: repo.description || 'Sin descripción disponible.',
        technologies: repo.language ? [repo.language] : (repo.topics?.slice(0, 3) || []),
        imageUrl: '/images/projects/github-placeholder.jpg', // Placeholder since GitHub doesn't provide screenshots
        projectUrl: repo.html_url,
        repoUrl: repo.html_url,
        status: repo.archived ? 'completed' : 'in-progress',
      }));
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl bg-white dark:bg-gray-800">
      <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        <div className="text-orange-500 text-4xl block">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col flex-grow p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white capitalize">{project.title}</h3>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300 flex-grow line-clamp-3">{project.description}</p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Tecnologías:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-xs font-medium text-gray-800 dark:text-gray-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto flex flex-wrap gap-2">
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors duration-300"
          >
            Ver en GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = async ({ id }: { id: string }) => {
  const projects = await getRepos();

  return (
    <section id={id} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Proyectos en GitHub</h2>
          <div className="w-16 h-1 mx-auto bg-orange-500 rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explora mis repositorios más recientes obtenidos directamente de GitHub.
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300">
              No se han podido cargar los proyectos en este momento.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
