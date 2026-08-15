import type { ReactNode } from "react";

import { Eyebrow } from "@/components/layout/eyebrow";
import { cn } from "@/lib/utils";

// Encabezado de sección estándar: eyebrow + título + bajada opcional.
// Alineado a la izquierda por defecto (rompe el centrado uniforme que hacía ver
// la landing como template). `align="center"` solo cuando de verdad conviene.
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {lead ? (
        <p className="text-lg text-muted-foreground text-balance">{lead}</p>
      ) : null}
    </div>
  );
}
