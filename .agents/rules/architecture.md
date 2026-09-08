# Reglas de Arquitectura, Diseño y Calidad — Portfolio

## Stack y Convenciones del Proyecto

- **Next.js 16 (App Router, Turbopack)**
- **React 19 + TypeScript** (con foco estricto en type-safety y Server Components por defecto)
- **Tailwind CSS** para maquetación responsive, mobile-first y soporte de dark mode
- **Estrategia de Data Fetching**:
  - Server Components para minimizar JavaScript enviado al cliente.
  - **ISR (Incremental Static Regeneration)** (`next: { revalidate: 3600 }`) para consumo de la API pública de GitHub.
- **SEO Técnico & Metadatos**:
  - `layout.tsx` como orquestador de metadatos (`metadataBase`, `title.template`, `keywords`, OpenGraph, Twitter Cards).
  - Schema estructurado con **JSON-LD** (`@type: Person`) sincronizado con el perfil profesional.
  - Rutas dinámicas de infraestructura: `robots.ts` y `sitemap.ts`.
- **Accesibilidad (a11y)**:
  - HTML semántico estricto (`<main>`, `<section>`, `<nav>`, `<footer>`).
  - `aria-label` descriptivos en elementos interactivos y redes sociales.
  - Jerarquía coherente de encabezados (`h1` -> `h2` -> `h3`).

---

## Principios de Marca Personal y Vitrina Técnica

Este portafolio es la **vitrina pública principal** del perfil como **Ingeniero Frontend Senior**:

1. **Alineación con Hoja de Vida y Logros Reales**:
   - Todo rol, métrica, proyecto o habilidad listada en el sitio debe reflejar fidedignamente la trayectoria profesional (Banca, FinTech, Ecosistemas y Medio Ambiente, arquitecturas de alto tráfico).
   - Proyectos de empresa privada con repositorios cerrados (como `ecosistemas-platform`) deben destacarse con su contexto arquitectónico y etiqueta explícita de repositorio empresarial privado.

2. **Calidad de Código y Estructura Limpia**:
   - Componentes modulares y desacoplados bajo `src/app/components/`.
   - Soporte multilingüe (ES / EN) en componentes de contenido biográfico (`AboutSection.tsx`).
   - Sin dependencias innecesarias ni sobre-ingeniería: código copy-paste ready y mantenible.

3. **Performance y Core Web Vitals**:
   - Optimización de imágenes con `next/image` (`sizes`, `priority` en above-the-fold).
   - Tipografía optimizada con `next/font/google` (Geist & Geist Mono con subsets latinos y variables CSS).
