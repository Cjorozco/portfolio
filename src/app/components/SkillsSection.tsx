import React from "react";

interface Skill {
  name: string;
  level: number; // 1-5, donde 5 es el nivel más alto
  icon?: string; // Opcional: path al ícono de la habilidad
  category:
  | "frontend"
  | "backend"
  | "build"
  | "cloud"
  | "data"
  | "database"
  | "devops"
  | "forms"
  | "testing"
  | "tools"
  | "nocode"
  | "soft"
  | "state"
  | "validation"
  | "mobile"
  | "other";
}

// Core skills – Frontend Senior React (Enterprise & Practical)
const skills: Skill[] = [
  // Frontend core
  { name: "React 18", level: 5, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 5, category: "frontend" },
  { name: "HTML5 / CSS3", level: 5, category: "frontend" },
  { name: "TypeScript", level: 5, category: "frontend" }, // Senior use in Banking
  { name: "Next.js 15", level: 4, category: "frontend" },

  // Mobile Development
  { name: "React Native", level: 3, category: "mobile" },
  { name: "Expo", level: 3, category: "mobile" },

  // State & Architecture
  { name: "Redux Toolkit", level: 4, category: "state" },
  { name: "TanStack Query v5", level: 4, category: "data" },
  { name: "Zustand", level: 4, category: "state" },
  { name: "Axios (Interceptors)", level: 5, category: "data" },
  { name: "React Hook Form", level: 4, category: "forms" },
  { name: "Zod", level: 4, category: "validation" },
  { name: "Dexie.js (IndexedDB)", level: 3, category: "data" }, // Local-first (Budget PWA)

  // Backend & Databases
  { name: "Node.js / Express", level: 3, category: "backend" },
  { name: "FastAPI / Python", level: 3, category: "backend" },
  { name: "Supabase / PostgreSQL", level: 3, category: "database" },
  { name: "JWT Auth", level: 4, category: "backend" },

  // Tooling & Infra
  { name: "Vite", level: 4, category: "build" },
  { name: "Git / GitHub", level: 4, category: "devops" },
  { name: "AWS (S3/CloudFront)", level: 2, category: "cloud" },

  // Testing
  { name: "Cypress (E2E)", level: 4, category: "testing" },
  { name: "Jest / RNTL", level: 3, category: "testing" }, // Mobile testing
  { name: "Vitest", level: 4, category: "testing" },

  // Productivity & Soft
  { name: "AI Assisted Coding", level: 5, category: "tools" }, // Copilot / Claude / Heavy use
  { name: "Scrum / Agile", level: 5, category: "soft" },
  { name: "Liderazgo Técnico", level: 3, category: "soft" },

  // NoCode
  { name: "Webflow", level: 4, category: "nocode" }
];

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
          {skill.name}
        </span>
        <span className="text-xs text-gray-600 dark:text-gray-400">
          {skill.level === 1 && "Básico"}
          {skill.level === 2 && "Elemental"}
          {skill.level === 3 && "Intermedio"}
          {skill.level === 4 && "Avanzado"}
          {skill.level === 5 && "Experto"}
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-orange-500 h-2 rounded-full"
          style={{ width: `${skill.level * 20}%` }}
        ></div>
      </div>
    </div>
  );
};

interface CategoryProps {
  title: string;
  skills: Skill[];
}

const SkillCategory: React.FC<CategoryProps> = ({ title, skills }) => {
  if (skills.length === 0) return null;

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  // Agrupar habilidades por categoría
  const frontendSkills = skills.filter((skill) => skill.category === "frontend");

  // Agrupamos State, Forms, Validation y Data (libraries) en "Architecture & Ecosystem"
  const architectureSkills = skills.filter((skill) =>
    ["state", "forms", "validation", "data"].includes(skill.category)
  );

  const testingSkills = skills.filter((skill) => skill.category === "testing");
  const mobileSkills = skills.filter((skill) => skill.category === "mobile");

  const backendSkills = skills.filter((skill) =>
    ["backend", "database"].includes(skill.category)
  );

  // Agrupamos Build, DevOps y Cloud
  const devopsSkills = skills.filter((skill) =>
    ["build", "devops", "cloud"].includes(skill.category)
  );

  const toolsSkills = skills.filter((skill) => skill.category === "tools");
  const nocodeSkills = skills.filter((skill) => skill.category === "nocode");
  const softSkills = skills.filter((skill) => skill.category === "soft");
  const otherSkills = skills.filter((skill) => skill.category === "other");

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Habilidades y Competencias
          </h2>
          <div className="w-16 h-1 mx-auto bg-orange-500 rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stack tecnológico y herramientas que utilizo para construir productos digitales de alto impacto.
          </p>
        </div>

        <div className="mb-12 max-w-5xl mx-auto">
          <SkillCategory title="Frontend Core & UI" skills={frontendSkills} />
          <SkillCategory title="Mobile Development" skills={mobileSkills} />
          <SkillCategory title="Backend & Base de Datos" skills={backendSkills} />
          <SkillCategory title="Ecosistema React & Arquitectura" skills={architectureSkills} />
          <SkillCategory title="Testing & Calidad" skills={testingSkills} />
          <SkillCategory title="Build, Deploy & Cloud" skills={devopsSkills} />
          <SkillCategory title="Productividad & IA" skills={toolsSkills} />
          <SkillCategory title="Metodologías & Soft Skills" skills={softSkills} />
          <SkillCategory title="No-Code & Prototipado" skills={nocodeSkills} />
          {otherSkills.length > 0 && (
            <SkillCategory title="Otras" skills={otherSkills} />
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
