import Image from "next/image";
import { Button } from "@/components/ui/button";

const swatches = [
  { name: "Foreground", token: "var(--foreground)", hex: "#2A3546" },
  { name: "Primary / acento", token: "var(--primary)", hex: "#6283FF" },
  { name: "Secundario", token: "var(--muted-foreground)", hex: "#525F75" },
  { name: "Tint claro", token: "var(--accent)", hex: "#CFD9FF" },
  { name: "Background", token: "var(--background)", hex: "#0D1114" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center bg-background px-6 py-16 text-foreground sm:px-10">
      <div className="flex w-full max-w-3xl flex-col items-center gap-12 text-center">
        <Image
          src="/brand/logo-white.webp"
          alt="Aggility"
          width={505}
          height={170}
          priority
          className="h-10 w-auto"
        />

        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Sistema de diseño en marcha
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground text-balance">
            Logo, paleta y tipografía (Inter) aplicados desde los tokens de
            Tailwind. Esta pantalla es la prueba de la Etapa 1 — el contenido
            final de la landing llega en la Etapa 2.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button>Hacé tu consulta</Button>
          <Button variant="secondary">Botón secundario</Button>
          <Button variant="outline">Botón outline</Button>
        </div>

        <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-5">
          {swatches.map((swatch) => (
            <div key={swatch.name} className="flex flex-col items-center gap-2">
              <div
                className="h-14 w-full rounded-lg border border-border"
                style={{ backgroundColor: swatch.token }}
              />
              <div className="text-xs text-muted-foreground">
                <div>{swatch.name}</div>
                <div className="font-mono">{swatch.hex}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
