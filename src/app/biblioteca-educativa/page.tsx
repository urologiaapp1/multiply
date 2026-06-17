import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { libraryCategories } from "@/lib/library";

export const metadata: Metadata = {
  title: "Biblioteca Educativa",
  description:
    "Biblioteca educativa sobre salud urológica y andrológica: próstata, pene, testículo, escroto, infertilidad, cirugía y prevención.",
  alternates: { canonical: "/biblioteca-educativa" },
};

export default function LibraryPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Biblioteca educativa" }]} />
      <Hero
        eyebrow="Educación al paciente"
        title="Biblioteca educativa"
        description="Contenido organizado por categorías para que comprendas tu salud urológica con información clara y confiable."
      />
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {libraryCategories.map((cat) => (
            <Card key={cat.slug}>
              <CardHeader>
                <CardTitle>{cat.name}</CardTitle>
                <CardDescription>{cat.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href={`/biblioteca-educativa/${cat.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:underline"
                >
                  Explorar <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
