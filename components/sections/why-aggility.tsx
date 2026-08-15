import { Compass, Handshake, Target } from "lucide-react";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";

const REASONS = [
  {
    icon: Target,
    title: "Resultados a medida, no promesas.",
    description:
      "Vamos a la raíz del problema antes de escribir una línea de código o activar un anuncio.",
  },
  {
    icon: Compass,
    title: "Visión 360°: software + performance.",
    description:
      "Alineamos cada desarrollo y cada campaña con tus métricas de facturación y retorno.",
  },
  {
    icon: Handshake,
    title: "Relación de largo plazo.",
    description:
      "Te acompañamos en toda tu maduración digital. Buscamos clientes comprometidos a resolver, no a parchar.",
  },
];

export function WhyAggility() {
  return (
    <section className="border-y border-border/50 bg-card/30 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Por qué Aggility"
          title="Más que un proveedor: tu aliado estratégico."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/40 sm:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col gap-4 bg-background p-7"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-balance">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
