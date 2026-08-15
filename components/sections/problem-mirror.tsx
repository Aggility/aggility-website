import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/layout/eyebrow";
import { CONTACT_SECTION_ID, CTA_PRIMARY } from "@/lib/constants";

const QUESTIONS = [
  "¿Sentís que tu negocio se estancó?",
  "¿Tus procesos internos te comen el día?",
  "¿Tu tecnología no acompaña lo que tus clientes necesitan?",
  "¿Tu presencia online no atrae a las personas correctas?",
  "¿Ya invertiste en soluciones que prometieron mucho y no resolvieron la raíz?",
];

export function ProblemMirror() {
  return (
    <section className="border-y border-border/50 bg-card/30 py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="flex flex-col gap-6">
          <Eyebrow>El punto de partida</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Tu problema de negocio es nuestro punto de partida.
          </h2>
          <p className="text-lg text-muted-foreground">
            No vendemos &ldquo;una página web&rdquo; ni &ldquo;un producto
            tecnológico&rdquo;. Nos sumergimos en el punto de dolor que frena tu
            crecimiento y construimos la solución integral que lo resuelve de
            verdad.{" "}
            <span className="text-foreground">
              Cada desafío esconde una oportunidad.
            </span>
          </p>
          <Button
            size="lg"
            className="mt-2 h-11 w-fit px-6 text-base"
            nativeButton={false}
            render={<Link href={`#${CONTACT_SECTION_ID}`} />}
          >
            {CTA_PRIMARY}
          </Button>
        </div>

        <ul className="flex flex-col">
          {QUESTIONS.map((question) => (
            <li
              key={question}
              className="flex items-start gap-4 border-t border-border/60 py-4 text-lg text-balance last:border-b"
            >
              <span
                aria-hidden
                className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary"
              />
              {question}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
