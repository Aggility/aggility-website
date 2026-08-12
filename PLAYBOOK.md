# PLAYBOOK

Guía de construcción de **este** proyecto, escrita para copiarse al próximo.

No habla de features: habla de decisiones. Cada entrada nace de algo que pasó de
verdad en este repo —varias, de errores que costaron tiempo— y se escribe para que la
próxima vez se haga bien desde el día uno.

> **Cómo se usa:**
>
> - Se lee entero antes de empezar algo nuevo.
> - Se le agrega una entrada **cada vez que algo sale mal de una forma que valga la
>   pena recordar** — la tabla de ruteo de `AGENTS.md` manda acá.
> - Las lecciones se escriben **con la cicatriz fresca**: dos meses después se recuerda
>   *qué* se decidió pero no *por qué*, y el porqué es todo el valor.

> **Este archivo nace vacío.** No arrastra lecciones de otros proyectos: cada proyecto
> gana las suyas. Si arrancás algo parecido a un proyecto terminado, podés *consultar*
> su PLAYBOOK como referencia — pero es una lectura que hacés vos, no una copia
> automática. Lo que sirvió allá puede no aplicar acá.

---

## Formato de una entrada

Cada lección sigue esta forma. Ayuda a que se pueda copiar y a que se lea rápido:

```
## N. [El principio, en una frase imperativa]

[Qué pasó — el síntoma concreto, con nombres reales del repo.]

[Por qué pasó — la causa, no el síntoma.]

[Qué se descartó o qué parecía obvio y no lo era.]

### La versión corta, para aplicar sin pensar
- [regla accionable]
- [regla accionable]
```

---

<!-- Primera entrada va acá. Todavía no hay ninguna: el proyecto recién arranca. -->

## Apéndice — arranque de un proyecto nuevo

Lo que conviene tener antes de la primera feature. (Adaptar al stack: si no hay base de
datos, los puntos de esquema no aplican — pero el resto sí.)

- [ ] Control de versiones desde el primer commit
- [ ] Migraciones versionadas en el repo, desde el primer cambio de esquema
- [ ] Columna de inquilino y aislamiento por fila desde el día 1, si es multi-inquilino
      — retrofitearlo implica migrar todo y reescribir cada consulta
- [ ] FKs compuestas con el inquilino, si aplica
- [ ] Runner de tests instalado y **un** test corriendo, aunque sea trivial
- [ ] Integración continua que corra el gate de "definición de terminado" (`AGENTS.md`)
- [ ] Lo que haya que reconstruir (base, build) levantándose desde cero en la CI
- [ ] `AGENTS.md` con la tabla de descartes y los invariantes ya cargados del arranque
- [ ] Datos de prueba que no puedan tocar nada real

Nada de esto lleva más de un día al principio. Todo cuesta semanas después.
