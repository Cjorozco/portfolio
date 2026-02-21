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
        "Senior Frontend Engineer con 8 años de experiencia desarrollando interfaces web complejas, escalables y orientadas al rendimiento utilizando React.",
        "Desarrollador React-first con experiencia sólida en producción usando TypeScript, gestión moderna de estado y arquitecturas de componentes reutilizables para plataformas enterprise y bancarias.",
        "Enfoque fuerte en arquitectura frontend, optimización de performance e interfaces con alta complejidad de interacción. Experiencia trabajando con pruebas E2E automatizadas (Cypress), integración de APIs REST y equipos Scrum en entornos de alta presión."
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
          responsibilities: [
            "Lideré el desarrollo de aplicaciones web bancarias críticas usando React 18, TypeScript y Vite.",
            "Diseñé arquitecturas frontend escalables con Redux Toolkit y formularios complejos usando React Hook Form + Zod.",
            "Mejoré el rendimiento mediante lazy loading, code splitting y optimización de renders.",
            "Migré proyectos legacy de Create React App a Vite, reduciendo tiempos de build de minutos a segundos.",
            "Construí y mantuve sistemas de componentes reutilizables con Material UI, Ant Design, Radix UI y Tailwind CSS.",
            "Integré múltiples APIs REST con manejo centralizado de errores y flujos seguros de datos.",
            "Implementé pruebas E2E automatizadas con Cypress para validar flujos críticos de usuario y mejorar la estabilidad en producción.",
            "Colaboré estrechamente con QA, backend y producto en equipos Scrum con entregas exigentes."
          ]
        },
        {
          title: "Frontend Developer",
          company: "DRAXO S.A.S.",
          period: "Octubre 2017 - Mayo 2022",
          responsibilities: [
            "Desarrollé y mantuve interfaces frontend usando React y Styled Components.",
            "Enfoque en maquetación responsive, consistencia visual y reutilización de componentes.",
            "Consumo de APIs REST y manejo de estado con Redux.",
            "Soporte a incidencias en producción y ajustes continuos de UI.",
            "Trabajo colaborativo con diseño y backend en múltiples proyectos de clientes."
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
        "Senior Frontend Engineer with 8 years of experience building complex, scalable, and performance-critical web interfaces using React.",
        "React-first developer with solid production experience using TypeScript, modern state management, and reusable component architectures for enterprise and banking platforms.",
        "Strong focus on frontend architecture, performance optimization, and interaction-heavy user interfaces. Experienced working with automated E2E testing (Cypress), REST API integration, and collaborative Scrum teams in high-pressure delivery environments."
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
          responsibilities: [
            "Led the development of critical banking web applications using React 18, TypeScript, and Vite.",
            "Designed scalable frontend architectures with Redux Toolkit and complex forms using React Hook Form + Zod.",
            "Improved performance through lazy loading, code splitting, and render optimization.",
            "Migrated legacy projects from Create React App to Vite, reducing build times from minutes to seconds.",
            "Built and maintained reusable component systems with Material UI, Ant Design, Radix UI, and Tailwind CSS.",
            "Integrated multiple REST APIs with centralized error handling and secure data flows.",
            "Implemented automated E2E testing with Cypress to validate critical user flows and improve production stability.",
            "Collaborated closely with QA, backend, and product in Scrum teams with demanding deliverables."
          ]
        },
        {
          title: "Frontend Developer",
          company: "DRAXO S.A.S.",
          period: "October 2017 - May 2022",
          responsibilities: [
            "Developed and maintained frontend interfaces using React and Styled Components.",
            "Focused on responsive layouts, visual consistency, and component reusability.",
            "Consumed REST APIs and managed state with Redux.",
            "Provided support for production incidents and continuous UI improvements.",
            "Collaborated with design and backend teams on multiple client projects."
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
                  alt="José Carlos Orozco"
                  layout="fill"
                  objectFit="cover"
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
                  <p className="text-gray-600 mb-2">{job.company} | {job.period}</p>
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
                {/* @ts-ignore - certifications added to content */}
                {currentContent.certifications.map((cert: any, index: number) => (
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