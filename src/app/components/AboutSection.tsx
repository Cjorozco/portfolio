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
        "Senior Frontend Developer con 8 años de experiencia en React, especializado en interfaces web complejas, mantenibles y de alto rendimiento, con foco en performance, estado y escalabilidad.",
        "Experto en React y TypeScript, con dominio en arquitecturas modernas usando Redux Toolkit, React Hook Form y librerías UI enterprise como Material UI y Ant Design.",
        "Especializado en el sector bancario y fintech, desarrollando interfaces para plataformas de remesas y prepago, con foco en seguridad y manejo de datos sensibles.",
        "Aprovecho herramientas de IA (GitHub Copilot, Claude) para optimizar código y resolver problemas complejos, manteniendo un equilibrio entre velocidad y calidad técnica."
      ],
      skillsTitle: "Mis principales habilidades:",
      personalTraits: "Soy un profesional metódico, con gran capacidad analítica y orientado a resultados. Busco aportar a productos web innovadores dentro de equipos de alto impacto.",
      experienceTitle: "Experiencia Profesional",
      currentJob: "Actual",
      education: "Educación",
      jobs: [
        {
          title: "Senior Frontend Developer",
          company: "WEARE DEV S.A.S.",
          period: "Diciembre 2022 - Enero 2026",
          responsibilities: [
            "Lideré el desarrollo de 4 aplicaciones web bancarias de misión crítica usando React 18, TypeScript y Vite.",
            "Implementé estrategias de lazy loading y code-splitting que optimizaron la carga inicial de los aplicativos.",
            "Migré proyectos legacy de CRA a Vite, reduciendo tiempos de build de 3 min a 30 seg.",
            "Automatice el testing E2E con Cypress y unitario con Vitest, elevando la cobertura en componentes críticos.",
            "Integré múltiples APIs RESTful con Axios, configurando interceptores y asegurando datos mediante encriptación node-jose."
          ]
        },
        {
          title: "Frontend Developer",
          company: "DRAXO S.A.S.",
          period: "Octubre 2017 - Mayo 2022",
          responsibilities: [
            "Desarrollé y mantuve una biblioteca de componentes UI reutilizables con React y Styled Components.",
            "Implementé gestión de estado global con Redux y la integración de APIs mediante Axios.",
            "Diagnostiqué y resolví incidencias críticas en producción optimizando el tiempo de respuesta.",
            "Diseñé landing pages responsivas en Webflow para lanzamientos rápidos del equipo de marketing."
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
      ]
    },
    en: {
      title: "About Me",
      role: "Senior Frontend Developer",
      summary: [
        "Senior Frontend Developer with 8 years of experience in React, specializing in complex, maintainable, and high-performance web interfaces with a focus on performance and scalability.",
        "Expert in React and TypeScript, proficient in modern architectures using Redux Toolkit, React Hook Form, and enterprise UI libraries like MUI and Ant Design.",
        "Specialized in banking and fintech sectors, delivering secure interfaces for remittance and prepaid platforms with optimized user experience.",
        "Leveraging AI tools (GitHub Copilot, Claude) to accelerate development and solve complex architectural problems while maintaining clean code."
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
            "Led development of 4 mission-critical banking web applications using React 18, TypeScript, and Vite.",
            "Implemented lazy loading and code-splitting strategies to optimize initial load speed.",
            "Migrated legacy CRA projects to Vite, reducing build times from 3 min to 30 seconds.",
            "Automated E2E testing with Cypress and unit testing with Vitest, improving stability in production.",
            "Integrated RESTful APIs with Axios, configuring interceptors and securing sensitive data with node-jose."
          ]
        },
        {
          title: "Frontend Developer",
          company: "DRAXO S.A.S.",
          period: "October 2017 - May 2022",
          responsibilities: [
            "Developed and maintained a UI component library using React and Styled Components.",
            "Implemented global state management with Redux and API integration via Axios.",
            "Diagnosed and resolved critical production bugs using DevTools to ensure consistent uptime.",
            "Built responsive landing pages in Webflow for rapid marketing campaign launches."
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

          {/* Educación */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">
              {currentContent.education}
            </h3>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              {currentContent.degrees.map((degree, index) => (
                <div key={index} className={index > 0 ? "mt-4" : ""}>
                  <h4 className="font-bold text-xl text-black mb-1">{degree.title}</h4>
                  <p className="text-gray-600 mb-1">{degree.institution}</p>
                  <p className="text-gray-700">{degree.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;