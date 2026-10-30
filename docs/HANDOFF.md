# Handoff

**Última actualización:** 2026-10-30 · **Versión app:** 0.5.2

## Flujo de trabajo
Ver «Flujo de ramas y despliegue» en `.agents/rules/architecture.md` y `docs/adr/0001-flujo-de-ramas.md`.

## Estado
- `develop` alineada con `master` (fast-forward el 2026-10-30).
- Flujo de ramas y ajuste de CI publicados en `master` (PR #8 a `develop` y PR #9 a `master`).

## Host (lo gestiona el responsable)
- Vercel: confirmar *Production Branch* = `master`; `develop` queda como Preview.
- GitHub: **sin protección de rama a propósito (plan de pago)**. El flujo se sostiene por convención (ver enmienda en ADR 0001). Squash y merge commit habilitados según el flujo; las ramas se borran manualmente, con confirmación del responsable.
