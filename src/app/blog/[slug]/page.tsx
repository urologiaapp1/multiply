import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock, CalendarDays, User } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CallToAction } from "@/components/sections/cta";
import { ArticleJsonLd, FaqJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { getAllBlogSlugs, getBlogPost } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = getBlogPost(slug);
    return {
      title: post.frontmatter.title,
      description: post.frontmatter.metaDescription,
      alternates: { canonical: `/blog/${post.frontmatter.slug}` },
      openGraph: {
        type: "article",
        title: post.frontmatter.title,
        description: post.frontmatter.metaDescription,
        publishedTime: post.frontmatter.date,
      },
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post;
  try {
    post = getBlogPost(slug);
  } catch {
    notFound();
  }
  if (!post) notFound();

  const pageUrl = `${siteConfig.url}/blog/${post.frontmatter.slug}`;

  return (
    <>
      <ArticleJsonLd
        title={post.frontmatter.title}
        description={post.frontmatter.metaDescription}
        datePublished={post.frontmatter.date}
        author={post.frontmatter.author}
        url={pageUrl}
      />
      <FaqJsonLd faqs={post.frontmatter.faqs ?? []} />
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog` },
          { name: post.frontmatter.title, url: pageUrl },
        ]}
      />
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: post.frontmatter.title }]} />

      <article className="mx-auto max-w-3xl px-4 py-12 lg:px-0">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-green">
          {post.frontmatter.category}
        </p>
        <h1 className="text-3xl font-bold leading-tight text-brand-blue-dark sm:text-4xl">
          {post.frontmatter.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <User className="h-4 w-4" /> {post.frontmatter.author}
          </span>
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4" />
            {new Date(post.frontmatter.date).toLocaleDateString("es-CL", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" /> {post.readingTime}
          </span>
        </div>

        <div className="prose-medical mt-10">
          <MDXRemote source={post.content} />
        </div>

        {post.frontmatter.faqs?.length > 0 && (
          <div className="mt-12 border-t border-slate-100 pt-8">
            <h2 className="mb-4 text-xl font-bold text-brand-blue-dark">Preguntas frecuentes</h2>
            <FaqAccordion faqs={post.frontmatter.faqs} idPrefix={post.frontmatter.slug} />
          </div>
        )}

        {post.frontmatter.sources?.length > 0 && (
          <div className="mt-10 border-t border-slate-100 pt-6">
            <h3 className="mb-2 text-sm font-semibold text-slate-500">Fuentes</h3>
            <ul className="space-y-1 text-xs text-slate-400">
              {post.frontmatter.sources.map((source, i) => (
                <li key={i}>{source}</li>
              ))}
            </ul>
          </div>
        )}
      </article>

      <CallToAction />
    </>
  );
}
