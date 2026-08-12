# Harness

Marco de gobernanza y arquitectura para arrancar un proyecto nuevo con una metodología
de trabajo ya puesta — pensado para que los que construyen sean **agentes**, con un
orquestador que controla el proceso y ejecutores que hacen las tareas.

El nombre es la tesis: un *harness* sujeta una fuerza potente y la canaliza sin
apagarla. Eso hace con los agentes — guardarraíles contra la deriva de contexto y
contra que un ejecutor improvise decisiones de alcance, sin frenar su potencia.

No trae código ni contenido de ningún proyecto. Trae **el método y los formularios
vacíos** que hacen que un proyecto quede documentado del día 1 al último, y que la
disciplina se cumpla sola en vez de por fuerza de voluntad.

> Es una herramienta **viva**. No es perfecta y no pretende serlo: se va a mejorar
> usándola. Cada proyecto que la use le va a enseñar algo. Tratarla como v1
> desechable-en-partes, no como obra terminada.

## Núcleo + módulos

Harness es un **núcleo** que va en todo proyecto, más **módulos** que se enganchan solo
si el proyecto los necesita. Por eso el mismo esqueleto sirve para un sitio estático y
para un SaaS multi-inquilino: no se configura para un tipo de proyecto, se **arma**
según lo que el proyecto es. Los módulos se deciden en `§0` de `DISCOVERY.md` y se
marcan **🔌** allí donde aparecen; al arrancar, se borra lo que no aplica.

Módulos hoy: `datos` · `multi-inquilino` · `negocio` · `dominio` · `handoff` · `escala`.

## Qué hay acá

| Archivo | Qué es | Nace… |
|---|---|---|
| `DISCOVERY.md` | El cuestionario de inicio (con la clasificación de módulos). Se llena **offline, con la cabeza fría**, antes de escribir código | lleno (preguntas) |
| `AGENTS.md` | Manual de cómo se trabaja + contexto del proyecto. Mitad método (constante), mitad proyecto (vacío) | híbrido |
| `CLAUDE.md` | Stub que importa `AGENTS.md` + el estado actual | casi lleno |
| `PLAN.md` | El qué y el cuándo: etapas, datos, riesgos | vacío |
| `BUSINESS.md` | 🔌 módulo `negocio` — el para quién y por cuánto. Se borra si no se vende | vacío |
| `PLAYBOOK.md` | Las lecciones que deja el proyecto, con la cicatriz fresca | vacío |
| `docs/` | Cómo levantar y tocar el código | vacío |

## Cómo se usa

1. **Copiar Harness** a un directorio nuevo (o "usar como plantilla").
2. **Llenar `DISCOVERY.md`,** empezando por `§0` — las cinco preguntas que deciden qué
   módulos aplican. Sin apuro, los días que haga falta. Ahí se piensan las decisiones
   caras de revertir: qué NO es, la fuente de verdad, el alcance.
3. **Borrar los módulos que no aplican** (`git grep "🔌"` los lista) y **volcar las
   respuestas** a `AGENTS.md`, `PLAN.md` y —si va— `BUSINESS.md`. A mano, o con un
   agente orquestador que traduzca el cuestionario (no que improvise).
4. **Montar el andamiaje del apéndice** del PLAYBOOK según el stack y los módulos:
   control de versiones, un test corriendo, CI con el gate de "definición de terminado".
5. **Construir** — y a partir de ahí, la tabla de ruteo de `AGENTS.md` dice dónde va
   cada cosa que pasa.

## Cuándo NO usar Harness

Harness paga en el **día 1**: ordena *antes* de construir. Su valor es front-cargado, así
que hay casos donde es overhead y conviene saltearlo:

- **Un proyecto ya avanzado.** Si el núcleo ya está construido, funcionando y aprobado,
  meterle el aparato completo es ceremonia sobre algo que ya anda. Se detectó usándolo:
  aplicarlo a un sitio al 80% agregaba peso sin agregar orden.
- **Algo chico y descartable.** Un script de una vez, una prueba, un experimento que no
  va a vivir. Llenar el DISCOVERY para un brochure de una tarde no se justifica.

La señal es simple: **si llenar el DISCOVERY tarda más que la decisión que ordena, no lo
uses.** Harness es para lo que va a vivir y crecer, no para todo lo que se teclea.

## La regla que sostiene todo esto

> Construí la versión más chica que puedas usar vos, y **usala** antes de construir la
> siguiente. El fracaso a evitar no es construir de más: es **construir sin usar**.

Esto vale también para Harness.
