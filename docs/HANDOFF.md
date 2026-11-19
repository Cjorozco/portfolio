# Handoff

**Última actualización:** 2026-11-18 · **Versión app:** 0.7.0

## Flujo de trabajo
Ver «Flujo de ramas y despliegue» en `.agents/rules/architecture.md` y `docs/adr/0001-flujo-de-ramas.md`.

## Estado
- `0.7.0` en `develop`: franja «Demos en vivo» en el Hero (#13) y laboratorio 3D en `/lab` con Three.js y fallback estático (#14). Se descartó portar el Hero vivo de Orzix (ADR 0008 de `orzix-landing`) porque el Hero del portfolio no tiene fichas.
- Publicación de `0.7.0` a `master`: PR `develop` → `master` con merge commit, pendiente de aprobación del responsable.
- Pendiente aparte: actualizar Next.js (`npm audit` marca un aviso moderado en `next` 16.2–16.4.4).

## Host (lo gestiona el responsable)
- Vercel: confirmar *Production Branch* = `master`; `develop` queda como Preview.
- GitHub: **sin protección de rama a propósito (plan de pago)**. El flujo se sostiene por convención (ver enmienda en ADR 0001). Squash y merge commit habilitados según el flujo; las ramas se borran manualmente, con confirmación del responsable.
