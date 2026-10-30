# Changelog

Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y [SemVer](https://semver.org/lang/es/).

## [Sin publicar]

### Agregado
- Flujo de ramas `develop` → `master` documentado en `.agents/rules/architecture.md` y registrado en `docs/adr/0001-flujo-de-ramas.md`.
- `docs/HANDOFF.md` con el estado de traspaso.

### Cambiado
- CI: corre en push a `master` y `develop`, y en PR hacia ambas.
- `develop` alineada con `master` (fast-forward).

> Cambio solo de documentación, reglas y CI; la versión de la app (`0.5.2`) no cambia.
