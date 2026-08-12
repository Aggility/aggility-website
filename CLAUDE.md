@AGENTS.md

## Claude Code

`AGENTS.md` (importado arriba) es la fuente de verdad del proyecto y el manual de
cómo se trabaja. Lo leen todos los agentes. **Editar ahí, no acá.** Este archivo
existe solo porque Claude Code lee `CLAUDE.md` y no `AGENTS.md`.

Los otros documentos no se importan a propósito — se leen bajo demanda:
`PLAN.md` (qué y cuándo), `BUSINESS.md` (para quién y por cuánto),
`PLAYBOOK.md` (cómo se construye), `docs/` (cómo tocar el código).

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
