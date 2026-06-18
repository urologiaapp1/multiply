import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  AlertTriangle,
  Stethoscope,
  Sparkles,
  ShieldAlert,
  Clock,
} from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CallToAction } from "@/components/sections/cta";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FaqJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { specialties, getSpecialtyBySlug } from "@/lib/specialties";
import { siteConfig } from "@/lib/site";
import { categoryIcons, categoryAccents } from "@/lib/category-style";

export function generateStaticParams() {
  return specialties.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const specialty = getSpecialtyBySlug(slug);
  if (!specialty) return {};
  return {
    title: specialty.seoTitle,
    description: specialty.seoDescription,
    keywords: specialty.keywords,
    alternates: { canonical: `/especialidades/${specialty.slug}` },
    openGraph: {
      title: specialty.seoTitle,
      description: specialty.seoDescription,
    },
  };
}

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof CheckCircle2;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-slate-100 py-8 last:border-0">
      <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-brand-blue-dark">
        <Icon className="h-5 w-5 text-brand-blue" />
        {title}
      </h2>
      {children}
    </div>
  );
}

export default async function SpecialtyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const specialty = getSpecialtyBySlug(slug);
  if (!specialty) notFound();

  const pageUrl = `${siteConfig.url}/especialidades/${specialty.slug}`;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: siteConfig.url },
          { name: "Especialidades", url: `${siteConfig.url}/especialidades` },
          { name: specialty.name, url: pageUrl },
        ]}
      />
      <FaqJsonLd faqs={specialty.faqs} />
      <Breadcrumb
        items={[
          { label: "Especialidades", href: "/especialidades" },
          { label: specialty.name },
        ]}
      />
      <Hero
        eyebrow={specialty.category}
        title={specialty.name}
        description={specialty.shortDescription}
        icon={categoryIcons[specialty.category]}
        iconAccent={categoryAccents[specialty.category]}
      />

      <article className="prose-medical mx-auto max-w-3xl px-4 py-12 lg:px-0">
        <Section icon={Sparkles} title="Resumen">
          <p>{specialty.resumen}</p>
        </Section>

        <Section icon={CheckCircle2} title="Indicaciones">
          <ul>
            {specialty.indicaciones.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section icon={AlertTriangle} title="Síntomas">
          <ul>
            {specialty.sintomas.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section icon={Stethoscope} title="Diagnóstico">
          <ul>
            {specialty.diagnostico.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section icon={Stethoscope} title="Tratamiento">
          <ul>
            {specialty.tratamiento.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section icon={CheckCircle2} title="Beneficios">
          <ul>
            {specialty.beneficios.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section icon={ShieldAlert} title="Riesgos">
          <Alert variant="warning">
            <AlertTitle>Información importante</AlertTitle>
            <AlertDescription>
              Todo procedimiento médico conlleva riesgos. Estos se evalúan de forma
              individualizada en la consulta.
            </AlertDescription>
          </Alert>
          <ul className="mt-4">
            {specialty.riesgos.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section icon={Clock} title="Recuperación">
          <p>{specialty.recuperacion}</p>
        </Section>

        <Section icon={Sparkles} title="Preguntas frecuentes">
          <FaqAccordion faqs={specialty.faqs} idPrefix={specialty.slug} />
        </Section>
      </article>

      <CallToAction
        title={`¿Tienes dudas sobre ${specialty.name.toLowerCase()}?`}
        description="Agenda una consulta y recibe una evaluación personalizada con el Dr. Cristóbal Bettancourt."
      />
    </>
  );
}
