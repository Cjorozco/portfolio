'use client'

import React, { useState } from 'react';
import Image from 'next/image';

const AboutSection = () => {
  const [language, setLanguage] = useState('es'); // 'es' para español, 'en' para inglés

  const content = {
    es: {
      title: "Sobre Mí",
      role: "Senior Frontend Developer",
      summary: [
        "Senior Frontend Engineer y Technical Owner con 8 años de experiencia. Experto en la arquitectura de soluciones web escalables con React/TypeScript para los sectores FinTech y Banca.",
        "Enfocado en dashboards de alto rendimiento, arquitecturas modulares y manejo eficiente de datos.",
        "Priorizo el desarrollo pragmático asistido por IA y soluciones basadas en documentación por encima de la memorización de sintaxis para entregar funcionalidades listas para producción con mayor agilidad."
      ],
      skillsTitle: "Mis principales habilidades:",
      personalTraits: "Soy un profesional metódico, con gran capacidad analítica y orientado a resultados. Busco aportar a productos web innovadores dentro de equipos de alto impacto.",
      experienceTitle: "Experiencia Profesional",
      currentJob: "Último",
      education: "Educación",
      jobs: [
        {
          title: "Senior Frontend Developer",
          company: "WEARE DEV S.A.S.",
          period: "Diciembre 2022 - Enero 2026",
          location: "Envigado, Colombia",
          projects: "Proyectos principales: Plataformas bancarias (Prepago BaaS, Grandes Exposiciones, Portal Administrativo Colte)",
          responsibilities: [
            "Colaboré en un equipo frontend senior para definir y estandarizar el stack tecnológico (React 18, Vite, Redux Toolkit) y los flujos de trabajo para aplicaciones bancarias críticas.",
            "Arquitectura y Rendimiento: Diseñé arquitecturas frontend escalables enfocadas en el renderizado eficiente de grandes conjuntos de datos transaccionales.",
            "Autonomía en UI: Implementé sistemas de componentes reutilizables con Tailwind CSS y Material UI. Gestioné mockups y layouts básicos en ausencia de diseñadores dedicados.",
            "Modernización: Lideré la migración de Create React App a Vite, reduciendo los tiempos de compilación y mejorando la experiencia del desarrollador (DX)."
          ]
        },
        {
          title: "Frontend Developer",
          company: "DRAXO S.A.S.",
          period: "Octubre 2017 - Mayo 2022",
          location: "Medellín, Colombia",
          responsibilities: [
            "Desarrollo de Interfaces: Desarrollé interfaces web responsivas para diversos clientes, asegurando alta fidelidad a los diseños y compatibilidad entre navegadores.",
            "Modernización: Contribuí en la migración de proyectos legados hacia flujos de trabajo modernos en React, implementando componentes funcionales y hooks.",
            "Manejo de Estado: Gestioné el estado de aplicaciones usando Context API y Redux, optimizando el flujo de datos.",
            "Crecimiento Técnico: Consolidé el uso de CSS-in-JS (Styled Components) y Material UI para la creación de librerías de componentes reutilizables."
          ]
        },
        {
          title: "Empresario",
          company: "Ventas Personales",
          period: "Febrero 2015 - Septiembre 2017",
          responsibilities: [
            "Fundación y gestión de negocio minorista con enfoque en ventas digitales y logística personalizada.",
            "Desarrollo de estrategias de fidelización de clientes y crecimiento sostenido de ingresos."
          ]
        }
      ],
      degrees: [
        {
          title: "Ingeniero de Sistemas",
          institution: "Universidad del Norte, Barranquilla",
          year: "2010"
        },
        {
          title: "Especialista en Gerencia de Sistemas de Información",
          institution: "Universidad del Norte, Barranquilla",
          year: "2011"
        }
      ],
      certifications: [
        {
          title: "Introducción a la Programación con Python",
          institution: "Universidad Católica de Oriente (UCO)",
          status: "Verificado",
          link: "https://bit.ly/4alovCj"
        },
        {
          title: "Inteligencia de negocios con Power BI",
          institution: "En curso",
          status: "En curso"
        }
      ]
    },
    en: {
      title: "About Me",
      role: "Senior Frontend Developer",
      summary: [
        "Senior Frontend Engineer and Technical Owner with 8 years of experience. Expert in architecting scalable web solutions with React/TypeScript for the FinTech and Banking sectors.",
        "Focused on high-performance dashboards, modular architectures, and efficient data handling.",
        "I prioritize pragmatic AI-assisted development and documentation-based solutions over syntax memorization to deliver production-ready features with greater agility."
      ],
      skillsTitle: "My core skills:",
      personalTraits: "I am a methodical, analytical, and results-oriented professional. I'm always looking to contribute to innovative web products within high-impact tech teams.",
      experienceTitle: "Professional Experience",
      currentJob: "Last",
      education: "Education",
      jobs: [
        {
          title: "Senior Frontend Developer",
          company: "WEARE DEV S.A.S.",
          period: "December 2022 - January 2026",
          location: "Envigado, Colombia",
          projects: "Main projects: Banking platforms (Prepaid BaaS, Large Exposures, Colte Admin Portal)",
          responsibilities: [
            "Collaborated within a senior frontend team to define and standardize the tech stack (React 18, Vite, Redux Toolkit) and workflows for critical banking applications.",
            "Architecture & Performance: Designed scalable frontend architectures focused on efficient rendering of large transactional datasets.",
            "UI Autonomy: Implemented reusable component systems with Tailwind CSS and Material UI. Managed mockups and basic layouts in the absence of dedicated designers.",
            "Modernization: Led the migration from Create React App to Vite, drastically reducing build times and improving developer experience (DX)."
          ]
        },
        {
          title: "Frontend Developer",
          company: "DRAXO S.A.S.",
          period: "October 2017 - May 2022",
          location: "Medellín, Colombia",
          responsibilities: [
            "Interface Development: Developed responsive web interfaces for various clients, ensuring high fidelity to designs and cross-browser compatibility.",
            "Modernization: Contributed to the migration of legacy projects to modern React workflows, implementing functional components and hooks.",
            "State Management: Managed application state using Context API and Redux, optimizing data flow.",
            "Technical Growth: Consolidated the use of CSS-in-JS (Styled Components) and Material UI to create reusable component libraries."
          ]
        },
        {
          title: "Entrepreneur",
          company: "Personal Sales Business",
          period: "February 2015 - September 2017",
          responsibilities: [
            "Founded and managed a retail business focused on digital sales and logistics management.",
            "Developed customer loyalty strategies and achieved sustained revenue growth."
          ]
        }
      ],
      degrees: [
        {
          title: "B.Sc. in Computer Science (Systems Engineering)",
          institution: "Universidad del Norte, Barranquilla",
          year: "2010"
        },
        {
          title: "Postgraduate Degree, Management Information Systems",
          institution: "Universidad del Norte, Barranquilla",
          year: "2011"
        }
      ],
      certifications: [
        {
          title: "Introduction to Programming with Python",
          institution: "Universidad Católica de Oriente (UCO)",
          status: "Verified",
          link: "https://bit.ly/4alovCj"
        },
        {
          title: "Business Intelligence with Power BI",
          institution: "In progress",
          status: "In progress"
        }
      ]
    }
  };

  const skills = ['React.js', 'JavaScript', 'HTML/CSS', 'Git/GitHub', 'Cypress.io', 'RESTful APIs', 'Scrum'];
  const currentContent = content[language as keyof typeof content];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Language Selector */}
          <div className="flex justify-end mb-8">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                onClick={() => setLanguage('es')}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${language === 'es'
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
              >
                Español
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${language === 'en'
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
              >
                English
              </button>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-black mb-8 text-center">{currentContent.title}</h2>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Columna de imagen del perfil */}
            <div className="md:col-span-1 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg">
                {/* Reemplaza con tu foto o usa un placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white text-5xl font-bold">
                  JO
                </div>
                <Image
                  src="/images/profile.jpg"
                  alt="José Carlos Orozco - Senior Frontend Developer"
                  fill
                  className="object-cover"
                  sizes="256px"
                  priority
                />

              </div>
            </div>

            {/* Columna de texto */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-black mb-4">{currentContent.role}</h3>

              {currentContent.summary.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4">
                  {paragraph}
                </p>
              ))}

              <div className="mb-6">
                <h4 className="font-semibold text-black mb-2">{currentContent.skillsTitle}</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-gray-700">
                {currentContent.personalTraits}
              </p>
            </div>
          </div>

          {/* Línea cronológica de experiencia */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">
              {currentContent.experienceTitle}
            </h3>

            <div className="space-y-12">
              {currentContent.jobs.map((job, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-orange-500">
                  <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-orange-500"></div>
                  <div className="mb-1 flex items-center">
                    <h4 className="font-bold text-xl text-black">{job.title}</h4>
                    {index === 0 && (
                      <span className="ml-2 text-sm text-orange-600 font-medium bg-orange-100 px-2 py-0.5 rounded">
                        {currentContent.currentJob}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-1">{job.company} | {job.period}</p>
                  {job.location && <p className="text-gray-500 text-sm mb-1">{job.location}</p>}
                  {job.projects && <p className="text-orange-600 text-sm font-medium mb-2 italic">{job.projects}</p>}
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {job.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Educación y Certificaciones */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-8 text-center md:text-left">
                {currentContent.education}
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 h-full">
                {currentContent.degrees.map((degree, index) => (
                  <div key={index} className={index > 0 ? "mt-4" : ""}>
                    <h4 className="font-bold text-lg text-black mb-1">{degree.title}</h4>
                    <p className="text-gray-600 mb-1">{degree.institution}</p>
                    <p className="text-gray-700 text-sm">{degree.year}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-8 text-center md:text-left">
                {language === 'es' ? 'Certificaciones' : 'Certifications'}
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 h-full">
                {currentContent.certifications.map((cert: { title: string; institution: string; status: string; link?: string }, index: number) => (
                  <div key={index} className={index > 0 ? "mt-4" : ""}>
                    <h4 className="font-bold text-lg text-black mb-1">{cert.title}</h4>
                    <p className="text-gray-600 mb-1 text-sm">{cert.institution}</p>
                    {cert.link ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:underline text-sm font-medium"
                      >
                        {cert.status} →
                      </a>
                    ) : (
                      <span className="text-orange-600 bg-orange-50 px-2 py-0.5 rounded text-xs font-medium border border-orange-100">
                        {cert.status}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;