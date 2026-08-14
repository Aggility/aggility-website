# PLAN — el qué y el cuándo

La hoja de ruta técnica. **El qué se construye y en qué orden.** El *por qué* y el
*por qué no* viven en `AGENTS.md`; acá van las etapas y los riesgos.

---

## §0 — Los dos carriles

- **Se valida solo (se construye y se ve):** todo el sitio. Es un encargo propio, sin
  dominio externo ni aprobación de cliente que bloquee. Se itera contra el criterio de
  dirección sobre el navegador.
- **Necesita input de afuera (resolver ANTES de construir la UI):** los **activos de
  marca** — logo, paleta de colores, tipografía — que viven en Drive `01. Privada /
  05. Brand`. Sin eso, la UI se construye con placeholders y hay que rehacer estilos.
  → Extraer/confirmar la identidad visual antes de la Etapa 1.

## §1 — Etapas

Sin fechas. Cada etapa cierra con un criterio verificable. La versión más chica usable
va primero.

### Etapa 0 — Andamiaje

- [x] Proyecto Next.js + TypeScript + Tailwind + shadcn/ui inicializado y corriendo local.
- [x] Repo con control de versiones, `.gitignore` correcto.
- [x] Lint + typecheck configurados y pasando (`build` estático también pasa).
- [x] Deploy en Vercel conectado (preview automático por push). Repo importado por el
  usuario desde el dashboard de Vercel.
- **Cierra cuando:** `npm run build` + lint + typecheck pasan en limpio y hay un preview
  publicado. → ✅ **Etapa 0 cerrada del todo.**

### Etapa 1 — Identidad de marca ✅

- [x] Assets de marca (logo, isotipo, paleta, tipografía) — resueltos vía `design/`
  (subidos por el usuario), no vía Drive. Paleta extraída por pixel; tipografía **Inter**
  confirmada por el usuario.
- [x] Volcado a tokens de Tailwind (colores, fuentes) y componentes base de shadcn.
- **Cierra cuando:** el design system mínimo (colores + tipografía + logo) está aplicado
  y se ve coherente en un componente de prueba. → ✅ verificado renderizado.

### Etapa 2 — Contenido y secciones (la landing)

Construir la página de una sola página, en el orden de la copy acordada (`docs/`):

- [ ] Hero (titular + subtitular con ancla de credibilidad + CTA primario)
- [ ] Espejo del problema ("Tu problema es nuestro punto de partida")
- [ ] Servicios (una sola vez, verbo + beneficio)
- [ ] Por qué Aggility (diferenciador)
- [ ] Gobtech (sección propia)
- [ ] Prueba social (testimonios — datos reales a confirmar, ver riesgos)
- [ ] FAQ
- [ ] Cierre + formulario
- **Cierra cuando:** todas las secciones están montadas, responsivas y con la copy final.

### Etapa 3 — Formulario funcional

- [ ] Route handler / server action que envía el email vía Resend.
- [ ] Validación de campos (cliente + servidor).
- [ ] Manejo de error visible al usuario + log del fallo (invariante #1).
- [ ] API key de Resend solo en servidor (invariante #3).
- **Cierra cuando:** un envío real llega al mail de Aggility, y un fallo simulado muestra
  aviso al usuario y queda logueado.

### Etapa 4 — Pulido y publicación

- [ ] Verificación mobile de todas las secciones (invariante #2).
- [ ] SEO básico: meta tags, Open Graph, favicon, sitemap.
- [ ] Rendimiento (Lighthouse) e imágenes optimizadas.
- [ ] Analítica web básica (si se decide — ver riesgos).
- **Cierra cuando:** el sitio está en producción, revisado en mobile y con métricas base.

## §3 — Riesgos

Priorizados por irreversibilidad.

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Testimonios/clientes sin depurar | Publicar datos incorrectos de un cliente daña la relación | La cartera es un **borrador** (ver memoria Aggility). Confirmar nombres, cargos y consentimiento antes de publicar. No inventar métricas |
| El form falla silenciosamente | Lead perdido = plata perdida (invariante #1) | Manejo de error + log obligatorio; test que simule fallo de Resend |
| Rotura en mobile | Se pierde el grueso del tráfico (invariante #2) | Verificar cada sección en viewport mobile antes de cerrarla |
| Alcance que se escapa | La landing crece a CMS/blog/multi-idioma y no se publica nunca | Respetar "qué NO es" de `AGENTS.md`; elevar toda ampliación al orquestador |
| Analítica y cookies | Sumar GA/Meta Pixel obliga a banner de consentimiento y afecta privacidad | Decidir explícitamente si se incluye; si sí, consentimiento correcto. No es bloqueante de la v1 |
