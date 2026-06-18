import Link from "next/link";
import { MessageCircle, Mail, MapPin, AtSign, Link2 } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { specialties } from "@/lib/specialties";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-brand-blue-dark text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="text-lg font-bold text-white">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-slate-300">
            Urólogo en Temuco especializado en cirugía genital, andrología y reconstrucción
            uretral.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={siteConfig.social.instagram}
              aria-label="Instagram"
              className="rounded-full bg-white/10 p-2 hover:bg-white/20"
            >
              <AtSign className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              aria-label="LinkedIn"
              className="rounded-full bg-white/10 p-2 hover:bg-white/20"
            >
              <Link2 className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-white">Especialidades</p>
          <ul className="space-y-2 text-sm">
            {specialties.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/especialidades/${s.slug}`} className="hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/especialidades" className="font-medium text-white hover:underline">
                Ver todas →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-white">Navegación</p>
          <ul className="space-y-2 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/agenda" className="hover:text-white">
                Agenda
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-white">Contacto</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality},{" "}
                {siteConfig.address.addressRegion}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 shrink-0" />
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-slate-400">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados. La
          información de este sitio es de carácter educativo y no reemplaza una consulta médica
          presencial.
        </p>
      </div>
    </footer>
  );
}
