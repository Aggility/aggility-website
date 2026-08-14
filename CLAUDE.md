@AGENTS.md

## Claude Code

`AGENTS.md` (importado arriba) es la fuente de verdad del proyecto y el manual de
cómo se trabaja. Lo leen todos los agentes. **Editar ahí, no acá.** Este archivo
existe solo porque Claude Code lee `CLAUDE.md` y no `AGENTS.md`.

Los otros documentos no se importan a propósito — se leen bajo demanda:
`PLAN.md` (qué y cuándo), `BUSINESS.md` (para quién y por cuánto),
`PLAYBOOK.md` (cómo se construye), `docs/` (cómo tocar el código).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

> Nota: el bloque de arriba lo espera `next dev` (ver
> `node_modules/next/dist/server/lib/generate-agent-files.js`) para no reescribir este
> archivo o `AGENTS.md`. Se puso acá a propósito — no en `AGENTS.md` — para no ensuciar
> el documento fuente de verdad del método. No editar ni borrar el bloque.

---

## Estado actual

> Acá vive lo efímero: en qué anda el proyecto hoy. Se actualiza seguido. Lo
> permanente (el por qué, los invariantes, los descartes) va en `AGENTS.md`, no acá.

**Fase: Etapa 1 (identidad de marca) cerrada. Próximo: Etapa 2 (secciones de la landing).**

- `DISCOVERY.md` llenado (acta de nacimiento). Clasificación: **núcleo puro**, sin módulos.
- `AGENTS.md` (mitad proyecto), `PLAN.md` volcados desde el DISCOVERY.
- `BUSINESS.md` borrado (módulo `negocio` no activo).
- Copy acordada de la landing en `docs/landing-copy.md` (fuente de verdad del contenido).
- Etapa 0 del `PLAN.md`: Next.js (App Router) + TypeScript + Tailwind v4 + shadcn/ui
  inicializados. `npm run build`, `npm run lint` y `npm run typecheck` pasan en limpio.
  Commit en `develop` (`a79077b`) y pusheado.
- Assets de marca (logo, isotipo, mockups) en `design/`, subidos por el usuario. Paleta
  exacta extraída por pixel: `#2A3546` (texto/marca), `#6283FF` (acento/check),
  `#525F75` (secundario), `#CFD9FF` (tint claro), fondo oscuro `#0D1114`–`#191F26`.
  Tipografía: **Inter** (confirmada por el usuario, no es una suposición).

**Próximo paso:**
- **Etapa 2 del `PLAN.md`: las secciones de la landing**, en el orden de
  `docs/landing-copy.md` (hero → dolor → servicios → por qué → gobtech → prueba social →
  FAQ → cierre + form). Es alcance nuevo — arrancar limpio (hay otra sesión trabajando el
  proyecto en paralelo; coordinar para no pisarse).
- Deploy a Vercel: ✅ **hecho.** El usuario importó y conectó el repo (`Aggility/
  aggility-website`) desde el dashboard — preview automático por push. Etapa 0 cerrada
  del todo. Sin variables de entorno todavía (se agregan en Etapa 3 con la API key de
  Resend, solo en el servidor).

**Revisión / checkpoint (2026-08-13):** estado sano y por el carril del método.
- Gates verificados en verde con el código actual: `npm run typecheck`, `npm run lint` y
  `npm run build` (build estático, prerender OK).
- Identidad de marca verificada renderizada (pantalla de prueba Etapa 1): logo, tema
  oscuro, paleta en tokens, Inter, botones shadcn. Coherente. **Etapa 1 committeada.**
- Nota menor (no bloquea): en la pantalla de prueba, los swatches sacan color del CSS var
  (valores dark) pero el hex impreso es el de light mode → no matchean. Es descartable: la
  pantalla se reemplaza en la Etapa 2. No es un problema de la marca.
- Decisión a confirmar: el sitio es **dark-only** (`class="dark"` fija en `<html>`); los
  tokens de light mode quedan definidos sin usar. Coherente con la marca, pero confirmar
  que es intencional.

**Pendientes / gotchas:**
- `next dev` (detecta agentes de IA vía `CLAUDECODE`/`CLAUDE_CODE` env var) intenta
  escribir un bloque de aviso en `AGENTS.md` o `CLAUDE.md` si no lo encuentra. Ya se
  insertó ese bloque a mano en este archivo (ver arriba) para que Next.js no toque
  `AGENTS.md`. No borrar ese bloque.
- Testimonios/cartera son un borrador sin depurar — no publicar sin confirmar datos y
  consentimiento.
