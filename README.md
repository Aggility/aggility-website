# aggility-website

Landing page de **Aggility** — la agencia. Un sitio de una sola página orientado a
convertir visitantes en leads calificados vía un formulario de contacto.

## Qué es (y qué no)

Es una landing estática, sin base de datos: el formulario dispara un email vía Resend.
No es un CMS, no es un blog, no tiene panel de administración ni área privada, y no
incluye el producto Gobtech SaaS (solo lo menciona). El detalle vive en
[`AGENTS.md`](AGENTS.md).

## Stack

| Capa | Elección |
|---|---|
| App | Next.js (App Router) + TypeScript |
| Estilos / UI | Tailwind + shadcn/ui |
| Hosting | Vercel |
| Email del formulario | Resend |
| Base de datos | Ninguna |

## Cómo está organizado el repo

Este proyecto usa el método **Harness** (núcleo + módulos). Cada documento tiene un eje:

| Documento | Qué contiene |
|---|---|
| [`AGENTS.md`](AGENTS.md) | Manual de trabajo + el proyecto: qué es / qué NO es, alcance, stack, descartes, invariantes. **Fuente de verdad** |
| [`PLAN.md`](PLAN.md) | Etapas, orden de construcción y riesgos |
| [`DISCOVERY.md`](DISCOVERY.md) | Acta de nacimiento (el cuestionario de inicio). Historia, no se edita |
| [`PLAYBOOK.md`](PLAYBOOK.md) | Lecciones que deja el proyecto, con la cicatriz fresca |
| [`docs/`](docs/) | Cómo levantar y tocar el código, y la copy de la landing |
| [`CLAUDE.md`](CLAUDE.md) | Stub que importa `AGENTS.md` + el estado actual |

## Setup

Ver [`docs/setup.md`](docs/setup.md). En corto (una vez inicializado el andamiaje):

```bash
npm install
npm run dev
```

## Estado

Ver el bloque **Estado actual** en [`CLAUDE.md`](CLAUDE.md). Hoy: arranque completado
(documentos llenos), pendiente inicializar el andamiaje Next.js (Etapa 0 del `PLAN.md`).
