import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CallToAction } from "@/components/sections/cta";
import { libraryCategories, getLibraryTopic } from "@/lib/library";

export function generateStaticParams() {
  return libraryCategories.flatMap((c) =>
    c.topics.map((t) => ({ categoria: c.slug, tema: t.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string; tema: string }>;
}): Promise<Metadata> {
  const { categoria, tema } = await params;
  const result = getLibraryTopic(categoria, tema);
  if (!result) return {};
  const { category, topic } = result;
  return {
    title: topic.title,
    description: topic.summary,
    alternates: { canonical: `/biblioteca-educativa/${category.slug}/${topic.slug}` },
  };
}

export default async function LibraryTopicPage({
  params,
}: {
  params: Promise<{ categoria: string; tema: string }>;
}) {
  const { categoria, tema } = await params;
  const result = getLibraryTopic(categoria, tema);
  if (!result) notFound();
  const { category, topic } = result;

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Biblioteca educativa", href: "/biblioteca-educativa" },
          { label: category.name, href: `/biblioteca-educativa/${category.slug}` },
          { label: topic.title },
        ]}
      />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wide text-brand-blue">
            {category.name}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">{topic.title}</h1>
          <div className="mt-8 space-y-5 text-slate-700">
            {topic.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href={`/biblioteca-educativa/${category.slug}`}
              className="text-sm font-medium text-brand-blue hover:underline"
            >
              ← Volver a {category.name}
            </Link>
          </div>
        </div>
      </section>
      <CallToAction
        title="¿Tienes dudas sobre este tema?"
        description="Agenda una consulta con el Dr. Cristóbal Bettancourt y recibe una evaluación personalizada."
      />
    </>
  );
}
