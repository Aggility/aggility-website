# DISCOVERY — Cuestionario de inicio de proyecto

Este es el **primer documento que se abre en un proyecto nuevo**, y el único que
se llena antes de escribir una línea de código.

> Acta de nacimiento del proyecto **aggility-website**. Una vez volcado a `AGENTS.md`
> y `PLAN.md`, esto no se edita más: es historia.

---

## §0 — Clasificación: qué tipo de proyecto es este

Cinco preguntas, módulos resultantes:

1. **¿Propio o de afuera?** → **Propio.** Es el sitio de marketing de Aggility, nuestra
   propia agencia. No ejecutamos un spec de un tercero. → `handoff` **NO**.
2. **¿Datos a persistir?** → **No.** El formulario de contacto dispara un email vía
   Resend; no hay base de datos ni historial en el sitio. → `datos` **NO**.
3. **¿Multi-inquilino?** → No. → `multi-inquilino` **NO**.
4. **¿Producto que se vende?** → No. El sitio no se vende; es la vidriera comercial de
   Aggility. Su objetivo es generar leads, pero el sitio en sí no es un producto con
   pricing. → `negocio` **NO** (se borra `BUSINESS.md`).
5. **¿Conocés el dominio?** → Sí, es nuestra propia agencia. → `dominio` **NO**.

**Módulos activos: ninguno. Núcleo puro** — un sitio de bajo volumen, sin base de datos.
Las secciones 🔌 de módulo se borran en todos los documentos.

---

# NÚCLEO

## 1. El encargo — de dónde viene y qué resuelve

- **¿De dónde nace esto?** Idea propia. Aggility necesita su propia landing — hoy no
  tiene sitio publicado y se apoya en boca en boca. Es la cara pública que faltaba.
- **Fuente de verdad de "está bien hecho":** el criterio de Germán y Guillermo (dirección
  de Aggility) sobre el mensaje, más la copy ya acordada (ver `docs/` — la versión
  recomendada de la landing) y la identidad de marca (logo, paleta, tipografía) que vive
  en Google Drive `01. Privada / 05. Brand`.
- **Qué problema concreto resuelve:** un prospecto que llega por recomendación o búsqueda
  no tiene dónde confirmar quién es Aggility, qué resuelve y cómo contactarla. Sin sitio,
  se pierde credibilidad y leads calificados. La landing convierte esa atención en una
  conversación (Diagnóstico Estratégico).
- **¿Cómo sé que el problema es real?** La agencia cierra bien por boca en boca pero no
  tiene presencia online propia — es una carencia observada, no supuesta. Además la copy
  y la estructura ya se venían trabajando en borradores (Gemini + versión previa).

## 2. Qué es — y sobre todo, qué NO es

- **Qué es (una frase):** una landing page de una sola página para Aggility, orientada a
  convertir visitantes en leads calificados vía un formulario de contacto.
- **Qué NO es:**
  - **No es un CMS ni un blog.** El contenido es fijo, se edita en código, no hay panel.
  - **No es un portfolio dinámico** con casos cargables; los casos/testimonios van
    hardcodeados en esta etapa.
  - **No tiene backend con base de datos.** El form manda email, no guarda nada.
  - **No es multi-idioma** por ahora — español (Argentina) solamente.
  - **No incluye el producto Gobtech SaaS** ni su panel; la landing solo lo menciona como
    servicio/sección y linkea a contacto.
  - **No es un sistema de autenticación ni área privada.**
- **¿Con qué se integra?** Resend (envío del email del formulario). Nada más en esta etapa.
- **¿Con qué NO se integra?** CRM, base de datos, analítica avanzada de leads, pasarelas
  de pago. (Analítica web básica tipo GA/GTM/Meta Pixel puede sumarse, ver riesgos.)

## 3. Alcance y bordes

- **Versión más chica que ya sirve:** la landing de una página con las secciones core
  (hero, dolor, servicios, por qué, gobtech, prueba social, FAQ, cierre con form) y el
  form enviando email real vía Resend. Publicada y visible.
- **Qué NO entra en la primera versión aunque suene bien:** landings separadas por
  vertical/nicho, blog, panel de administración, base de datos de leads, multi-idioma,
  animaciones complejas, integración a CRM. Todo eso queda para después de tener la v1
  publicada y en uso.

## 4. Descartes iniciales

- **Base de datos para los leads.** Descartada en esta etapa: agrega migraciones,
  esquema y andamiaje para un volumen que no lo justifica. El email de Resend alcanza.
- **CMS / contenido editable por panel.** Sobredimensionado: el contenido cambia poco y
  lo edita quien toca el código. Un CMS es peso sin beneficio para una landing.
- **Multi-idioma desde el día 1.** El mercado inmediato es regional/nacional en español.
  Internacionalizar antes de necesitarlo es futuro hipotético.
- **Framework de animaciones pesado.** Riesgo de sobreingeniería visual; se prioriza
  claridad y velocidad de carga sobre efectos.

## 5. Stack

- **App / lenguaje / framework:** Next.js (App Router) + TypeScript + Tailwind +
  shadcn/ui. (Stack estándar de Aggility — [[user_profile]].)
- **Hosting / deploy:** Vercel.
- **Servicios externos:** Resend (email del formulario). Analítica web opcional (ver §6).
- **Sin base de datos** (módulo `datos` no activo).

## 6. Qué nunca puede romperse

- **El formulario nunca puede fallar en silencio.** Un lead que llena el form y no llega
  a Aggility es plata perdida. Si el envío falla, tiene que avisar al usuario y quedar
  registro (log del error). Este es el invariante #1.
- **El sitio no puede romperse en mobile.** La mayoría del tráfico llega desde el celular;
  una landing rota en mobile es peor que no tener sitio.
- **No exponer secretos** (API key de Resend) en el cliente — vive solo en el servidor.

---

# NÚCLEO — cierre

## 9. Cómo trabajo en este proyecto

- **¿Solo o con equipo/agentes?** Germán orquesta con Claude como consultor/orquestador;
  agentes ejecutores para tareas acotadas. Guillermo (co-dirección) valida mensaje.
- **Etapa actual:** desarrollo de la v1. Propuestas "fuera de tiempo": todo lo listado en
  §2 (qué NO es) y §4 (descartes).
- **¿Qué NO quiero que un agente haga sin preguntarme?** Cambiar la copy/mensaje ya
  acordado, publicar/deployar a producción, tocar la identidad de marca, agregar
  dependencias pesadas o servicios externos nuevos, o ampliar el alcance (nuevas
  secciones/features) sin elevarlo primero.

---

*Acta de nacimiento — no se edita más. Volcada a `AGENTS.md` y `PLAN.md` al arrancar.*
