export interface Localized {
  es: string;
  en: string;
}

export interface ProjectConfig {
  /** Exclude the repo from every projects listing. */
  hidden?: boolean;
  /** Pinned position (lower first). Pinned repos with a description still render if GitHub fails. */
  order?: number;
  featured?: boolean;
  /** Display title; defaults to the repo name with dashes replaced by spaces. */
  title?: string;
  description?: Localized;
  /** Real technologies used, instead of only GitHub's main language. */
  stack?: string[];
  demoUrl?: string;
  note?: Localized;
}

export const GITHUB_USER = 'Cjorozco';

// Keys are GitHub repo names.
export const PROJECTS_CONFIG: Record<string, ProjectConfig> = {
  // Real repo name is legacy (pre-Convex FastAPI template); the app is Next.js 16 + Convex + Supabase Auth.
  // Its GitHub homepage is the live demo.
  'next15-fastapi-supabase-template': {
    order: 1,
    featured: true,
    title: 'Project Manager',
    description: {
      es: 'Aplicación SaaS full-stack de gestión de proyectos con Next.js 16, Convex y Supabase Auth. CRUD de proyectos, tareas con reordenamiento drag-and-drop, progreso en tiempo real y pruebas con Vitest y Cypress. Demo disponible sin registro.',
      en: 'Full-stack project management SaaS built with Next.js 16, Convex and Supabase Auth. Project CRUD, tasks with drag-and-drop reordering, real-time progress tracking and Vitest/Cypress tests. Demo available without signing up.',
    },
    stack: ['Next.js 16', 'TypeScript', 'Convex', 'Supabase Auth', 'Tailwind CSS', 'shadcn/ui', 'dnd-kit', 'Vitest', 'Cypress'],
    demoUrl: 'https://project-manager-web-five.vercel.app/',
    note: { es: 'Interfaz en español', en: 'UI in Spanish' },
  },
  'budget-pwa': {
    order: 2,
    title: 'Budget PWA',
    description: {
      es: 'PWA de finanzas personales offline-first con React 19 y TypeScript. Categorización de gastos con reglas locales + LLM opcional, presupuestos, reconciliación bancaria y 289 tests automatizados.',
      en: 'Offline-first personal finance PWA built with React 19 and TypeScript. Expense categorization with local rules plus an optional LLM, budgets, bank reconciliation and 289 automated tests.',
    },
    stack: ['React 19', 'TypeScript', 'Vite', 'Dexie (IndexedDB)', 'Zustand', 'Zod', 'Tailwind CSS', 'Vitest'],
    demoUrl: 'https://www.myrealbalance.app/',
    note: { es: 'Interfaz en español', en: 'UI in Spanish' },
  },
  portfolio: {
    order: 3,
    stack: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'ISR'],
  },
  'basic-html-website': { hidden: true },
  'aws-s3-cloudfront-static-site': { hidden: true },
  'skills-hello-github-actions': { hidden: true },
  'Single-Page-CV': { hidden: true },
};
