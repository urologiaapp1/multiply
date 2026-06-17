import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { AppointmentForm } from "@/components/forms/appointment-form";
import { Timeline } from "@/components/sections/timeline";

export const metadata: Metadata = {
  title: "Agenda tu hora",
  description:
    "Solicita tu hora de consulta con el Dr. Cristóbal Betancourt, urólogo en Temuco. Respuesta de confirmación en menos de 24 horas hábiles.",
  alternates: { canonical: "/agenda" },
};

const steps = [
  {
    title: "Completa el formulario",
    description: "Indícanos tus datos de contacto y el motivo de tu consulta.",
  },
  {
    title: "Confirmación",
    description: "Nuestro equipo te contactará para confirmar día y hora disponibles.",
  },
  {
    title: "Tu consulta",
    description: "Acude a tu cita en nuestra dirección en Temuco, con cédula de identidad.",
  },
];

export default function AgendaPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Agenda" }]} />
      <Hero
        eyebrow="Reserva tu hora"
        title="Agenda tu consulta"
        description="Completa el formulario y nuestro equipo te contactará para confirmar tu hora a la brevedad."
      />
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="mb-8 text-xl font-bold text-brand-blue-dark">¿Cómo funciona?</h2>
            <Timeline steps={steps} />
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 sm:p-8">
            <h2 className="mb-6 text-xl font-bold text-brand-blue-dark">Formulario de agenda</h2>
            <AppointmentForm />
          </div>
        </div>
      </section>
    </>
  );
}
