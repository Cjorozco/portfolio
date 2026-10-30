# ADR 0001 — Flujo de ramas `develop` → `master`

- **Estado:** Aceptado
- **Fecha:** 2026-10-30

## Contexto
El repo trabajaba directamente sobre `master` con despliegue directo a producción (Vercel). Existía una rama `develop` remota abandonada (febrero de 2026), 28 commits detrás de `master`. No había documentado ningún flujo de ramas, y el CI solo corría en push a `master`.

## Decisión
Adoptar el flujo descrito en `.agents/rules/architecture.md` (sección «Flujo de ramas y despliegue», fuente única de verdad):
`master` = producción, `develop` = integración/preview; ramas de cambio desde `develop` con PR y squash; publicación con PR `develop` → `master` y merge commit; hotfix desde `master` devuelto a `develop` el mismo día; sin push forzado; Conventional Commits (tipo en inglés, descripción en español).
`develop` se alineó con `master` mediante fast-forward (sin push forzado) como punto de partida.

## Consecuencias
- Todo cambio pasa por `develop` y por CI antes de llegar a producción.
- `master` acumula un commit de merge por publicación; es esperado.
- El CI corre en PR y push para ambas ramas.
- Requiere ajustes en el host (protección de ramas en GitHub, rama de producción en Vercel), aplicados por el responsable.
- No hay ADR previos que enmendar.
