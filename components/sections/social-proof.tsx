import {
  Building2,
  CalendarCheck,
  Landmark,
  ShoppingBag,
  Sprout,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";

// v1: sin testimonios (los datos reales — nombres, cargos, consentimiento — son
// un borrador sin depurar; ver docs/landing-copy.md §6). En lugar de placeholders
// que en producción se ven poco serios, mostramos las verticales reales donde
// Aggility genera impacto. Casos y testimonios reales entran en v2.
const VERTICALS = [
  {
    icon: CalendarCheck,
    title: "Eventos de gran escala & AgTech",
    description:
      "Convocatoria, medición y conversión para eventos y cumbres internacionales.",
  },
  {
    icon: Sprout,
    title: "Agroindustria, salud animal & genética",
    description:
      "Digitalización de campo, diagnóstico con IA y pauta por temporada.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce & retail",
    description:
      "Tiendas que convierten, integradas en tiempo real con el ERP.",
  },
  {
    icon: Building2,
    title: "Industria, gráfica & servicios B2B",
    description:
      "Presencia de marca y captación de leads calificados a escala nacional.",
  },
  {
    icon: Landmark,
    title: "Sector público & Gobtech",
    description:
      "Modernización de la gestión pública con productos SaaS probados.",
  },
];

export function SocialProof() {
  return (
    <section className="border-y border-border/50 bg-card/30 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Especialización"
          title="Dónde generamos impacto."
          lead="Combinamos tecnología, analítica y conocimiento del sector en las verticales donde más rinde."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VERTICALS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="lift flex flex-col gap-3 rounded-2xl border border-border/60 bg-background p-6"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden />
              </div>
              <h3 className="text-base font-semibold text-balance">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
