import { Bot, Megaphone, ShoppingCart, Workflow, Wrench } from "lucide-react";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { SERVICES_SECTION_ID } from "@/lib/constants";

const SERVICES = [
  {
    icon: Wrench,
    title: "Adoptá software que crece con vos",
    description:
      "Plataformas web y sistemas a medida, escalables y orientados a tus objetivos. La solución exacta que tu operación necesita para crecer sin límites.",
  },
  {
    icon: Workflow,
    title: "Organizá tu caos digital",
    description:
      "Automatizamos las tareas repetitivas y los procesos ineficientes para que tu equipo se enfoque en lo que de verdad mueve la aguja.",
  },
  {
    icon: ShoppingCart,
    title: "Vendé online e integrá tu operación",
    description:
      "Transformamos tu catálogo en una tienda que convierte, sincronizada en tiempo real con tu ERP: inventario, facturación y pedidos, sin doble carga.",
  },
  {
    icon: Bot,
    title: "Tomá decisiones con inteligencia artificial",
    description:
      "Agentes y asistentes LLM que atienden, diagnostican y califican prospectos 24/7, antes de que lleguen a tu equipo comercial.",
  },
  {
    icon: Megaphone,
    title: "Atraé a los clientes correctos",
    description:
      "Campañas en Meta y Google Ads medidas por embudo real (MQL, SQL, CPL, CAC, ROI). Tráfico calificado y oportunidades concretas.",
  },
];

export function Services() {
  return (
    <section id={SERVICES_SECTION_ID} className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-20">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionHeading
            eyebrow="Servicios"
            title="Tecnología que resuelve, no que estorba."
            lead="Cinco frentes, un mismo objetivo: mover tu negocio. No herramientas sueltas — resultados."
          />
        </div>

        <ul className="flex flex-col">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="group flex gap-5 border-t border-border/60 py-7 last:border-b"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border/70 bg-card text-primary transition-colors group-hover:border-primary/50">
                <Icon className="size-5" aria-hidden />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-semibold text-balance">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
