'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Job {
  title: string;
  company: string;
  period: string;
  location: string;
  projects?: string;
  isPrivate?: boolean;
  statusBadge?: string;
  responsibilities: string[];
}

interface Degree {
  title: string;
  institution: string;
  year: string;
}

interface Certification {
  title: string;
  institution: string;
  status: string;
  link?: string;
}

interface LanguageItem {
  name: string;
  level: string;
}

interface ContentSection {
  title: string;
  role: string;
  summary: string[];
  skillsTitle: string;
  personalTraits: string;
  experienceTitle: string;
  currentJob: string;
  education: string;
  certificationsTitle: string;
  languagesTitle: string;
  privateRepoLabel: string;
  jobs: Job[];
  degrees: Degree[];
  certifications: Certification[];
  languages: LanguageItem[];
}

const AboutSection = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  // Share the selected language with server-rendered sections (see .i18n-* in globals.css).
  useEffect(() => {
    // Default language needs no attribute: avoids a document-wide style invalidation on hydration.
    if (language === 'en') document.documentElement.dataset.lang = 'en';
    else delete document.documentElement.dataset.lang;
  }, [language]);

  const content: { es: ContentSection; en: ContentSection } = {
    es: {
      title: "Sobre Mí",
      role: "Senior Frontend Engineer · React, Next.js, TypeScript",
      summary: [
        "Ingeniero Frontend Senior con más de 8 años de experiencia construyendo aplicaciones web escalables y de alto rendimiento en React y JavaScript (TypeScript desde 2022), especializado en sectores críticos como Fintech y Banca.",
        "Experto en arquitectura modular, consumo e integración de APIs REST complejas, manejo de estado global y optimización de interfaces con alto volumen de datos.",
        "Dominio avanzado de desarrollo asistido por IA (Cursor, Claude Code, LLMs) para acelerar tiempos de entrega, refactorización y calidad de código en producción."
      ],
      skillsTitle: "Habilidades Principales:",
      personalTraits: "Profesional metódico, analítico y orientado a resultados, enfocado en diseñar arquitecturas frontend sólidas, accesibles y mantenibles para productos de alto impacto.",
      experienceTitle: "Experiencia Profesional",
      currentJob: "Actual",
      education: "Educación",
      certificationsTitle: "Certificaciones",
      languagesTitle: "Idiomas",
      privateRepoLabel: "Repositorio Privado Empresarial",
      jobs: [
        {
          title: "Desarrollador Full Stack (Next.js + Convex) · de punta a punta, desde levantamiento de requisitos hasta producción",
          company: "Ecosistemas y Medio Ambiente",
          period: "Julio 2026 – Presente",
          location: "Barranquilla, Colombia",
          projects: "Plataforma web de gestión operativa (clientes, rutas y recolecciones)",
          isPrivate: true,
          statusBadge: "En desarrollo activo (Nuevo módulo operativo)",
          responsibilities: [
            "Diseñé la arquitectura técnica y lideré el desarrollo end-to-end de una plataforma web de gestión operativa (clientes, rutas y recolecciones), logrando el despliegue exitoso a producción.",
            "Desarrollé el panel administrativo con React, Next.js y TypeScript, garantizando arquitectura modular, alto rendimiento e integración de APIs backend y base de datos.",
            "Colaboré con stakeholders para levantar requerimientos y traducir necesidades operativas en funcionalidades técnicas escalables.",
            "Liderando actualmente la arquitectura y desarrollo de un nuevo módulo operativo para la plataforma (desarrollado en el repositorio empresarial privado de la organización)."
          ]
        },
        {
          title: "Senior Frontend Developer",
          company: "WEARE DEV S.A.S.",
          period: "Diciembre 2022 – Enero 2026",
          location: "Envigado, Colombia (Remoto)",
          projects: "Plataformas bancarias de alto tráfico (Prepago BaaS, Grandes Exposiciones y Portales Administrativos)",
          responsibilities: [
            "Diseñé e implementé arquitecturas frontend en React, TypeScript y Redux Toolkit para plataformas bancarias de alto tráfico (Prepago BaaS, Grandes Exposiciones y Portales Administrativos).",
            "Optimicé el flujo de desarrollo y tiempos de compilación (builds) migrando la arquitectura base de Create React App a Vite.",
            "Construí sistemas de componentes UI reutilizables con Tailwind CSS y Material UI, asegurando consistencia visual y acelerando la velocidad de desarrollo.",
            "Integré APIs REST complejas manejando autenticación, estados de error y procesamiento eficiente de grandes volúmenes de datos transaccionales."
          ]
        },
        {
          title: "Frontend Developer",
          company: "DRAXO S.A.S.",
          period: "Octubre 2017 – Mayo 2022",
          location: "Medellín, Colombia (Remoto)",
          responsibilities: [
            "Modernicé aplicaciones legacy migrando arquitecturas antiguas a React moderno basado en componentes funcionales, hooks y estado centralizado (Redux / Context API).",
            "Desarrollé interfaces web responsivas e integradas con servicios RESTful utilizando Styled Components y Material UI."
          ]
        }
      ],
      degrees: [
        {
          title: "Especialización en Gerencia de Sistemas de Información",
          institution: "Universidad del Norte, Barranquilla",
          year: "2011"
        },
        {
          title: "Ingeniería de Sistemas",
          institution: "Universidad del Norte, Barranquilla",
          year: "2010"
        }
      ],
      certifications: [
        {
          title: "Cypress: Web Automation Testing from Zero to Hero",
          institution: "Udemy (2026)",
          status: "Verificado",
          link: "https://www.udemy.com/certificate/UC-4b07ce63-3b34-483a-ab8e-a3da4410b525/"
        },
        {
          title: "Inteligencia de Negocios con Power BI",
          institution: "Universidad Pontificia Bolivariana (2026)",
          status: "Certificado"
        },
        {
          title: "Curso de Inteligencia Artificial",
          institution: "MoureDev (2026)",
          status: "Completado"
        },
        {
          title: "Introducción a la Programación con Python",
          institution: "Universidad Católica de Oriente",
          status: "Certificado"
        }
      ],
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "Intermedio (B1 Funcional)" }
      ]
    },
    en: {
      title: "About Me",
      role: "Senior Frontend Engineer · React, Next.js, TypeScript",
      summary: [
        "Senior Frontend Engineer with 8+ years of experience building scalable, high-performance web applications using React and JavaScript (TypeScript since 2022), specializing in Fintech and Banking sectors.",
        "Proven track record in designing modular frontend architectures, integrating complex REST APIs, and optimizing data-intensive user interfaces.",
        "Advanced practitioner of AI-assisted development (Cursor, Claude Code, LLMs) to streamline workflows, accelerate delivery, and maintain production-grade code quality."
      ],
      skillsTitle: "Core Competencies:",
      personalTraits: "Methodical, analytical, and results-oriented professional focused on delivering robust, accessible, and maintainable frontend architectures for high-impact products.",
      experienceTitle: "Professional Experience",
      currentJob: "Current",
      education: "Education",
      certificationsTitle: "Certifications",
      languagesTitle: "Languages",
      privateRepoLabel: "Enterprise Private Repository",
      jobs: [
        {
          title: "Full Stack Developer (Next.js + Convex) · end to end, from requirements gathering to production",
          company: "Ecosistemas y Medio Ambiente",
          period: "July 2026 – Present",
          location: "Barranquilla, Colombia",
          projects: "Operational management web platform (clients, routes, collections)",
          isPrivate: true,
          statusBadge: "Active Development (New operational module)",
          responsibilities: [
            "Architected and led the end-to-end development of an operational management web platform (clients, routes, collections), successfully delivering the solution to production.",
            "Built the admin dashboard using React, Next.js, and TypeScript, ensuring a modular architecture, high performance, and seamless backend API integration.",
            "Partnered with business stakeholders to translate operational needs into scalable technical specifications.",
            "Currently leading the architecture and implementation of a new operational module for the platform (managed in the client's private enterprise repository)."
          ]
        },
        {
          title: "Senior Frontend Developer",
          company: "WEARE DEV S.A.S.",
          period: "December 2022 – January 2026",
          location: "Envigado, Colombia (Remote)",
          projects: "High-traffic banking platforms (Prepaid BaaS, Large Exposures, Admin Portals)",
          responsibilities: [
            "Architected scalable frontend solutions using React, TypeScript, and Redux Toolkit for high-traffic banking platforms (Prepaid BaaS, Large Exposures, Admin Portals).",
            "Enhanced build performance and developer experience by leading the migration from Create React App to Vite.",
            "Developed reusable UI component systems with Tailwind CSS and Material UI, improving design consistency and feature delivery speed.",
            "Integrated complex REST APIs, handling secure authentication flows, error boundaries, and large transactional datasets."
          ]
        },
        {
          title: "Frontend Developer",
          company: "DRAXO S.A.S.",
          period: "October 2017 – May 2022",
          location: "Medellín, Colombia (Remote)",
          responsibilities: [
            "Modernized legacy web applications by migrating to a modern React stack utilizing functional components, hooks, and centralized state management (Redux / Context API).",
            "Developed responsive UI interfaces connected to RESTful services using Styled Components and Material UI."
          ]
        }
      ],
      degrees: [
        {
          title: "Postgraduate Degree in Management Information Systems",
          institution: "Universidad del Norte, Barranquilla",
          year: "2011"
        },
        {
          title: "B.Sc. in Computer Science (Systems Engineering)",
          institution: "Universidad del Norte, Barranquilla",
          year: "2010"
        }
      ],
      certifications: [
        {
          title: "Cypress: Web Automation Testing from Zero to Hero",
          institution: "Udemy (2026)",
          status: "Verified",
          link: "https://www.udemy.com/certificate/UC-4b07ce63-3b34-483a-ab8e-a3da4410b525/"
        },
        {
          title: "Business Intelligence with Power BI",
          institution: "Universidad Pontificia Bolivariana (2026)",
          status: "Certified"
        },
        {
          title: "Artificial Intelligence Course",
          institution: "MoureDev (2026)",
          status: "Completed"
        },
        {
          title: "Introduction to Programming with Python",
          institution: "Universidad Católica de Oriente",
          status: "Certified"
        }
      ],
      languages: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "Intermediate (B1 Functional)" }
      ]
    }
  };

  const coreTags = [
    'React 18/19',
    'Next.js 15/16',
    'TypeScript',
    'Redux Toolkit',
    'Tailwind CSS',
    'Cypress (E2E)',
    'REST APIs',
    'AI-Assisted Dev (Cursor, Claude Code)'
  ];

  const currentContent = content[language];

  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Language Selector */}
          <div className="flex justify-end mb-8">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                onClick={() => setLanguage('es')}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg border transition-colors ${
                  language === 'es'
                    ? 'bg-orange-700 text-white border-orange-700 shadow'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                Español
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg border transition-colors ${
                  language === 'en'
                    ? 'bg-orange-700 text-white border-orange-700 shadow'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                English
              </button>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {currentContent.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Columna de imagen del perfil */}
            <div className="md:col-span-1 flex justify-center">
              <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl border-2 border-orange-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white text-5xl font-bold">
                  JO
                </div>
                <Image
                  src="/images/profile.jpg"
                  alt="José Carlos Orozco Medina - Senior Frontend Engineer"
                  fill
                  className="object-cover"
                  sizes="256px"
                  priority
                />
              </div>
            </div>

            {/* Columna de texto */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {currentContent.role}
              </h3>
              <p className="text-sm font-medium text-orange-600 dark:text-orange-400 mb-4">
                Barranquilla, Colombia • {language === 'es' ? 'Disponible para Trabajo Remoto' : 'Open to Remote Work'}
              </p>

              {currentContent.summary.map((paragraph, index) => (
                <p key={index} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {currentContent.skillsTitle}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {coreTags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-orange-50 dark:bg-orange-950/40 text-orange-800 dark:text-orange-300 border border-orange-200 dark:border-orange-800/40 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                {currentContent.personalTraits}
              </p>
            </div>
          </div>

          {/* Línea cronológica de experiencia */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {currentContent.experienceTitle}
            </h3>

            <div className="space-y-12">
              {currentContent.jobs.map((job, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-orange-500">
                  <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-orange-500"></div>

                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h4 className="font-bold text-xl text-gray-900 dark:text-white">
                      {job.title}
                    </h4>
                    {index === 0 && (
                      <span className="text-xs text-orange-600 dark:text-orange-300 font-semibold bg-orange-100 dark:bg-orange-950/60 px-2.5 py-0.5 rounded-full border border-orange-200 dark:border-orange-800">
                        {currentContent.currentJob}
                      </span>
                    )}
                    {job.statusBadge && (
                      <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                        ● {job.statusBadge}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 font-medium mb-1">
                    {job.company} | <span className="text-sm">{job.period}</span>
                  </p>

                  {job.location && (
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                      📍 {job.location}
                    </p>
                  )}

                  {job.projects && (
                    <div className="mb-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700">
                      <p className="text-orange-600 dark:text-orange-400 text-sm font-semibold mb-1">
                        {job.projects}
                      </p>
                      {job.isPrivate && (
                        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                          <span className="inline-flex items-center gap-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded font-mono">
                            🔒 {currentContent.privateRepoLabel}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1.5 leading-relaxed text-sm">
                    {job.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Educación, Certificaciones e Idiomas */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {/* Educación */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                {currentContent.education}
              </h3>
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  {currentContent.degrees.map((degree, index) => (
                    <div key={index}>
                      <h4 className="font-bold text-sm text-gray-900 dark:text-white leading-snug">
                        {degree.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-xs mt-0.5">
                        {degree.institution}
                      </p>
                      <p className="text-orange-600 dark:text-orange-400 text-xs font-semibold mt-1">
                        {degree.year}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certificaciones */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                {currentContent.certificationsTitle}
              </h3>
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 h-full">
                <div className="space-y-3.5">
                  {currentContent.certifications.map((cert, index) => (
                    <div key={index}>
                      <h4 className="font-bold text-xs text-gray-900 dark:text-white leading-tight">
                        {cert.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-xs mt-0.5">
                        {cert.institution}
                      </p>
                      {cert.link ? (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-600 text-xs font-medium mt-0.5 transition-colors"
                        >
                          {cert.status} ↗
                        </a>
                      ) : (
                        <span className="inline-block text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-1.5 py-0.5 rounded text-[11px] font-medium border border-emerald-200 dark:border-emerald-800 mt-0.5">
                          ✓ {cert.status}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Idiomas */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                {currentContent.languagesTitle}
              </h3>
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 h-full">
                <div className="space-y-4">
                  {currentContent.languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {lang.name}
                      </span>
                      <span className="text-xs bg-orange-100 dark:bg-orange-950/60 text-orange-800 dark:text-orange-300 px-2 py-0.5 rounded font-medium">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;