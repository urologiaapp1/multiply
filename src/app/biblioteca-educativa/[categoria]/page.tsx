import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookOpen } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { libraryCategories, getLibraryCategoryBySlug } from "@/lib/library";

export function generateStaticParams() {
  return libraryCategories.map((c) => ({ categoria: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string }>;
}): Promise<Metadata> {
  const { categoria } = await params;
  const category = getLibraryCategoryBySlug(categoria);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: `/biblioteca-educativa/${category.slug}` },
  };
}

export default async function LibraryCategoryPage({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  const category = getLibraryCategoryBySlug(categoria);
  if (!category) notFound();

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Biblioteca educativa", href: "/biblioteca-educativa" },
          { label: category.name },
        ]}
      />
      <Hero eyebrow="Biblioteca educativa" title={category.name} description={category.description} />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <ul className="space-y-4">
            {category.topics.map((topic, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-slate-200 p-4"
              >
                <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                <span className="text-slate-700">{topic}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-slate-500">
            Estamos ampliando continuamente esta biblioteca. Si tienes una pregunta específica
            sobre {category.name.toLowerCase()}, puedes consultarla directamente en tu próxima
            cita.
          </p>
        </div>
      </section>
    </>
  );
}
