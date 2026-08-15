# Design direction — Aggility website

El brief que faltaba. Sin una vara, un agente hace lo seguro: el default genérico
(todo centrado, cards por todos lados, negro plano). Esto define el lenguaje visual
para que cualquier sesión/agente construya hacia el mismo lugar.

## Norte
Se tiene que ver como **la primera demo de lo que Aggility sabe hacer**: premium,
técnico, seguro de sí mismo. Nunca "agencia que recién empieza".

Combinación de cierre (aprobada): **base premium oscura + escala y asimetría editorial
+ prueba con números** (los números entran cuando estén confirmados; ver §Números).

## Principios
1. **Nada centrado por defecto.** Encabezados alineados a la izquierda, layouts
   asimétricos (columna de título + columna de contenido, anchos distintos). El
   centrado uniforme es la señal nº1 de template.
2. **Escala tipográfica dramática.** Headlines grandes con tracking negativo, cuerpo
   tranquilo. El contraste lo da el tamaño, no la decoración.
3. **Acento con disciplina.** El primario (`--primary`, #6283FF) se reserva para un
   momento por sección: un CTA, el punto del eyebrow, una palabra, un ícono. Si está
   en todos lados, deja de significar. Palabra con degradé: clase `.text-gradient`,
   una sola vez (el hero).
4. **Atmósfera, no vacío.** Fondo oscuro con grilla técnica difuminada (`.grid-bg`) +
   glow de acento (`.glow`), vía el componente `Atmosphere`. Solo en hero, gobtech y
   cierre — no en cada sección.
5. **Menos cards.** Preferir hairlines (`border-t border-border/60`) y filas antes que
   cajas flotantes. Cards solo donde el contenido es un objeto acotado.
6. **Dark-only.** Es una decisión de marca, no un olvido. Los tokens de light mode
   quedan definidos pero sin uso.

## Piezas compartidas (usarlas, no reinventar)
- `components/layout/eyebrow.tsx` — etiqueta con punto de acento; abre cada sección.
- `components/layout/section-heading.tsx` — eyebrow + título + bajada; izquierda por defecto.
- `components/layout/atmosphere.tsx` — grilla + glow de fondo.
- Utilidades en `app/globals.css`: `.text-gradient`, `.grid-bg`, `.glow`, `.lift` (hover).

## Ritmo de secciones
Alternar fondo plano y `bg-card/30` con `border-y` para separar bloques. Layouts que
alternan (2 columnas título/contenido, grillas con hairline) para que no haya dos
secciones con la misma forma.

## Números (prueba)
Hay respaldo real (dashboards de campañas/eventos y medición de clientes). Reglas:
- **Sin nombres de cliente** salvo consentimiento explícito por escrito.
- **Anonimizar** ("una campaña de evento", "un cliente") hasta confirmar.
- **Techo creíble**: un ROI de 4 dígitos, aunque real, se lee como inflado en frío —
  liderar con cifras creíbles y reservar el número que vuela la cabeza para un caso con
  el dashboard como prueba al lado.
- La **v1 de hoy va SIN franja de números** — solo logo, copy y este lenguaje visual.
  Los números y los casos/testimonios entran en v2 cuando estén confirmados.

## Fuera de alcance de esta v1 (ver AGENTS.md "qué NO es")
Portfolio de casos, testimonios reales, franja de métricas, imágenes/mockups de
producto. Todo v2.
