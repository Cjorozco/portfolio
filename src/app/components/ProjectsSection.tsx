import React from 'react';
import { GITHUB_USER, PROJECTS_CONFIG, type Localized, type ProjectConfig } from '../projects.config';

const MAX_PROJECTS = 6;

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  topics?: string[];
  fork: boolean;
  updated_at: string;
}

interface Project {
  id: string;
  title: string;
  description: Localized;
  technologies: string[];
  repoUrl: string;
  demoUrl?: string;
  note?: Localized;
  featured: boolean;
}

const NO_DESCRIPTION: Localized = {
  es: 'Sin descripción disponible.',
  en: 'No description available.',
};

// Renders both languages; globals.css shows the one selected in AboutSection (default: ES).
const T = ({ text }: { text: Localized }) => (
  <>
    <span className="i18n-es">{text.es}</span>
    <span className="i18n-en" lang="en">{text.en}</span>
  </>
);

function toProject(name: string, config: ProjectConfig, repo?: GitHubRepo): Project {
  const githubDescription = repo?.description?.trim();
  const fallbackStack = repo?.language ? [repo.language] : (repo?.topics?.slice(0, 3) ?? []);

  return {
    id: repo ? repo.id.toString() : name,
    title: config.title ?? name.replace(/-/g, ' '),
    description: config.description ?? (githubDescription ? { es: githubDescription, en: githubDescription } : NO_DESCRIPTION),
    technologies: config.stack ?? fallbackStack,
    repoUrl: repo?.html_url ?? `https://github.com/${GITHUB_USER}/${name}`,
    demoUrl: config.demoUrl,
    note: config.note,
    featured: config.featured ?? false,
  };
}

async function fetchRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`,
      {
        next: { revalidate: 3600 } // Revalidate every hour
      }
    );

    if (!res.ok) {
      console.error('Failed to fetch repos');
      return [];
    }

    return (await res.json()) as GitHubRepo[];
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

async function getProjects(): Promise<Project[]> {
  const repos = await fetchRepos();
  const reposByName = new Map(repos.map((repo) => [repo.name, repo]));

  const pinnedEntries = Object.entries(PROJECTS_CONFIG)
    .filter(([, config]) => !config.hidden && config.order !== undefined)
    .sort(([, a], [, b]) => (a.order ?? 0) - (b.order ?? 0));
  const pinnedNames = new Set(pinnedEntries.map(([name]) => name));

  // Pinned cards render from local config, so they survive a GitHub API failure.
  const pinned = pinnedEntries
    .filter(([name, config]) => config.description !== undefined || reposByName.has(name))
    .map(([name, config]) => toProject(name, config, reposByName.get(name)));

  const others = repos
    .filter((repo) => !repo.fork && !pinnedNames.has(repo.name) && !PROJECTS_CONFIG[repo.name]?.hidden)
    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
    .map((repo) => toProject(repo.name, PROJECTS_CONFIG[repo.name] ?? {}, repo));

  return [...pinned, ...others].slice(0, MAX_PROJECTS);
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
        {project.featured && (
          <span className="absolute top-3 left-3 text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-950/60 px-2.5 py-0.5 rounded-full border border-orange-200 dark:border-orange-800">
            <T text={{ es: 'Destacado', en: 'Featured' }} />
          </span>
        )}
      </div>
      <div className="flex flex-col flex-grow p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white capitalize">{project.title}</h3>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300 flex-grow">
          <T text={project.description} />
        </p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            <T text={{ es: 'Tecnologías:', en: 'Technologies:' }} />
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-xs font-medium text-gray-800 dark:text-gray-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-2">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors duration-300"
            >
              <T text={{ es: 'Ver demo', en: 'Live demo' }} />
            </a>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={
              project.demoUrl
                ? 'inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-orange-600 dark:text-orange-400 border border-orange-500 rounded-md hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors duration-300'
                : 'inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors duration-300'
            }
          >
            <T text={{ es: 'Ver en GitHub', en: 'View on GitHub' }} />
          </a>
          {project.note && (
            <span className="text-xs text-gray-500 dark:text-gray-400">
              <T text={project.note} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = async ({ id }: { id: string }) => {
  const projects = await getProjects();

  return (
    <section id={id} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            <T text={{ es: 'Proyectos en GitHub', en: 'Projects on GitHub' }} />
          </h2>
          <div className="w-16 h-1 mx-auto bg-orange-500 rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            <T text={{ es: 'Explora mis repositorios más recientes obtenidos directamente de GitHub.', en: 'Explore my most recent repositories, fetched directly from GitHub.' }} />
          </p>
        </div>

        {/* Banner de Proyecto Empresarial Privado */}
        <div className="mb-12 max-w-4xl mx-auto p-5 rounded-xl bg-white dark:bg-gray-800 border border-orange-500/30 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-950/60 px-2.5 py-0.5 rounded-full border border-orange-200 dark:border-orange-800">
                Plataforma Empresarial Destacada
              </span>
              <span className="text-xs font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">
                🔒 Repositorio Privado
              </span>
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                ● En desarrollo activo
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Ecosistemas Platform — Gestión Operativa &amp; Panel Administrativo
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 max-w-2xl leading-relaxed">
              Arquitectura end-to-end con Next.js, React y TypeScript para gestión de clientes, rutas y recolecciones en producción. Actualmente desarrollando un nuevo módulo operativo cotizado para la plataforma empresarial.
            </p>
          </div>
          <a
            href="#about"
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-md transition-all duration-300 shadow hover:scale-105 active:scale-95"
          >
            Ver en Experiencia →
          </a>
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
              <T text={{ es: 'No se han podido cargar los proyectos en este momento.', en: 'Projects could not be loaded right now.' }} />
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
