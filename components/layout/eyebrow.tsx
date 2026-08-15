import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

// Etiqueta pequeña con punto de acento. Marca el arranque de cada sección y da
// ritmo consistente sin repetir estilos.
export function Eyebrow({ className, children, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-2 rounded-full border border-border/80 px-3 py-1 text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase",
        className,
      )}
      {...props}
    >
      <span className="size-1.5 rounded-full bg-primary" aria-hidden />
      {children}
    </span>
  );
}
