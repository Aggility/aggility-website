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

**Fase: rediseño premium en branch `redesign/premium` (pendiente de review/merge). Después: Etapa 3 (formulario con Resend).**

**Rediseño premium (2026-08-15) — branch `redesign/premium`:**
- Dirección de arte aprobada por dirección (combinación de cierre) y documentada en
  `docs/design-direction.md`. Motivo: la v1 se veía genérica (todo centrado, cards, negro
  plano) por falta de brief de diseño.
- Reescritas las 8 secciones + header/footer al nuevo lenguaje: asimétrico, escala
  tipográfica, atmósfera (grilla + glow), acento con disciplina, menos cards. Piezas
  compartidas nuevas: `eyebrow`, `section-heading`, `atmosphere`; utilidades en globals
  (`.text-gradient`, `.grid-bg`, `.glow`, `.lift`).
- **v1 sin números ni casos** (decisión: hoy solo logo + copy + look). Testimonios
  placeholder reemplazados por las 5 verticales reales (sin nombres de cliente).
- Copy del hero ajustada a "Resolvemos los problemas que te quitan el sueño" (aprobado).
- Gates verdes (typecheck/lint/build); sin overflow horizontal en desktop ni mobile.
- Baseline genérico preservado en `develop` (commit "Etapa 2 (baseline)").

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

**Etapa 2 — hecho (2026-08-14):**
- Las 8 secciones de `docs/landing-copy.md` montadas en orden: hero → espejo del
  problema → servicios → por qué Aggility → gobtech → prueba social → FAQ → cierre +
  form. Componentes en `components/sections/` (uno por sección) y `components/layout/`
  (`SiteHeader` sticky con CTA, `SiteFooter` minimal con mailto).
  - shadcn/ui sumado: `input`, `textarea`, `label`, `accordion`, `card`, `badge`.
  - CTA primario centralizado en `lib/constants.ts` (`CTA_PRIMARY`) para no divergir
    entre secciones — se repite idéntico como pide la copy.
  - Micro-credibilidad opcional del hero (`[N] empresas...`) **omitida a propósito**: el
    número es un dato real sin confirmar, no se inventa (comentado en el código).
  - Prueba social con **testimonios placeholder marcados** ("A confirmar" + nota
    explícita) — decisión tomada con el usuario, no se usan los nombres reales de la
    cartera borrador para no atribuirles citas inventadas.
  - Form de cierre (`ContactForm`, client component) ya intenta `POST /api/contact` y
    maneja el error visiblemente (no hay éxito falso) — el route handler + Resend es
    Etapa 3, todavía no existe, así que hoy siempre cae en el estado de error con
    fallback a `mailto:hola@aggility.io`. Es intencional, no un bug.
- Gates en verde: `npm run typecheck`, `npm run lint`, `npm run build`.
- Verificado corriendo (`next dev`, Playwright headless): desktop 1440px y mobile 390px,
  sin overflow, sin errores de consola. Se encontró y corrigió un bug real en el camino:
  los `Button` con `render={<Link .../>}` (base-ui) necesitan `nativeButton={false}` o
  Base UI tira un warning de semántica rota — aplicado en los 5 lugares que usan ese
  patrón (`site-header`, `hero`, `problem-mirror`, `gobtech`).
- `PLAN.md` Etapa 2 tildada.
- **Sin commitear todavía** — queda para que el usuario revise antes de commitear.

**Próximo paso:**
- **Etapa 3 del `PLAN.md`: formulario funcional.** Crear `app/api/contact/route.ts`
  (server-side, API key de Resend solo ahí), validación cliente + servidor, log del
  fallo (invariante #1). El frontend (`ContactForm`) ya está listo para consumir ese
  endpoint sin cambios.
- Deploy a Vercel: ✅ **hecho.** El usuario importó y conectó el repo (`Aggility/
  aggility-website`) desde el dashboard — preview automático por push. Sin variables de
  entorno todavía (se agregan en Etapa 3 con la API key de Resend, solo en el servidor).

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
