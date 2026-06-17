import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CallToAction } from "@/components/sections/cta";
import { specialties } from "@/lib/specialties";

export const metadata: Metadata = {
  title: "Especialidades",
  description:
    "Cirugía genital, andrología, infertilidad masculina y cirugía reconstructiva uretral. Conoce todas las áreas de atención del Dr. Cristóbal Betancourt en Temuco.",
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
        description="Diagnóstico y tratamiento integral en cirugía genital, andrología, infertilidad masculina y cirugía reconstructiva uretral."
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl space-y-12 px-4 lg:px-8">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="mb-6 text-xl font-bold text-brand-blue-dark">{category}</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {specialties
                  .filter((s) => s.category === category)
                  .map((s) => (
                    <Card key={s.slug}>
                      <CardHeader>
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
          ))}
        </div>
      </section>
      <CallToAction />
    </>
  );
}
