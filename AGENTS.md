# AGENTS.md — aggility-website

Contexto permanente del proyecto y **manual de cómo se trabaja acá**. Lo leen todos
los agentes antes de proponer o construir nada.

Este archivo tiene dos mitades:

- **De la línea de acá hasta `## Qué es`: el método.** Nace lleno, es igual en todos
  los proyectos, **no se borra ni se reescribe** — se mejora con el tiempo, con lápiz.
- **De `## Qué es` en adelante: el proyecto.** Nace vacío, se llena en el arranque
  (desde `DISCOVERY.md`) y crece durante el desarrollo.

---

# EL MÉTODO — constante, no borrar

## Mapa de documentos

Cada documento tiene un eje. No se mezclan: si algo va en dos, va en el que manda.

| Documento | Eje | Qué vive ahí |
|---|---|---|
| `AGENTS.md` (este) | El *por qué* y el *por qué no* | Alcance, invariantes, tabla de descartes, y este método |
| `PLAN.md` | El *qué* y el *cuándo* | Etapas, modelo de datos, riesgos |
| `BUSINESS.md` | El *para quién* y *por cuánto* | 🔌 módulo `negocio` — vertical, pricing, go-to-market. Si no se vende, se borra |
| `PLAYBOOK.md` | El *cómo se construye* | Lecciones que dejó este proyecto, con la cicatriz fresca |
| `docs/` | El *cómo tocar el código* | Setup, arquitectura, flujos — para quien levante el código |
| `DISCOVERY.md` | El acta de nacimiento | El cuestionario con el que arrancó. Historia, no se edita |
| `CLAUDE.md` | — | Stub que importa este archivo. Ahí vive el **estado actual** |

## Núcleo + módulos

Harness es un **núcleo** que va en todo proyecto, más **módulos** que se enganchan solo
si el proyecto los necesita. Esto es lo que hace que el mismo esqueleto sirva para un
sitio estático y para un SaaS multi-inquilino: no se configura para un tipo, se **arma**
según lo que el proyecto es.

- El **núcleo** es todo esto: método, alcance, qué NO es, fuente de verdad, invariantes,
  descartes, stack, cómo trabajar.
- Los **módulos** se deciden en `§0` de `DISCOVERY.md` y se marcan **🔌 módulo `x`** allí
  donde aparecen. Módulos hoy: `datos`, `multi-inquilino`, `negocio`, `dominio`,
  `handoff`, `escala`.

> **Al arrancar, se borra lo que no aplica.** Un `git grep "🔌"` lista qué módulos siguen
> pendientes de decisión. No hay tooling: es borrar lo que no va. Si un proyecto crece y
> más adelante necesita un módulo (ej.: un sitio que suma base de datos), se engancha en
> ese momento, no antes.

## Contrato entre agentes

Trabajan agentes de distinto costo y capacidad. Los documentos son el sistema de
coordinación: un agente ejecutor barato se mantiene dentro del riel que puso un
orquestador caro **porque el riel está escrito acá**.

| Rol | Quién | Lee | Escribe | No toca |
|---|---|---|---|---|
| **Orquestador** | El modelo de mayor capacidad (análisis, control del proceso) | Todo | `AGENTS.md`, `PLAN.md`, `BUSINESS.md`, decisiones, descartes | Detalle de implementación |
| **Ejecutor** | Los modelos operativos (tareas acotadas) | `AGENTS.md` (guardarraíl) + `PLAN.md` (la tarea) | Código, tests, migraciones, `docs/` | Alcance, descartes, negocio |

> El ejecutor **no decide alcance**. Si una tarea lo obliga a decidir qué se construye
> o qué se descarta, para y lo eleva al orquestador. Descubrir alcance en medio de una
> tarea operativa es la fuente número uno de features que sobran.

## Tabla de ruteo — dónde va cada cosa que pasa

Cuando pasa algo en el proyecto, ningún agente decide dónde anotarlo: está escrito.

| Cuando pasa esto… | …va acá |
|---|---|
| Resolví un problema y dejó un aprendizaje | `PLAYBOOK.md` — entrada nueva, **con la cicatriz fresca** (dos meses después se recuerda el qué, no el porqué) |
| Descarté una opción con una razón | tabla de descartes en este archivo (`## Descartado`) |
| Tomé una decisión de alcance | `## Alcance` en este archivo |
| 🔌 `datos` — cambié el esquema | migración versionada, **en el mismo commit** |
| Cerré o cambié una feature relevante | el documento de `docs/` que la cubre, mismo commit |
| 🔌 `dominio` — aprendí algo preguntándole a un experto | donde corresponda, y **marcar que fue preguntado, no supuesto** |
| Cambió el estado del proyecto | `CLAUDE.md` (estado actual) |

## Definición de terminado

Nada está "hecho" hasta que pasa el gate automático. **Qué encadena el gate depende
del stack** (se define en el arranque), pero el principio es constante:

1. El código compila / chequea tipos.
2. Pasa el linter.
3. **Si hay algo que reconstruir (build, y con el módulo `datos`: la base desde las
   migraciones), el repo lo reconstruye desde cero** — probando que el repositorio es la
   fuente de verdad y no depende de estado que vive solo en la máquina de alguien.
