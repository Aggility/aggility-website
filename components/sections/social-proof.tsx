import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// Datos placeholder: la cartera real (Brujo Coffee, Insurio, Ingraf, Pampa
// Start, Tracestory, Mashua, El Garage, Gobierno de Río Cuarto, Gobierno de
// Achiras) es un borrador sin depurar — nombres, cargos, consentimiento y el
// dato duro (número real) están sin confirmar. Ver docs/landing-copy.md §6 y
// AGENTS.md "Pendientes / gotchas". No reemplazar por datos reales sin que
// dirección confirme cada testimonio.
const PLACEHOLDER_TESTIMONIALS = [
  {
    quote:
      "Testimonio a confirmar — mensaje breve con un resultado medible del proyecto.",
    name: "Nombre Apellido",
    role: "Cargo, Empresa (a confirmar)",
    tag: "Cliente" as const,
  },
  {
    quote:
      "Testimonio a confirmar — mensaje breve con un resultado medible del proyecto.",
    name: "Nombre Apellido",
    role: "Cargo, Empresa (a confirmar)",
    tag: "Aliado Estratégico" as const,
  },
  {
    quote:
      "Testimonio a confirmar — mensaje breve con un resultado medible del proyecto.",
    name: "Nombre Apellido",
    role: "Cargo, Gobierno (a confirmar)",
    tag: "Cliente" as const,
  },
];

export function SocialProof() {
  return (
    <section className="bg-card/40 py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-10">
        <h2 className="max-w-2xl text-center text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Nuestra red de confianza.
        </h2>

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLACEHOLDER_TESTIMONIALS.map((testimonial, index) => (
            <Card key={index} className="ring-border">
              <CardHeader className="flex flex-row items-center justify-between gap-2">
                <Badge variant="outline" className="font-normal">
                  {testimonial.tag}
                </Badge>
                <Badge variant="secondary" className="font-normal text-muted-foreground">
                  A confirmar
                </Badge>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="text-sm text-muted-foreground italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="max-w-2xl text-center text-xs text-muted-foreground">
          Testimonios en proceso de confirmación con cada cliente (nombre,
          cargo y consentimiento). No se publican datos reales hasta
          verificarlos.
        </p>
      </Container>
    </section>
  );
}
