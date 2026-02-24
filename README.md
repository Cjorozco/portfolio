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
| Deploy | Vercel |

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
- `hreflang` alternates (`es-CO`, `en-US`) y URL canónica
- Optimización de imágenes con `next/image` (API moderna con `fill`, `sizes`, `priority`)

### Accesibilidad
- HTML semántico (`<main>`, `<section>`, `<nav>`, `<footer>`)
- `aria-label` en enlaces de redes sociales
- Jerarquía correcta de headings (`h1` → `h2` → `h3`)
- `lang="es"` en el `<html>` root

### Estructura del Proyecto

```
src/app/
├── components/
│   ├── HeroSection.tsx      # Sección principal con CTA y redes
│   ├── AboutSection.tsx     # Sobre mí con toggle ES/EN
│   ├── ProjectsSection.tsx  # Repos de GitHub vía ISR
│   ├── SkillsSection.tsx    # Skills agrupadas por categoría
│   └── Footer.tsx           # Navegación, contacto y copyright
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

El servidor se inicia en `http://localhost:3000` con Turbopack.

## Lo que este proyecto NO incluye

- Autenticación o lógica backend (fuera del alcance de un portfolio frontend)
- Animaciones pesadas o efectos visuales excesivos
- Sobre-ingeniería o abstracciones innecesarias
