import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para consultas generales. Dr. Cristóbal Betancourt, urólogo en Temuco, Av. Alemania 0671, Of. 502.",
  alternates: { canonical: "/contacto" },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Contacto" }]} />
      <Hero
        eyebrow="Estamos aquí para ayudarte"
        title="Contacto"
        description="Escríbenos tus consultas generales. Si deseas agendar una hora, utiliza nuestro formulario de agenda."
      />
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="mb-6 text-xl font-bold text-brand-blue-dark">Información de contacto</h2>
            <ul className="space-y-5 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                <span>
                  {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality},{" "}
                  {siteConfig.address.addressRegion}, Chile
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-brand-blue" />
                <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-brand-blue" />
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                <span>
                  {siteConfig.hours.map((h) => (
                    <span key={h.day} className="block">
                      {h.day}: {h.hours}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
            <div className="mt-8 aspect-video rounded-2xl bg-gradient-to-br from-brand-blue-light to-white" />
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 sm:p-8">
            <h2 className="mb-6 text-xl font-bold text-brand-blue-dark">Envíanos un mensaje</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
