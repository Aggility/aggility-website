import { cn } from "@/lib/utils";

// Fondo atmosférico: grilla técnica difuminada + glow de acento. Da profundidad
// al fondo oscuro (que plano se veía vacío). Se usa en hero y cierre, no en cada
// sección — la atmósfera pierde efecto si está en todos lados.
export function Atmosphere({
  className,
  glow = true,
  grid = true,
}: {
  className?: string;
  glow?: boolean;
  grid?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      {grid ? <div className="absolute inset-0 grid-bg" /> : null}
      {glow ? <div className="absolute inset-0 glow" /> : null}
    </div>
  );
}
