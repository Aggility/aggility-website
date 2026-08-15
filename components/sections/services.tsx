import {
  Bot,
  Megaphone,
  ShoppingCart,
  Workflow,
  Wrench,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-12">
        <h2 className="max-w-2xl text-center text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Tecnología que resuelve, no que estorba.
        </h2>

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="ring-border">
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Icon className="size-5" aria-hidden />
                </div>
                <CardTitle className="text-base font-semibold text-balance">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
