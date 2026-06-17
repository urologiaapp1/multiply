import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CallToAction } from "@/components/sections/cta";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { FaqJsonLd } from "@/components/seo/json-ld";
import { specialties } from "@/lib/specialties";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description:
    "Respuestas a las preguntas más frecuentes sobre vasectomía, circuncisión, disfunción eréctil, infertilidad masculina y cirugía reconstructiva uretral.",
  alternates: { canonical: "/preguntas-frecuentes" },
};

const generalFaqs = [
  {
    question: "¿Necesito una orden médica para mi primera consulta?",
    answer:
      "No es necesaria una orden previa. Puedes agendar directamente tu primera consulta a través del formulario de agenda o por teléfono.",
  },
  {
    question: "¿Atienden con convenios de salud o seguros?",
    answer:
      "Trabajamos con boleta de honorarios para reembolso en Isapre o Fonasa en modalidad de libre elección. Consulta condiciones específicas al agendar.",
  },
  {
    question: "¿Puedo acudir acompañado a la consulta?",
    answer:
      "Por supuesto. Entendemos que muchas decisiones se toman en pareja o en familia, y siempre son bienvenidos.",
  },
  {
    question: "¿Cómo me preparo para una cirugía ambulatoria?",
    answer:
      "Recibirás indicaciones preoperatorias específicas según el procedimiento, que generalmente incluyen ayuno si corresponde, higiene local y suspensión de ciertos medicamentos.",
  },
];

export default function FaqPage() {
  const allFaqs = [
    ...generalFaqs,
    ...specialties.flatMap((s) => s.faqs.map((f) => ({ ...f, category: s.name }))),
  ];

  return (
    <>
      <FaqJsonLd faqs={allFaqs} />
      <Breadcrumb items={[{ label: "Preguntas frecuentes" }]} />
      <Hero
        eyebrow="Resolvemos tus dudas"
        title="Preguntas frecuentes"
        description="Encuentra respuestas claras sobre nuestras especialidades, procedimientos y modalidad de atención."
      />

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="mb-4 text-xl font-bold text-brand-blue-dark">Preguntas generales</h2>
          <FaqAccordion faqs={generalFaqs} idPrefix="general" />

          <h2 className="mb-4 mt-12 text-xl font-bold text-brand-blue-dark">
            Por especialidad
          </h2>
          <div className="space-y-10">
            {specialties.map((s) => (
              <div key={s.slug}>
                <h3 className="mb-2 text-base font-semibold text-brand-blue">{s.name}</h3>
                <FaqAccordion faqs={s.faqs} idPrefix={s.slug} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
