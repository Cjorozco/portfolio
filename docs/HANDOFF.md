# Handoff

**Última actualización:** 2026-11-18 · **Versión app:** 0.7.0

## Flujo de trabajo
Ver «Flujo de ramas y despliegue» en `.agents/rules/architecture.md` y `docs/adr/0001-flujo-de-ramas.md`.

## Estado
- `develop` alineada con `master` (fast-forward el 2026-10-30).
- Flujo de ramas y ajuste de CI publicados en `master` (PR #8 a `develop` y PR #9 a `master`).
- `feat/hero-demos` (0.6.0, sin publicar): franja estática «Demos en vivo» en el Hero. Se descartó portar el Hero vivo de Orzix (ADR 0008) porque el Hero del portfolio no tiene fichas. PR #13 abierto hacia `develop`.
- `feat/lab-threejs` (0.7.0, sin publicar, sale de `feat/hero-demos`): ruta `/lab` con escena Three.js y fallback; enlace en el footer. Merge después de #13.

## Host (lo gestiona el responsable)
- Vercel: confirmar *Production Branch* = `master`; `develop` queda como Preview.
- GitHub: **sin protección de rama a propósito (plan de pago)**. El flujo se sostiene por convención (ver enmienda en ADR 0001). Squash y merge commit habilitados según el flujo; las ramas se borran manualmente, con confirmación del responsable.
