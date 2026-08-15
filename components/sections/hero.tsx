import Link from "next/link";

import { Atmosphere } from "@/components/layout/atmosphere";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/layout/eyebrow";
import {
  CONTACT_SECTION_ID,
  CTA_PRIMARY,
  SERVICES_SECTION_ID,
} from "@/lib/constants";

const CAPABILITIES = [
  "Software a medida",
  "Inteligencia artificial",
  "E-commerce + ERP",
  "Marketing de performance",
  "Gobtech",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <Atmosphere />
      <Container className="flex flex-col gap-8 py-24 sm:py-32 lg:py-40">
        <Eyebrow>Software · IA · Performance</Eyebrow>

        <h1 className="max-w-4xl text-4xl leading-[1.03] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          Resolvemos los problemas que{" "}
          <span className="text-gradient">te quitan el sueño</span>.
        </h1>

        <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Software a medida, inteligencia artificial y marketing digital que se
          miden en tu facturación, no en entregables. +20 años yendo a la raíz
          de los desafíos que frenan a las empresas.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            size="lg"
            className="h-11 px-6 text-base"
            nativeButton={false}
            render={<Link href={`#${CONTACT_SECTION_ID}`} />}
          >
            {CTA_PRIMARY}
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="h-11 px-5 text-base"
            nativeButton={false}
            render={<Link href={`#${SERVICES_SECTION_ID}`} />}
          >
            Ver servicios
          </Button>
        </div>

        <ul className="flex flex-wrap gap-2 pt-6">
          {CAPABILITIES.map((capability) => (
            <li
              key={capability}
              className="rounded-full border border-border/70 bg-card/50 px-3.5 py-1.5 text-sm text-muted-foreground"
            >
              {capability}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
