# Changelog

Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y [SemVer](https://semver.org/lang/es/).

## [Sin publicar]

### Agregado
- Laboratorio 3D en `/lab`: escena interactiva con Three.js (carro y cajas que se empujan a una meta) con teclado o arrastre. Three.js se carga solo en esa ruta con `next/dynamic` sin SSR (~134 KB gzip). Con movimiento reducido o sin WebGL se muestra una ilustración estática. Enlace discreto en el footer y entrada en el sitemap. Dependencia nueva: `three`. Versión `0.7.0`.
- Hero: franja estática «Demos en vivo» bajo los botones, con enlaces a los proyectos fijados que tienen `demoUrl` en `projects.config.ts` (hoy Project Manager y Budget PWA). Se renderiza en el servidor, sin JavaScript nuevo ni movimiento. Versión `0.6.0`.
- Flujo de ramas `develop` → `master` documentado en `.agents/rules/architecture.md` y registrado en `docs/adr/0001-flujo-de-ramas.md`.
- `docs/HANDOFF.md` con el estado de traspaso.

### Cambiado
- Documentación: el flujo de ramas se sostiene por convención, sin protección de rama en el host (enmienda en ADR 0001).
- CI: corre en push a `master` y `develop`, y en PR hacia ambas.
- `develop` alineada con `master` (fast-forward).

> Cambio solo de documentación, reglas y CI; la versión de la app (`0.5.2`) no cambia.

## [0.5.3] - 2026-11-16

### Corregido
- Modo oscuro: `:root` declara `color-scheme: light dark` y los colores base usan `light-dark()` (con fallback `prefers-color-scheme`); el layout emite `<meta name="color-scheme">` vía `viewport.colorScheme`. Scrollbars y controles nativos siguen el tema del sistema.