4. Corren los tests, y **corren solos en cada cambio** (integración continua). Un test
   que hay que acordarse de correr se pudre en tres semanas.

> Qué testear cuando no alcanza el tiempo para todo: **lo catastrófico**, no cobertura.
> Qué es catastrófico **depende del proyecto** (`§6` de `DISCOVERY.md`): con `datos`,
> lo que rompe el aislamiento o borra sin registro; con `handoff`, que lo entregado no
> sea fiel al diseño o se rompa en mobile; en una herramienta, un resultado incorrecto
> en silencio. Y siempre: los invariantes que ya se rompieron una vez. Ver PLAYBOOK.

## Cómo trabajar acá

- **Justificar contra el alcance de ESTE proyecto, no contra el caso general.** Una
  propuesta correcta para un SaaS global puede estar mal acá.
- 🔌 módulo `dominio` — **antes de construir algo del dominio, chequear si se preguntó o
  se supuso.** Si se supuso, decirlo y proponer preguntar. El dominio no se inventa.
- **Distinguir decisiones caras de revertir** (con `datos`: el esquema y el multi-
  inquilino; con `handoff`: apartarse del diseño acordado) de las baratas (hosting).
  Solo las primeras justifican preparar el futuro.
- **Si una restricción del proyecto invalida algo ya construido, decirlo y recortar.**
- **No re-litigar lo que está en la tabla de descartes** sin un argumento nuevo.

---

# EL PROYECTO — se llena en el arranque y durante el desarrollo

> Todo lo de acá abajo nace vacío. Se completa desde `DISCOVERY.md` al iniciar, y se
> mantiene al día durante el desarrollo. Borrar estas guías entre corchetes al llenar.

## Qué es

Una **landing page de una sola página** para Aggility (la agencia), orientada a convertir
visitantes en **leads calificados** vía un formulario de contacto que dispara un email.

**Qué NO es:**

- **No es un CMS ni un blog.** Contenido fijo, se edita en código.
- **No es un portfolio dinámico.** Casos y testimonios van hardcodeados en esta etapa.
- **No tiene backend con base de datos.** El form manda email (Resend), no persiste nada.
- **No es multi-idioma.** Español (Argentina) solamente.
- **No incluye el producto Gobtech SaaS ni su panel.** Solo lo menciona como sección y
  linkea a contacto.
- **No tiene autenticación ni área privada.**

## Alcance — leer antes de sugerir nada

- **Criterio:** se construye la landing de una página con las secciones core y el form
  enviando email real. Se valida contra el criterio de dirección (Germán/Guillermo), la
  copy acordada (`docs/`) y la identidad de marca (Drive `05. Brand`).
- **Caso real contra el que se decide:** un prospecto que llega por recomendación o
  búsqueda y necesita confirmar quién es Aggility y contactarla. No un usuario recurrente,
  no un comprador self-service.
- **Escala:** bajo volumen, sitio estático. No hay techo de carga que preocupe; se
  descartan optimizaciones de escala.
- **Etapa actual:** desarrollo de la v1. **Fuera de tiempo:** landings por vertical, blog,
  CMS, base de datos de leads, multi-idioma, integración a CRM, animaciones complejas.

## Stack

| Capa | Elección | Por qué |
|---|---|---|
| App | Next.js (App Router) + TypeScript | Stack estándar de Aggility; SSR/SSG para SEO de la landing |
| Estilos / UI | Tailwind + shadcn/ui | Rápido, consistente, es lo que ya usa el equipo |
| Hosting | Vercel | Deploy directo de Next.js, cero config |
| Email del form | Resend | Envío del lead sin backend propio; API key solo en servidor |
| Base de datos | **Ninguna** | Módulo `datos` no activo — el email alcanza para el volumen |

## Descartado — no volver a proponer

| Descartado | Por qué |
|---|---|
| Base de datos / CRM para leads | Volumen no lo justifica; el email de Resend alcanza. Retrofitear es barato si algún día hace falta |
| CMS / contenido editable por panel | El contenido cambia poco y lo edita quien toca el código; peso sin beneficio |
| Multi-idioma desde el día 1 | Mercado inmediato es español regional/nacional; futuro hipotético |
| Framework de animaciones pesado | Se prioriza claridad y velocidad de carga sobre efectos |
| Landings separadas por vertical | Buena idea a futuro, pero primero hay que tener y usar la v1 |

## Invariantes — no romper

1. **El formulario nunca falla en silencio.** Si el envío del email falla, el usuario
   recibe un aviso claro y el error queda logueado. Un lead perdido sin rastro es
   inaceptable. *(Test que lo cuide: simular fallo de Resend y verificar aviso + log.)*
2. **El sitio no se rompe en mobile.** El grueso del tráfico es celular; se valida en
   viewport mobile antes de dar cualquier sección por terminada.
3. **La API key de Resend nunca llega al cliente.** Vive solo en el servidor (route
   handler / server action), nunca en un componente cliente ni en `NEXT_PUBLIC_*`.
