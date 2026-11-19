# Handoff

**Última actualización:** 2026-11-18 · **Versión app:** 0.7.2

## Flujo de trabajo
Ver «Flujo de ramas y despliegue» en `.agents/rules/architecture.md` y `docs/adr/0001-flujo-de-ramas.md`.

## Estado
- `0.7.0` en `develop`: franja «Demos en vivo» en el Hero (#13) y laboratorio 3D en `/lab` con Three.js y fallback estático (#14). Se descartó portar el Hero vivo de Orzix (ADR 0008 de `orzix-landing`) porque el Hero del portfolio no tiene fichas.
- `0.7.0` publicada en `master` (PR #16, 2026-11-18).
- `0.7.1` (sin publicar): Next.js 16.4.6, cierra el aviso de `npm audit` en producción. Quedan 7 avisos moderados solo en dependencias de desarrollo (`minimatch`), sin impacto en el sitio.
- `0.7.2` (sin publicar, sale de `fix/next-16-4-6`): corrige el solapamiento de las tarjetas de Educación, Certificaciones e Idiomas en móvil. Merge después de #17.

## Host (lo gestiona el responsable)
- Vercel: confirmar *Production Branch* = `master`; `develop` queda como Preview.
- GitHub: **sin protección de rama a propósito (plan de pago)**. El flujo se sostiene por convención (ver enmienda en ADR 0001). Squash y merge commit habilitados según el flujo; las ramas se borran manualmente, con confirmación del responsable.
