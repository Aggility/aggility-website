import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
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
    <section className="bg-card/40 py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-10 text-center">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Tu problema de negocio es nuestro punto de partida.
        </h2>

        <ul className="grid w-full max-w-2xl gap-3 text-left sm:grid-cols-2">
          {QUESTIONS.map((question) => (
            <li
              key={question}
              className="rounded-lg border border-border bg-background/60 px-4 py-3 text-muted-foreground"
            >
              {question}
            </li>
          ))}
        </ul>

        <p className="max-w-2xl text-lg text-balance">
          En Aggility no vendemos &ldquo;una página web&rdquo; ni &ldquo;un
          producto tecnológico&rdquo;. Nos sumergimos en el punto de dolor
          que frena tu crecimiento y construimos la solución integral que lo
          resuelve de verdad.{" "}
          <span className="font-semibold text-foreground">
            Cada desafío esconde una oportunidad — por eso, tu problema es
            nuestro punto de partida.
          </span>
        </p>

        <Button
          size="lg"
          className="h-11 px-6 text-base"
          nativeButton={false}
          render={<Link href={`#${CONTACT_SECTION_ID}`} />}
        >
          {CTA_PRIMARY}
        </Button>
      </Container>
    </section>
  );
}
