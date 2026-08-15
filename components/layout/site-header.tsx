import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import {
  CONTACT_SECTION_ID,
  CTA_PRIMARY,
  GOBTECH_SECTION_ID,
  SERVICES_SECTION_ID,
} from "@/lib/constants";

const NAV = [
  { href: `#${SERVICES_SECTION_ID}`, label: "Servicios" },
  { href: `#${GOBTECH_SECTION_ID}`, label: "Gobtech" },
  { href: `#${CONTACT_SECTION_ID}`, label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="#top" className="flex items-center gap-2" aria-label="Aggility — inicio">
          <Image
            src="/brand/logo-white.webp"
            alt="Aggility"
            width={505}
            height={170}
            priority
            className="h-7 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Button
          size="sm"
          className="hidden sm:inline-flex"
          nativeButton={false}
          render={<Link href={`#${CONTACT_SECTION_ID}`} />}
        >
          {CTA_PRIMARY}
        </Button>
        <Button
          size="sm"
          className="sm:hidden"
          nativeButton={false}
          render={<Link href={`#${CONTACT_SECTION_ID}`} />}
        >
          Contacto
        </Button>
      </Container>
    </header>
  );
}
