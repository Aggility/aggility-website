import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { CONTACT_SECTION_ID, CTA_PRIMARY } from "@/lib/constants";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
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
