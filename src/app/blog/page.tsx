import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Clock } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos sobre urología, andrología, fertilidad masculina y cirugía reconstructiva uretral, escritos por el Dr. Cristóbal Bettancourt.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <Breadcrumb items={[{ label: "Blog" }]} />
      <Hero
        eyebrow="Educación médica"
        title="Blog"
        description="Artículos escritos para acompañarte a entender tu salud urológica con información clara y actualizada."
      />
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {posts.map((post) => (
            <Card key={post.frontmatter.slug}>
              <CardHeader>
                <Badge className="mb-2 w-fit">{post.frontmatter.category}</Badge>
                <CardTitle className="text-base">{post.frontmatter.title}</CardTitle>
                <CardDescription>{post.frontmatter.metaDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-3 flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readingTime}
                </div>
                <Link
                  href={`/blog/${post.frontmatter.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:underline"
                >
                  Leer artículo <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
