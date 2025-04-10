import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
  repoUrl?: string;
  demoUrl?: string;
  status: 'completed' | 'in-progress';
}

const projects: Project[] = [
  {
    id: 'personal-website',
    title: 'Sitio Web Personal / Portafolio',
    description: 'Desarrollo de mi sitio web personal utilizando tecnologías modernas de frontend para mostrar mi experiencia profesional, habilidades técnicas y proyectos.',
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS 4'],
    imageUrl: '/images/projects/personal-website.jpg',
    projectUrl: '/',
    status: 'in-progress',
  },
  {
    id: 'react-shop',
    title: 'React Shop',
    description: 'Tienda en línea desarrollada como parte de un curso en Platzi. Implementa conceptos fundamentales de React como enrutamiento, manejo de estado y consumo de APIs.',
    technologies: ['React 17', 'React Router', 'Webpack', 'Sass', 'Axios'],
    imageUrl: '/images/projects/react-shop.jpg',
    projectUrl: '/projects/react-shop',
    repoUrl: 'https://github.com/Cjorozco/react-shop',
    demoUrl: 'https://cjorozco.github.io/react-shop/',
    status: 'completed',
  },
  // Puedes agregar más proyectos aquí cuando los tengas
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl bg-white dark:bg-gray-800">
      <div className="relative h-48 w-full">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
        />
        {project.status === 'in-progress' && (
          <span className="absolute top-2 right-2 bg-yellow-500 text-xs font-medium px-2 py-1 rounded-full text-white">
            En progreso
          </span>
        )}
        {project.status === 'completed' && (
          <span className="absolute top-2 right-2 bg-green-500 text-xs font-medium px-2 py-1 rounded-full text-white">
            Completado
          </span>
        )}
      </div>
      <div className="flex flex-col flex-grow p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300 flex-grow">{project.description}</p>
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
          <Link href={project.projectUrl} className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors duration-300">
            Ver detalles
          </Link>
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300">
              GitHub
            </a>
          )}
          {/* {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300">
              Demo
            </a>
          )} */}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Proyectos Destacados</h2>
          <div className="w-16 h-1 mx-auto bg-orange-500 rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades y experiencia técnica.
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
              Próximamente se agregarán proyectos destacados.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;