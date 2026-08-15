import Link from "next/link";
import {
  Bot,
  ClipboardList,
  FileSearch,
  Landmark,
  MessageSquareWarning,
  Ticket,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { CONTACT_SECTION_ID, CTA_GOBTECH } from "@/lib/constants";

const PRODUCTS = [
  { icon: Landmark, label: "Portales de gobierno y datos abiertos" },
  { icon: ClipboardList, label: "Presupuesto participativo" },
  {
    icon: MessageSquareWarning,
    label: "Reclamos vecinales con seguimiento trazable",
  },
  { icon: Ticket, label: "Turnero digital" },
  { icon: FileSearch, label: "Guía de trámites por API" },
  { icon: Bot, label: "Asistentes virtuales para atención ciudadana" },
];

export function Gobtech() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-center gap-10 rounded-2xl border border-border bg-card px-6 py-12 text-center sm:px-12">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Tecnología para modernizar la gestión pública.
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground text-balance">
            Productos SaaS ya probados en administraciones municipales.
          </p>

          <ul className="grid w-full max-w-3xl gap-3 text-left sm:grid-cols-2">
            {PRODUCTS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-lg border border-border bg-background/60 px-4 py-3"
              >
                <Icon className="size-5 shrink-0 text-primary" aria-hidden />
                <span className="text-sm">{label}</span>
              </li>
            ))}
          </ul>

          <Button
            size="lg"
            variant="outline"
            className="h-11 px-6 text-base"
            nativeButton={false}
            render={<Link href={`#${CONTACT_SECTION_ID}`} />}
          >
            {CTA_GOBTECH}
          </Button>
        </div>
      </Container>
    </section>
  );
}
