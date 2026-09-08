import React from "react";

interface Skill {
  name: string;
  level: number; // 1-5
  category:
    | "frontend"
    | "ui"
    | "state"
    | "testing"
    | "api"
    | "backend"
    | "tools";
}

// Habilidades Técnicas alineadas con el perfil Senior Frontend
const skills: Skill[] = [
  // Frontend Core
  { name: "React 18 / 19", level: 5, category: "frontend" },
  { name: "Next.js 15 / 16 (App Router)", level: 4, category: "frontend" },
  { name: "TypeScript", level: 4, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 5, category: "frontend" },
  { name: "Vite", level: 4, category: "frontend" },
  { name: "HTML5 / CSS3 Semántico", level: 5, category: "frontend" },

  // UI & Estilos
  { name: "Tailwind CSS", level: 5, category: "ui" },
  { name: "Material UI (MUI)", level: 4, category: "ui" },
  { name: "Styled Components", level: 4, category: "ui" },
  { name: "Design Systems & Tokens", level: 4, category: "ui" },

  // Estado y Formularios
  { name: "Redux Toolkit", level: 4, category: "state" },
  { name: "Context API", level: 4, category: "state" },
  { name: "React Hook Form", level: 4, category: "state" },
  { name: "Zod (Validación de Esquemas)", level: 4, category: "state" },
  { name: "TanStack Query", level: 3, category: "state" },

  // Testing & Calidad
  { name: "Cypress (E2E Testing)", level: 4, category: "testing" },
  { name: "Jest", level: 3, category: "testing" },
  { name: "React Testing Library", level: 3, category: "testing" },

  // Integración & APIs
  { name: "REST APIs (Consumo & Manejo de Errores)", level: 5, category: "api" },
  { name: "Autenticación (JWT / OAuth)", level: 4, category: "api" },
  { name: "Manejo de Datos Transaccionales", level: 4, category: "api" },

  // Herramientas & IA
  { name: "Cursor (AI-assisted Workflow)", level: 4, category: "tools" },
  { name: "Claude Code / LLMs", level: 4, category: "tools" },
  { name: "Git / GitHub", level: 4, category: "tools" },
  { name: "Make.com (Automatización)", level: 3, category: "tools" },

  // Backend & Cloud (Nociones)
  { name: "Node.js", level: 2, category: "backend" },
  { name: "Python (FastAPI)", level: 2, category: "backend" },
  { name: "Supabase", level: 2, category: "backend" },
  { name: "AWS (S3 / CloudFront)", level: 2, category: "backend" }
];

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
          {skill.name}
        </span>
        <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
          {skill.level === 1 && "Básico"}
          {skill.level === 2 && "Nociones / Foundational"}
          {skill.level === 3 && "Intermedio"}
          {skill.level === 4 && "Avanzado"}
          {skill.level === 5 && "Experto"}
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-orange-500 h-2 rounded-full transition-all duration-500"
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
      <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white border-l-4 border-orange-500 pl-3">
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
  const frontendSkills = skills.filter((s) => s.category === "frontend");
  const uiSkills = skills.filter((s) => s.category === "ui");
  const stateSkills = skills.filter((s) => s.category === "state");
  const testingSkills = skills.filter((s) => s.category === "testing");
  const apiSkills = skills.filter((s) => s.category === "api");
  const toolsSkills = skills.filter((s) => s.category === "tools");
  const backendSkills = skills.filter((s) => s.category === "backend");

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Habilidades Técnicas
          </h2>
          <div className="w-16 h-1 mx-auto bg-orange-500 rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Competencias de ingeniería frontend, herramientas de aceleración con IA y tecnologías complementarias para desarrollo web de alto rendimiento.
          </p>
        </div>

        <div className="mb-12 max-w-5xl mx-auto space-y-2">
          <SkillCategory title="Frontend Core" skills={frontendSkills} />
          <SkillCategory title="UI & Estilos" skills={uiSkills} />
          <SkillCategory title="Estado & Formularios" skills={stateSkills} />
          <SkillCategory title="Testing & Calidad" skills={testingSkills} />
          <SkillCategory title="Integración & APIs" skills={apiSkills} />
          <SkillCategory title="Herramientas & Asistencia con IA" skills={toolsSkills} />
          <SkillCategory title="Backend & Cloud (Nociones)" skills={backendSkills} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
