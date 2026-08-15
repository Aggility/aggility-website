import { Compass, Handshake, Target } from "lucide-react";

import { Container } from "@/components/layout/container";

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
    <section className="bg-card/40 py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-12">
        <h2 className="max-w-2xl text-center text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Más que un proveedor: tu aliado estratégico.
        </h2>

        <div className="grid w-full gap-8 sm:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center gap-3 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="size-6" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-balance">{title}</h3>
              <p className="text-sm text-muted-foreground text-balance">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
