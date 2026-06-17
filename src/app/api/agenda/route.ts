import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { appointmentSchema } from "@/lib/validation";
import { isRateLimited } from "@/lib/rate-limit";
import { escapeHtml } from "@/lib/sanitize";
import { siteConfig } from "@/lib/site";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  if (isRateLimited(`agenda:${ip}`)) {
    return NextResponse.json(
      { error: "Demasiadas solicitudes. Intenta nuevamente en un minuto." },
      { status: 429 }
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = appointmentSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Datos inválidos" },
      { status: 400 }
    );
  }

  const { nombre, edad, motivo, telefono, correo } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY no configurada");
    return NextResponse.json({ error: "Servicio no disponible temporalmente" }, { status: 503 });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: `Sitio web <notificaciones@${new URL(siteConfig.url).hostname}>`,
      to: siteConfig.email,
      replyTo: correo,
      subject: `Nueva solicitud de hora — ${nombre}`,
      html: `
        <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
        <p><strong>Edad:</strong> ${edad}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(telefono)}</p>
        <p><strong>Correo:</strong> ${escapeHtml(correo)}</p>
        <p><strong>Motivo de consulta:</strong></p>
        <p>${escapeHtml(motivo).replace(/\n/g, "<br>")}</p>
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error enviando solicitud de agenda", error);
    return NextResponse.json({ error: "No se pudo enviar la solicitud" }, { status: 500 });
  }
}
