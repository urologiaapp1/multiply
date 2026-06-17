import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BookOpen, ChevronRight } from "lucide-react";
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
            {category.topics.map((topic) => (
              <li key={topic.slug}>
                <Link
                  href={`/biblioteca-educativa/${category.slug}/${topic.slug}`}
                  className="flex items-start justify-between gap-3 rounded-xl border border-slate-200 p-4 transition hover:border-brand-blue hover:bg-slate-50"
                >
                  <span className="flex items-start gap-3">
                    <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                    <span>
                      <span className="block font-medium text-slate-900">{topic.title}</span>
                      <span className="block text-sm text-slate-500">{topic.summary}</span>
                    </span>
                  </span>
                  <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-slate-400" />
                </Link>
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
