import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/layout/container";

const FAQS = [
  {
    question: "¿Qué tipo de soluciones ofrecen?",
    answer:
      "Soluciones integrales y a medida en desarrollo web, software, IA y marketing digital. Nos enfocamos en resolver tu problema de raíz para que crezcas sin limitaciones.",
  },
  {
    question: "¿Qué los diferencia de otros proveedores?",
    answer:
      "No somos un proveedor más. Somos el socio que se sumerge en la raíz de tus desafíos y construye relaciones de largo plazo. No vendemos tecnología: resolvemos los problemas que te quitan el sueño.",
  },
  {
    question: "¿Cómo sé si mi negocio los necesita?",
    answer:
      "Si tus procesos te consumen el tiempo, tu tecnología no acompaña a tus clientes, o ya invertiste en soluciones que no resolvieron nada de fondo — probablemente podamos ayudarte.",
  },
  {
    question: "¿Cómo miden el éxito?",
    answer:
      "Con KPIs atados al negocio: tasa de conversión, costo por lead calificado (CPL) y retorno de la inversión (ROI). Reportes periódicos con el impacto en tus ingresos.",
  },
  {
    question: "¿Cómo es trabajar con ustedes?",
    answer:
      "Tu problema es el punto de partida. Gestión centralizada, revisiones semanales, entregables claros, garantía de 30 días post-lanzamiento y, en proyectos SaaS, tus datos son 100% tuyos.",
  },
];

export function Faq() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-10">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Preguntas frecuentes
        </h2>

        <Accordion className="w-full max-w-2xl">
          {FAQS.map(({ question, answer }, index) => (
            <AccordionItem key={question} value={`faq-${index}`}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
