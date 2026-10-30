# Handoff

**Última actualización:** 2026-10-30 · **Versión app:** 0.5.2

## Flujo de trabajo
Ver «Flujo de ramas y despliegue» en `.agents/rules/architecture.md` y `docs/adr/0001-flujo-de-ramas.md`.

## Estado
- `develop` alineada con `master` (fast-forward el 2026-10-30).
- Rama `docs/flujo-de-ramas` con la documentación del flujo y el ajuste de CI; pendiente de PR a `develop`.

## Pendiente en el host (lo aplica el responsable)
- Vercel: confirmar *Production Branch* = `master`; `develop` queda como Preview.
- GitHub: proteger `master` y `develop` (PR obligatorio, check `verify`, sin push forzado); habilitar squash y merge commit; borrar ramas al hacer merge.
