# Portfolio – Senior Frontend Engineer

Portafolio profesional construido con **Next.js 16 (App Router)** para demostrar decisiones de arquitectura frontend, estrategias de data fetching, SEO técnico y buenas prácticas de rendimiento.

🔗 **Demo en vivo:** [portfolio-jcom.vercel.app](https://portfolio-jcom.vercel.app/)

---

## Tech Stack

| Categoría | Tecnología |
|-----------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Lenguaje | TypeScript |
| UI | React 19, Tailwind CSS |
| Tipografía | Geist & Geist Mono (via `next/font`) |
| 3D (solo `/lab`) | Three.js, cargado con `next/dynamic` sin SSR |
| Deploy | Vercel |

## Flujo de trabajo y despliegue

`master` es producción y `develop` es integración (preview en Vercel); los cambios llegan por PR a `develop` y se publican con PR `develop` → `master`. Detalle en [`.agents/rules/architecture.md`](.agents/rules/architecture.md) y [ADR 0001](docs/adr/0001-flujo-de-ramas.md).

## Características Técnicas

### Server Components & ISR
- Server Components por defecto para reducir JavaScript en el cliente
- Los proyectos se obtienen de la API pública de GitHub con **ISR** (`revalidate: 3600`)

### SEO Técnico
- Metadatos globales en layout con `metadataBase`, template de títulos y `keywords`
- Open Graph (`og:title`, `og:description`, `og:locale`) y **Twitter Cards**
- `robots.ts` dinámico con directivas para crawlers
- `sitemap.ts` dinámico con las rutas del sitio
- **JSON-LD** (Schema.org `Person`) para datos estructurados
- URL canónica por página (`alternates.canonical: './'`) e imagen Open Graph generada (`opengraph-image.tsx`)
- Optimización de imágenes con `next/image` (API moderna con `fill`, `sizes`, `priority`)

### Seguridad
- Cabeceras en `next.config.ts`: CSP, `nosniff`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`; `X-Powered-By` desactivado
- CI (`.github/workflows/ci.yml`): typecheck, lint, build y `npm audit --omit=dev`

### Proyectos
- `src/app/projects.config.ts` controla orden, títulos, stack y demos de cada repo de GitHub

### Laboratorio 3D (`/lab`)
- Escena interactiva en Three.js puro (sin React Three Fiber ni modelos externos): conducir un carro y empujar cajas a una meta, con teclado o arrastre.
- El chunk de Three.js (~134 KB gzip) solo se descarga en `/lab`; el resto de rutas no cambia.
- Renderiza solo si la escena está en pantalla y la pestaña visible; libera la GPU al desmontar.
- Con `prefers-reduced-motion: reduce` o sin WebGL muestra una ilustración SVG estática y no descarga Three.js.

### Accesibilidad
- HTML semántico (`<main>`, `<section>`, `<nav>`, `<footer>`)
- `aria-label` en enlaces de redes sociales
- Jerarquía correcta de headings (`h1` → `h2` → `h3`)
- `lang="es"` en el `<html>` root

### Estructura del Proyecto

```
src/app/
├── components/
│   ├── HeroSection.tsx      # Sección principal con CTA, demos en vivo y redes
│   ├── AboutSection.tsx     # Sobre mí con toggle ES/EN
│   ├── ProjectsSection.tsx  # Repos de GitHub vía ISR
│   ├── SkillsSection.tsx    # Skills agrupadas por categoría
│   └── Footer.tsx           # Navegación, contacto y copyright
├── lab/
│   ├── page.tsx             # Laboratorio 3D (server)
│   ├── LabStage.tsx         # Elige escena o fallback (movimiento reducido / WebGL)
│   ├── LabScene.tsx         # Escena Three.js, carga diferida
│   └── LabFallback.tsx      # Ilustración estática equivalente
├── projects/
│   └── page.tsx             # Página de proyectos con generateMetadata
├── layout.tsx               # Layout root con metadatos y JSON-LD
├── page.tsx                 # Página principal
├── globals.css              # Variables CSS y utilidades Tailwind
├── robots.ts                # Reglas para crawlers
└── sitemap.ts               # Sitemap dinámico
```

## Ejecutar Localmente

```bash
npm install
npm run dev
```

Verificación: `npm run typecheck && npm run lint && npm run build`.

El servidor se inicia en `http://localhost:3000` con Turbopack.

## Lo que este proyecto NO incluye

- Autenticación o lógica backend (fuera del alcance de un portfolio frontend)
- Animaciones pesadas o efectos visuales excesivos
- Sobre-ingeniería o abstracciones innecesarias
