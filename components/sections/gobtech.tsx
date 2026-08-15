import Link from "next/link";
import {
  Bot,
  ClipboardList,
  FileSearch,
  Landmark,
  MessageSquareWarning,
  Ticket,
} from "lucide-react";

import { Atmosphere } from "@/components/layout/atmosphere";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/layout/eyebrow";
import { CONTACT_SECTION_ID, CTA_GOBTECH, GOBTECH_SECTION_ID } from "@/lib/constants";

const PRODUCTS = [
  { icon: Landmark, label: "Portales de gobierno y datos abiertos" },
  { icon: ClipboardList, label: "Presupuesto participativo" },
  { icon: MessageSquareWarning, label: "Reclamos vecinales con seguimiento trazable" },
  { icon: Ticket, label: "Turnero digital" },
  { icon: FileSearch, label: "Guía de trámites por API" },
  { icon: Bot, label: "Asistentes virtuales para atención ciudadana" },
];

export function Gobtech() {
  return (
    <section id={GOBTECH_SECTION_ID} className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/50 px-6 py-14 sm:px-14">
          <Atmosphere grid={false} />
          <div className="grid gap-12 lg:grid-cols-[minmax(0,26rem)_1fr] lg:items-center lg:gap-16">
            <div className="flex flex-col gap-6">
              <Eyebrow>Sector público · Gobtech</Eyebrow>
              <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Tecnología para modernizar la gestión pública.
              </h2>
              <p className="text-lg text-muted-foreground">
                Productos SaaS ya probados en administraciones municipales.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="mt-2 h-11 w-fit px-6 text-base"
                nativeButton={false}
                render={<Link href={`#${CONTACT_SECTION_ID}`} />}
              >
                {CTA_GOBTECH}
              </Button>
            </div>

            <ul className="grid gap-x-8 sm:grid-cols-2">
              {PRODUCTS.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 border-t border-border/60 py-4"
                >
                  <Icon className="size-5 shrink-0 text-primary" aria-hidden />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
