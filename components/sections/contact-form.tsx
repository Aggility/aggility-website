"use client";

import { useState, type FormEvent } from "react";
import { CircleAlert, LoaderCircle } from "lucide-react";

import { Atmosphere } from "@/components/layout/atmosphere";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/layout/eyebrow";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_SECTION_ID, CTA_PRIMARY } from "@/lib/constants";

type Status = "idle" | "submitting" | "success" | "error";

// El envío real (route handler + Resend) es Etapa 3 del PLAN.md. Este form ya
// intenta postear a /api/contact para no simular un éxito falso: si el
// endpoint todavía no existe, el catch cae en el estado de error y muestra un
// canal alternativo (mailto) — el invariante #1 (el form nunca falla en
// silencio) rige desde ahora, no recién cuando se cablee Resend.
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error(`Respuesta ${response.status}`);

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Error al enviar el formulario de contacto:", error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex w-full flex-col items-center justify-center gap-2 rounded-2xl border border-primary/30 bg-primary/10 px-6 py-16 text-center"
      >
        <p className="text-lg font-semibold">¡Gracias por escribirnos!</p>
        <p className="text-sm text-muted-foreground">
          Recibimos tu consulta. Te contactamos a la brevedad.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-5 rounded-2xl border border-border/70 bg-card/60 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Nombre</Label>
          <Input id="name" name="name" autoComplete="name" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="company">Empresa</Label>
          <Input id="company" name="company" autoComplete="organization" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Correo</Label>
          <Input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Teléfono</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="challenge">
          ¿Cuál es el principal desafío de tu negocio hoy?
        </Label>
        <Textarea id="challenge" name="challenge" rows={4} required />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden />
          <p>
            No pudimos enviar tu consulta. Volvé a intentarlo o escribinos
            directamente a{" "}
            <a href="mailto:hola@aggility.io" className="underline">
              hola@aggility.io
            </a>
            .
          </p>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="h-11 px-6 text-base"
      >
        {status === "submitting" && (
          <LoaderCircle className="size-4 animate-spin" aria-hidden />
        )}
        {CTA_PRIMARY}
      </Button>
    </form>
  );
}

export function ClosingContactSection() {
  return (
    <section id={CONTACT_SECTION_ID} className="relative overflow-hidden py-20 sm:py-28">
      <Atmosphere />
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="flex flex-col gap-6">
          <Eyebrow>Hablemos</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            ¿Listo para dejar atrás lo que te frena?
          </h2>
          <p className="text-lg text-muted-foreground">
            Contanos tu principal desafío y te mostramos por dónde empezar. Sin
            compromiso: un diagnóstico estratégico para ver qué se puede
            resolver de raíz.
          </p>
          <a
            href="mailto:hola@aggility.io"
            className="w-fit text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            hola@aggility.io
          </a>
        </div>

        <ContactForm />
      </Container>
    </section>
  );
}
