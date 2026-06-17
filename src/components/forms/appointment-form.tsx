"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { appointmentSchema } from "@/lib/validation";

export function AppointmentForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      nombre: formData.get("nombre"),
      edad: formData.get("edad"),
      motivo: formData.get("motivo"),
      telefono: formData.get("telefono"),
      correo: formData.get("correo"),
    };

    const parsed = appointmentSchema.safeParse(data);
    if (!parsed.success) {
      setStatus("error");
      setErrorMessage(parsed.error.issues[0]?.message ?? "Revisa los datos ingresados");
      return;
    }

    try {
      const res = await fetch("/api/agenda", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => null);
        setStatus("error");
        setErrorMessage(json?.error ?? "No se pudo enviar la solicitud");
        return;
      }
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
      setErrorMessage("No se pudo enviar la solicitud. Intenta nuevamente.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="nombre">Nombre</Label>
          <Input id="nombre" name="nombre" required minLength={2} maxLength={100} />
        </div>
        <div>
          <Label htmlFor="edad">Edad</Label>
          <Input id="edad" name="edad" type="number" required min={0} max={120} />
        </div>
      </div>
      <div>
        <Label htmlFor="motivo">Motivo de consulta</Label>
        <Textarea id="motivo" name="motivo" required minLength={5} maxLength={1000} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="telefono">Teléfono</Label>
          <Input id="telefono" name="telefono" type="tel" required maxLength={20} />
        </div>
        <div>
          <Label htmlFor="correo">Correo</Label>
          <Input id="correo" name="correo" type="email" required maxLength={150} />
        </div>
      </div>

      {status === "error" && (
        <Alert variant="destructive">
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}
      {status === "success" && (
        <Alert variant="success">
          <AlertDescription>
            Tu solicitud fue enviada. Nos pondremos en contacto para confirmar tu hora.
          </AlertDescription>
        </Alert>
      )}

      <Button type="submit" disabled={status === "loading"} className="w-full">
        {status === "loading" ? "Enviando..." : "Solicitar hora"}
      </Button>
    </form>
  );
}
