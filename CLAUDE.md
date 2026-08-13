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

**Fase: arranque completado, pre-código.**

- `DISCOVERY.md` llenado (acta de nacimiento). Clasificación: **núcleo puro**, sin módulos.
- `AGENTS.md` (mitad proyecto), `PLAN.md` volcados desde el DISCOVERY.
- `BUSINESS.md` borrado (módulo `negocio` no activo).
- Copy acordada de la landing en `docs/landing-copy.md` (fuente de verdad del contenido).

**Próximo paso:** Etapa 0 del `PLAN.md` — inicializar Next.js + Tailwind + shadcn/ui,
lint/typecheck, deploy a Vercel. Antes de la UI (Etapa 1), extraer identidad de marca de
Drive `05. Brand`.

**Pendientes / gotchas:**
- El `git remote origin` apunta a `germansayago/harness.git` (quedó del template).
  Cambiarlo a un repo propio de la web antes de commitear/pushear.
- Testimonios/cartera son un borrador sin depurar — no publicar sin confirmar datos y
  consentimiento.
