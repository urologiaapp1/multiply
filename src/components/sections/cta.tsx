import Link from "next/link";
import { CalendarDays, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function CallToAction({
  title = "¿Listo para agendar tu consulta?",
  description = "Recibe una atención cercana, clara y basada en evidencia médica. Agenda tu hora en pocos minutos.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-brand-blue-dark py-14">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="max-w-2xl text-slate-200">{description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" variant="green">
            <Link href="/agenda">
              <CalendarDays className="h-4 w-4" />
              Agendar hora
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="bg-transparent text-white border-white hover:bg-white/10">
            <a href={siteConfig.phoneHref}>
              <Phone className="h-4 w-4" />
              Llamar a la clínica
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
