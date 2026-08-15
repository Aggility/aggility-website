import Image from "next/image";

import { Container } from "@/components/layout/container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 py-10">
      <Container className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <Image
          src="/brand/logo-white.webp"
          alt="Aggility"
          width={505}
          height={170}
          className="h-6 w-auto opacity-80"
        />
        <div className="flex flex-col items-center gap-1 text-sm text-muted-foreground sm:items-end">
          <a href="mailto:hola@aggility.io" className="hover:text-foreground">
            hola@aggility.io
          </a>
          <p>© {year} Aggility. Todos los derechos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}
