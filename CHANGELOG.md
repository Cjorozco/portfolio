# Changelog

Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y [SemVer](https://semver.org/lang/es/).

## [Sin publicar]

## [0.7.2] - 2026-11-18

### Corregido
- Sobre mí, en móvil: las tarjetas de Educación, Certificaciones e Idiomas se montaban sobre el título del bloque siguiente. Usaban `h-full` dentro de una columna que también contiene el título, así que se salían 44 px. Ahora la columna es flex vertical y la tarjeta usa `flex-1`; en escritorio siguen con la misma altura. La flecha de «Verificado» ya no se muestra como emoji (#18).

### Seguridad
- Next.js `16.4.3` → `16.4.6` (y `eslint-config-next`). Cierra el aviso moderado de `npm audit` sobre fugas de caché en funciones `'use cache'` (el sitio no las usa). `npm audit --omit=dev` queda en 0. Incluye la `0.7.1`, que no se publicó por separado (#17).

## [0.7.0] - 2026-11-18

### Agregado
- Laboratorio 3D en `/lab`: escena interactiva con Three.js (carro y cajas que se empujan a una meta) con teclado o arrastre. Three.js se carga solo en esa ruta con `next/dynamic` sin SSR (~134 KB gzip). Con movimiento reducido o sin WebGL se muestra una ilustración estática. Enlace discreto en el footer y entrada en el sitemap. Dependencia nueva: `three` (#14).
- Hero: franja estática «Demos en vivo» bajo los botones, con enlaces a los proyectos fijados que tienen `demoUrl` en `projects.config.ts` (hoy Project Manager y Budget PWA). Se renderiza en el servidor, sin JavaScript nuevo ni movimiento (#13).

## [0.5.3] - 2026-11-16

### Corregido
- Modo oscuro: `:root` declara `color-scheme: light dark` y los colores base usan `light-dark()` (con fallback `prefers-color-scheme`); el layout emite `<meta name="color-scheme">` vía `viewport.colorScheme`. Scrollbars y controles nativos siguen el tema del sistema.

### Documentación y CI
Publicado junto con las versiones 0.5.2 y 0.5.3 (#8 a #12), sin cambio de versión propio:
- Flujo de ramas `develop` → `master` documentado en `.agents/rules/architecture.md` y registrado en `docs/adr/0001-flujo-de-ramas.md`; el flujo se sostiene por convención, sin protección de rama en el host (enmienda en ADR 0001).
- `docs/HANDOFF.md` con el estado de traspaso.
- CI: corre en push a `master` y `develop`, y en PR hacia ambas.
