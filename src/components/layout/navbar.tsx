"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, CalendarDays } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { specialties } from "@/lib/specialties";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = Array.from(new Set(specialties.map((s) => s.category)));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-brand-blue-dark">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white text-sm">
            CB
          </span>
          <span className="hidden text-sm leading-tight sm:block">
            Dr. Cristóbal Betancourt
            <span className="block text-xs font-normal text-slate-500">
              Urólogo · Temuco
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegación principal">
          <Link href="/" className="text-sm font-medium text-slate-700 hover:text-brand-blue">
            Inicio
          </Link>
          <Link
            href="/sobre-el-doctor"
            className="text-sm font-medium text-slate-700 hover:text-brand-blue"
          >
            Sobre el Doctor
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-brand-blue"
              aria-expanded={megaOpen}
              aria-haspopup="true"
              onClick={() => setMegaOpen((v) => !v)}
            >
              Especialidades
              <ChevronDown className={cn("h-4 w-4 transition-transform", megaOpen && "rotate-180")} />
            </button>
            {megaOpen && (
              <div className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  {categories.map((category) => (
                    <div key={category}>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-green">
                        {category}
                      </p>
                      <ul className="space-y-1.5">
                        {specialties
                          .filter((s) => s.category === category)
                          .map((s) => (
                            <li key={s.slug}>
                              <Link
                                href={`/especialidades/${s.slug}`}
                                className="text-sm text-slate-700 hover:text-brand-blue"
                              >
                                {s.name}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-4 border-t border-slate-100 pt-4">
                  <Link
                    href="/especialidades"
                    className="text-sm font-semibold text-brand-blue hover:underline"
                  >
                    Ver todas las especialidades →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/biblioteca-educativa"
            className="text-sm font-medium text-slate-700 hover:text-brand-blue"
          >
            Biblioteca educativa
          </Link>
          <Link href="/blog" className="text-sm font-medium text-slate-700 hover:text-brand-blue">
            Blog
          </Link>
          <Link
            href="/preguntas-frecuentes"
            className="text-sm font-medium text-slate-700 hover:text-brand-blue"
          >
            FAQ
          </Link>
          <Link href="/contacto" className="text-sm font-medium text-slate-700 hover:text-brand-blue">
            Contacto
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-brand-blue"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <Button asChild size="default">
            <Link href="/agenda">
              <CalendarDays className="h-4 w-4" />
              Agendar hora
            </Link>
          </Button>
        </div>

        <button
          className="rounded-md p-2 text-slate-700 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden" aria-label="Navegación móvil">
          <ul className="space-y-3">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-sm font-medium text-slate-700"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Button asChild className="w-full">
                <Link href="/agenda" onClick={() => setOpen(false)}>
                  Agendar hora
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
