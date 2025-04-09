'use client' 

import React, { useState } from 'react';
import Image from 'next/image';

const AboutSection = () => {
  const [language, setLanguage] = useState('es'); // 'es' para español, 'en' para inglés
  
  const content = {
    es: {
      title: "Sobre Mí",
      role: "Desarrollador Frontend",
      summary: [
        "Desarrollador Frontend con más de 7 años de experiencia construyendo aplicaciones web escalables y centradas en el usuario, utilizando React.js, JavaScript, y frameworks modernos como Ant Design y Material UI. ",
        "Especializado en el sector bancario, desarrollando interfaces responsive e integraciones eficientes con APIs para herramientas internas y plataformas de usuarios finales.",
        "Experto en pruebas automatizadas con Cypress, control de versiones con Git/GitHub y colaboración ágil en equipos Scrum.",
        "Reconocido por un enfoque autónomo, resolución de problemas y comunicación efectiva, habilidades fortalecidas por mi experiencia emprendedora en ventas digitales.",
        "Busco aportar a productos web innovadores dentro de equipos tecnológicos de alto impacto."
      ],
      skillsTitle: "Mis principales habilidades:",
      personalTraits: "Soy un profesional metódico, con gran capacidad analítica y orientado a resultados. Me gusta mantenerme actualizado con las últimas tendencias en desarrollo web y estoy siempre buscando mejorar mis habilidades técnicas y profesionales.",
      experienceTitle: "Experiencia Profesional",
      currentJob: "Actual",
      education: "Educación",
      jobs: [
        {
          title: "Desarrollador Frontend",
          company: "WEARE DEV S.A.S.",
          period: "Diciembre 2022 - Presente",
          responsibilities: [
            "Desarrollo de interfaces web y aplicaciones en React.js siguiendo mejores prácticas, mejorando la velocidad de carga en un 20%.",
            "Colaboración estrecha con desarrolladores backend para integrar APIs RESTful, reduciendo tiempos de implementación en un 30%.",
            "Automatización de pruebas end-to-end usando Cypress.io, logrando más de 90% de cobertura.",
            "Trabajo en entorno ágil (Scrum) usando Jira para gestión eficiente de tareas y seguimiento de proyectos."
          ]
        },
        {
          title: "Desarrollador Frontend",
          company: "DRAXO S.A.S.",
          period: "Octubre 2017 - Mayo 2022",
          responsibilities: [
            "Implementación de componentes reutilizables en React.js, mejorando la consistencia de UI y acelerando la entrega de módulos en un 25%.",
            "Depuración y resolución eficiente de problemas críticos, asegurando la estabilidad de aplicaciones en producción.",
            "Desarrollo de páginas web utilizando Webflow para proyectos específicos, eliminando la necesidad de codificación personalizada.",
            "Gestión de entornos de desarrollo en Linux (Ubuntu), incluyendo configuración de servidores y administración de módulos."
          ]
        },
        {
          title: "Empresario",
          company: "Negocio de ventas personales",
          period: "Febrero 2015 - Septiembre 2017",
          responsibilities: [
            "Creé y gestioné un negocio minorista personal centrado en productos de limpieza para el hogar, artículos de belleza y suplementos para la salud.",
            "Promocioné productos a través de Instagram, WhatsApp y el boca a boca, desarrollando relaciones con los clientes a través de una atención personalizada y una comunicación receptiva.",
            "Mantuvo el inventario y gestionó la logística de cumplimiento de pedidos, garantizando la entrega oportuna y la disponibilidad del producto.",
            "Alcanzó ingresos mensuales de entre $600.000 y $2.000.000, demostrando fuertes habilidades en ventas, servicio al cliente y marketing digital sin apoyo externo."
          ]
        }
      ],
      degrees: [
        {
          title: "Ingeniero de Sistemas",
          institution: "Universidad del Norte, Barranquilla, Colombia",
          year: "2010"
        },
        {
          title: "Especialista en Gerencia de sistemas de información.",
          institution: "Universidad del Norte, Barranquilla, Colombia",
          year: "2011"
        }
      ]
    },
    en: {
      title: "About Me",
      role: "Frontend Developer",
      summary: [
        "Frontend Developer with 7+ years of experience building scalable, user-centric web applications using React.js, JavaScript, and modern UI frameworks like Ant Design and Material UI.",
        "Specialized in the banking and fintech sector, delivering responsive interfaces and efficient API integrations for both internal tools and end-user platforms.",
        "Skilled in automated testing with Cypress, version control with Git/GitHub, and cross-functional collaboration in Scrum environments.",
        "Known for a strong sense of ownership, problem-solving, and communication—shaped by prior entrepreneurial experience managing digital sales and customer service independently.",
        "Seeking to contribute to innovative, high-impact web products in forward-thinking tech teams."
      ],
      skillsTitle: "My core skills:",
      personalTraits: "I am a methodical professional with strong analytical skills and a results-oriented mindset. I enjoy staying updated with the latest trends in web development and am always looking to improve my technical and professional skills.",
      experienceTitle: "Professional Experience",
      currentJob: "Current",
      education: "Education",
      jobs: [
        {
          title: "Frontend Developer",
          company: "WEARE DEV S.A.S.",
          period: "December 2022 - Present",
          responsibilities: [
            "Developed high-performance banking web applications for internal teams and end-users using React.js, Ant Design, and MUI, applying lazy loading and code-splitting techniques to improve page load speed by 20%.",
            "Integrated RESTful APIs using Axios and Redux, streamlining frontend-backend communication and reducing feature implementation time by 30%.",
            "Automated critical user flows and regression scenarios with Cypress.io, achieving 90%+ test coverage and improving deployment confidence.",
            "Participated in bi-weekly Scrum sprints using Jira, ensuring timely delivery of frontend features and enhancing team velocity through better task management and communication."
          ]
        },
        {
          title: "Frontend Developer",
          company: "DRAXO S.A.S.",
          period: "October 2017 - May 2022",
          responsibilities: [
            "Developed and maintained reusable UI components in React.js and Styled Components, improving UI consistency and reducing development time by 25% across modules.",
            "Diagnosed and resolved production bugs using Chrome DevTools, Redux DevTools, and Jira, ensuring consistent uptime and fast incident resolution.",
            "Designed and deployed responsive landing pages using Webflow, accelerating delivery for marketing campaigns without requiring custom frontend development.",
            "Configured and maintained local dev environments on Ubuntu, streamlining build processes and enabling efficient testing and deployment for frontend modules."
          ]
        },
        {
          title: "Entrepreneur",
          company: "Personal Sales Business",
          period: "February 2017 - September 2017",
          responsibilities: [
            "Built and managed a personal retail business focused on home cleaning products, beauty items, and health supplements. ",
            "Promoted products via Instagram, WhatsApp, and word-of-mouth, developing client relationships through personalized attention and responsive communication.",
            "Maintained inventory and managed order fulfillment logistics, ensuring timely delivery and product availability.",
            "Achieved monthly revenues between COP 600,000 and 2,000,000, demonstrating strong skills in sales, customer service, and digital marketing without external support."
          ]
        }
      ],
      degrees: [
        {
          title: "B.Sc. in Computer Science (Systems Engineering)",
          institution: "Universidad del Norte, Barranquilla, Colombia",
          year: "2010"
        },
        {
          title: "Postgraduate Degree, Management Information Systems",
          institution: "Universidad del Norte, Barranquilla, Colombia",
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
                className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
                  language === 'es' 
                    ? 'bg-orange-500 text-white border-orange-500' 
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                Español
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${
                  language === 'en' 
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