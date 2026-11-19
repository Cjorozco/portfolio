# Handoff

**Última actualización:** 2026-11-18 · **Versión app:** 0.7.2

## Flujo de trabajo
Ver «Flujo de ramas y despliegue» en `.agents/rules/architecture.md` y `docs/adr/0001-flujo-de-ramas.md`.

## Estado
- `0.7.0` publicada en `master` (PR #16): franja «Demos en vivo» en el Hero (#13) y laboratorio 3D en `/lab` (#14).
- `0.7.2` en `develop`: Next.js 16.4.6 (#17) y arreglo del solapamiento de las tarjetas de «Sobre mí» en móvil (#18). Publicación con PR `develop` → `master`.
- Quedan 7 avisos moderados de `npm audit` solo en dependencias de desarrollo (`minimatch`), sin impacto en el sitio.

## Host (lo gestiona el responsable)
- Vercel: confirmar *Production Branch* = `master`; `develop` queda como Preview.
- GitHub: **sin protección de rama a propósito (plan de pago)**. El flujo se sostiene por convención (ver enmienda en ADR 0001). Squash y merge commit habilitados según el flujo; las ramas se borran manualmente, con confirmación del responsable.
