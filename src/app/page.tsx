import Link from "next/link";
import { ShieldCheck, Stethoscope, GraduationCap, HeartPulse, ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { CallToAction } from "@/components/sections/cta";
import { Newsletter } from "@/components/sections/newsletter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { specialties } from "@/lib/specialties";
import { getAllBlogPosts } from "@/lib/blog";

export default function HomePage() {
  const featured = specialties.slice(0, 6);
  const posts = getAllBlogPosts().slice(0, 3);

  return (
    <>
      <Hero
        eyebrow="Urología y andrología en Temuco"
        title="Atención urológica de excelencia, cercana y basada en evidencia"
        description="El Dr. Cristóbal Betancourt ofrece diagnóstico y tratamiento especializado en cirugía genital, andrología y cirugía reconstructiva uretral, con un enfoque claro y humano para cada paciente."
      >
        <Button asChild size="lg">
          <Link href="/agenda">Agendar hora</Link>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <Link href="/sobre-el-doctor">Conocer al Dr. Betancourt</Link>
        </Button>
      </Hero>

      <section className="border-y border-slate-100 bg-white py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:grid-cols-4 lg:px-8">
          {[
            { icon: ShieldCheck, label: "Atención certificada" },
            { icon: Stethoscope, label: "Cirugía de alta especialidad" },
            { icon: GraduationCap, label: "Formación reconstructiva uretral" },
            { icon: HeartPulse, label: "Enfoque centrado en el paciente" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2 text-center">
              <item.icon className="h-7 w-7 text-brand-blue" />
              <p className="text-xs font-medium text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-green">
                Especialidades
              </p>
              <h2 className="mt-1 text-2xl font-bold text-brand-blue-dark sm:text-3xl">
                Áreas de atención
              </h2>
            </div>
            <Link
              href="/especialidades"
              className="hidden items-center gap-1 text-sm font-semibold text-brand-blue hover:underline sm:flex"
            >
              Ver todas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((s) => (
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
      </section>

      <section className="bg-brand-gray py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-green">
                Sobre el Dr. Betancourt
              </p>
              <h2 className="mt-1 text-2xl font-bold text-brand-blue-dark sm:text-3xl">
                Especialista en urología, andrología y cirugía reconstructiva uretral
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Con formación de subespecialidad en cirugía reconstructiva uretral, el Dr.
                Betancourt combina rigor técnico con una comunicación clara y empática,
                acompañando a cada paciente desde el diagnóstico hasta la recuperación completa.
              </p>
              <Button asChild className="mt-6">
                <Link href="/sobre-el-doctor">Conocer su trayectoria</Link>
              </Button>
            </div>
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-brand-blue-light to-white" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-green">
                Biblioteca educativa
              </p>
              <h2 className="mt-1 text-2xl font-bold text-brand-blue-dark sm:text-3xl">
                Últimos artículos
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden items-center gap-1 text-sm font-semibold text-brand-blue hover:underline sm:flex"
            >
              Ver blog <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.frontmatter.slug}>
                <CardHeader>
                  <p className="mb-2 text-xs font-semibold uppercase text-brand-green">
                    {post.frontmatter.category}
                  </p>
                  <CardTitle className="text-base">{post.frontmatter.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-sm text-slate-600">{post.frontmatter.metaDescription}</p>
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
        </div>
      </section>

      <CallToAction />
      <Newsletter />
    </>
  );
}
