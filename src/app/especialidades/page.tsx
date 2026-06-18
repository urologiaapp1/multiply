import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Stethoscope } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CallToAction } from "@/components/sections/cta";
import { specialties, getSpecialtyBySlug } from "@/lib/specialties";
import { categoryIcons, categoryAccents } from "@/lib/category-style";

const prostateSlugs = ["hiperplasia-prostatica-benigna", "cancer-de-prostata", "rezum", "holep"];
const prostateTopics = prostateSlugs
  .map((slug) => getSpecialtyBySlug(slug))
  .filter((s): s is NonNullable<typeof s> => Boolean(s));

export const metadata: Metadata = {
  title: "Especialidades",
  description:
    "Cirugía genital, andrología, infertilidad masculina, cirugía reconstructiva uretral y urología general (próstata, cálculos renales, incontinencia). Conoce todas las áreas de atención del Dr. Cristóbal Bettancourt en Temuco.",
  alternates: { canonical: "/especialidades" },
};

const categories = Array.from(new Set(specialties.map((s) => s.category)));

export default function SpecialtiesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Especialidades" }]} />
      <Hero
        eyebrow="Áreas de atención"
        title="Especialidades"
        description="Diagnóstico y tratamiento integral en cirugía genital, andrología, infertilidad masculina, cirugía reconstructiva uretral y urología general."
      />
      <section className="bg-brand-gray py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-green">
            Tema destacado
          </p>
          <h2 className="mt-1 text-2xl font-bold text-brand-blue-dark">Próstata</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Una de las áreas con mayor volumen de consultas: desde el crecimiento benigno y el
            cáncer de próstata, hasta las dos alternativas quirúrgicas mínimamente invasivas más
            modernas para tratar la próstata aumentada, Rezum y HoLEP.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {prostateTopics.map((s) => (
              <Card key={s.slug}>
                <CardHeader>
                  <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10">
                    <Stethoscope className="h-5 w-5 text-brand-blue" />
                  </span>
                  <CardTitle>{s.name}</CardTitle>
                  <CardDescription>{s.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={`/especialidades/${s.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:underline"
                  >
                    Saber más <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl space-y-12 px-4 lg:px-8">
          {categories.map((category) => {
            const Icon = categoryIcons[category];
            const accent = categoryAccents[category];
            return (
              <div key={category}>
                <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-brand-blue-dark">
                  <span className={`flex h-8 w-8 items-center justify-center rounded-full ${accent.bg}`}>
                    <Icon className={`h-4 w-4 ${accent.text}`} />
                  </span>
                  {category}
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {specialties
                    .filter((s) => s.category === category)
                    .map((s) => (
                      <Card key={s.slug}>
                        <CardHeader>
                          <span
                            className={`mb-2 flex h-10 w-10 items-center justify-center rounded-full ${accent.bg}`}
                          >
                            <Icon className={`h-5 w-5 ${accent.text}`} />
                          </span>
                          <CardTitle>{s.name}</CardTitle>
                          <CardDescription>{s.shortDescription}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Link
                            href={`/especialidades/${s.slug}`}
                            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:underline"
                          >
                            Saber más <ArrowRight className="h-4 w-4" />
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <CallToAction />
    </>
  );
}
