import React from "react";

interface Skill {
  name: string;
  level: number; // 1-5, donde 5 es el nivel más alto
  icon?: string; // Opcional: path al ícono de la habilidad
  category:
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "testing"
  | "tools"
  | "nocode"
  | "soft"
  | "other";
}

// Core skills – Frontend Senior React (Enterprise)
const skills: Skill[] = [
  // Frontend core
  { name: "React 18", level: 5, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 5, category: "frontend" },
  { name: "TypeScript", level: 3, category: "frontend" },
  { name: "HTML5 / CSS3", level: 5, category: "frontend" },
  { name: "Next.js", level: 3, category: "frontend" },

  // State & Data
  { name: "Redux Toolkit", level: 4, category: "other" },
  { name: "React Hook Form", level: 4, category: "other" },
  { name: "Axios", level: 4, category: "other" },
  { name: "TanStack Table", level: 4, category: "other" },

  // Testing (enterprise signal fuerte)
  { name: "Cypress (E2E)", level: 4, category: "testing" },
  { name: "React Testing Library", level: 4, category: "testing" },

  // Tooling & Workflow
  { name: "Git / GitHub", level: 4, category: "devops" },

  // AI as productivity (sin postureo)
  { name: "GitHub Copilot", level: 3, category: "tools" },
  { name: "Claude / ChatGPT", level: 3, category: "tools" }
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
  const frontendSkills = skills.filter(
    (skill) => skill.category === "frontend"
  );
  const backendSkills = skills.filter((skill) => skill.category === "backend");
  const databaseSkills = skills.filter(
    (skill) => skill.category === "database"
  );
  const testingSkills = skills.filter((skill) => skill.category === "testing");
  const devopsSkills = skills.filter((skill) => skill.category === "devops");
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
            Tecnologías, herramientas y competencias que he desarrollado a lo
            largo de mi carrera profesional.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            Habilidades Técnicas
          </h2>
          <SkillCategory title="Frontend" skills={frontendSkills} />
          <SkillCategory title="Backend" skills={backendSkills} />
          <SkillCategory title="Bases de Datos" skills={databaseSkills} />
          <SkillCategory title="Testing" skills={testingSkills} />
          <SkillCategory title="DevOps" skills={devopsSkills} />
          <SkillCategory
            title="Herramientas de Colaboración"
            skills={toolsSkills}
          />
          <SkillCategory title="Herramientas No-Code" skills={nocodeSkills} />
          {otherSkills.length > 0 && (
            <SkillCategory title="Otras" skills={otherSkills} />
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
