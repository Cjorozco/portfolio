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
   - Todo rol, métrica, proyecto o habilidad listada en el sitio debe reflejar fidedignamente la trayectoria profesional (Banca, FinTech, plataformas operativas, arquitecturas de alto tráfico).
   - Proyectos de empresa privada con repositorios cerrados deben destacarse con su contexto arquitectónico y etiqueta explícita de repositorio empresarial privado. El nombre de Ecosistemas puede mostrarse (autorización del cliente); no mostrar otros nombres de clientes, repositorios privados, cifras del negocio, direcciones ni nombres de personas.

2. **Separación Empleo / Orzix**:
   - El portafolio es para reclutadores. Orzix (marca independiente para PYMEs, `https://orzixtech.com`) vive solo en `OrzixSection.tsx`, antes del footer, junto con sus redes (@orzix.tech). Sin teléfono y fuera del hero, del footer y del JSON-LD.

3. **Calidad de Código y Estructura Limpia**:
   - Componentes modulares y desacoplados bajo `src/app/components/`.
   - Soporte multilingüe (ES / EN) en componentes de contenido biográfico (`AboutSection.tsx`).
   - Sin dependencias innecesarias ni sobre-ingeniería: código copy-paste ready y mantenible.

4. **Performance y Core Web Vitals**:
   - Optimización de imágenes con `next/image` (`sizes`, `priority` en above-the-fold).
   - Tipografía optimizada con `next/font/google` (Geist & Geist Mono con subsets latinos y variables CSS).

---

## Flujo de ramas y despliegue (fuente única de verdad)

> Otros archivos (`AGENTS.md`, `README.md`, ADR 0001) solo referencian esta sección. Si algo cambia, se cambia aquí.

- `master` es **producción**; `develop` es **integración** (preview). Ningún cambio llega a `master` sin pasar antes por `develop`.
- Cada cambio sale en una **rama nueva desde `develop`** y vuelve a `develop` con **PR y squash merge**.
- Antes de ramificar: `git fetch origin develop` (otras sesiones también publican).
- **Publicar:** PR `develop` → `master` con **merge commit** (no squash, para que `develop` no diverja de `master`). Que `master` tenga de más el commit de merge de cada publicación es normal y no se sincroniza de vuelta.
- **Hotfix urgente:** rama desde `master`, PR a `master`, y se devuelve a `develop` el mismo día (PR `master` → `develop`). Es el único caso en que `master` vuelve a `develop`.
- Nada de push forzado. Push o merge solo cuando el responsable lo pida.
- **Conventional Commits:** tipo en inglés y descripción en español (ej. `feat: agrega sección de precios`).
- **CI** (`.github/workflows/ci.yml`): corre en PR hacia `develop` y `master`, y en push a ambas.
- **Despliegue (Vercel):** `master` = Production; `develop` y ramas de feature = Preview.
- Versión SemVer en `package.json` y entrada en `CHANGELOG.md` al publicar cambios significativos (ver `AGENTS.md`).
