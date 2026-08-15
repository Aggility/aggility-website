import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import {
  CONTACT_SECTION_ID,
  GOBTECH_SECTION_ID,
  SERVICES_SECTION_ID,
} from "@/lib/constants";

const NAV = [
  { href: `#${SERVICES_SECTION_ID}`, label: "Servicios" },
  { href: `#${GOBTECH_SECTION_ID}`, label: "Gobtech" },
  { href: `#${CONTACT_SECTION_ID}`, label: "Contacto" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-12">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-3">
            <Image
              src="/brand/logo-white.webp"
              alt="Aggility"
              width={505}
              height={170}
              className="h-6 w-auto"
            />
            <p className="max-w-xs text-sm text-muted-foreground">
              Socio estratégico en tecnología, IA y marketing de performance.
            </p>
          </div>

          <nav className="flex flex-col gap-2 text-sm sm:items-end">
            {NAV.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            ))}
            <a
              href="mailto:hola@aggility.io"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              hola@aggility.io
            </a>
          </nav>
        </div>

        <div className="border-t border-border/50 pt-6 text-xs text-muted-foreground">
          © {year} Aggility. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}
