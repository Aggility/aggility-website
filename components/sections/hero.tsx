import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { CONTACT_SECTION_ID, CTA_PRIMARY } from "@/lib/constants";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,var(--accent),transparent)] opacity-40"
      />
      <Container className="flex flex-col items-center gap-8 text-center">
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
          Soluciones tecnológicas para los problemas que te quitan el sueño.
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground text-balance sm:text-xl">
          Software a medida, inteligencia artificial y marketing digital que
          se miden en tu facturación, no en entregables. +20 años resolviendo
          de raíz los desafíos que frenan a las empresas.
        </p>
        <Button
          size="lg"
          className="h-11 px-6 text-base"
          nativeButton={false}
          render={<Link href={`#${CONTACT_SECTION_ID}`} />}
        >
          {CTA_PRIMARY}
        </Button>
        {/*
          Micro-credibilidad opcional de la copy ("Ya lo hicimos con [N] empresas
          y gobiernos de la región") queda afuera a propósito: el [N] es un dato
          real sin confirmar y no se inventa (ver docs/landing-copy.md §1).
        */}
      </Container>
    </section>
  );
}
