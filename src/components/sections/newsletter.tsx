"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const email = new FormData(e.currentTarget).get("email");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="border-t border-slate-200 bg-brand-gray py-12">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="text-xl font-bold text-brand-blue-dark">
          Recibe contenido educativo en tu correo
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Artículos sobre salud urológica y andrológica, sin spam.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Input
            type="email"
            name="email"
            required
            placeholder="tu@correo.com"
            aria-label="Correo electrónico"
            className="sm:w-72"
          />
          <Button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Enviando..." : "Suscribirme"}
          </Button>
        </form>
        {status === "success" && (
          <p className="mt-3 text-sm text-brand-green">¡Listo! Revisa tu correo para confirmar.</p>
        )}
        {status === "error" && (
          <p className="mt-3 text-sm text-red-600">Hubo un problema. Intenta nuevamente.</p>
        )}
      </div>
    </section>
  );
}
