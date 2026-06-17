# Dr. Cristóbal Betancourt — Urólogo en Temuco

Sitio web institucional para el Dr. Cristóbal Betancourt, urólogo especializado
en cirugía genital, andrología, infertilidad masculina y cirugía
reconstructiva uretral, en Temuco, Chile.

## Stack tecnológico

- **Next.js 16** (App Router, React Server Components)
- **TypeScript**
- **Tailwind CSS v4**
- Componentes propios estilo **shadcn/ui** (Radix UI + class-variance-authority)
- **MDX** para el blog (`next-mdx-remote`)
- **Zod** para validación de formularios
- **Resend** para el envío de correos de contacto/agenda
- **Framer Motion** disponible para animaciones puntuales
- **Lucide React** para iconografía

## Estructura del proyecto

```
content/blog/              Artículos del blog en MDX (frontmatter + contenido)
public/images/              Activos de imagen (ver IMAGE_PROMPTS.md)
src/
  app/                       Rutas (App Router)
    especialidades/[slug]/   Página dinámica de cada especialidad
    biblioteca-educativa/    Biblioteca por categorías
    blog/[slug]/             Artículos del blog
    contacto/, agenda/       Formularios
    api/                     Route handlers (contacto, agenda, newsletter)
    robots.ts, sitemap.ts    SEO técnico
  components/
    ui/                      Componentes base reutilizables (botón, card, etc.)
    layout/                  Navbar, Footer, Breadcrumb
    sections/                Hero, CTA, FAQ, Timeline, Newsletter
    seo/                     JSON-LD (MedicalOrganization, Physician, FAQ, Breadcrumb, Article)
    forms/                   Formularios de contacto y agenda
  lib/
    site.ts                  Configuración central del sitio (datos de contacto, nav, etc.)
    specialties.ts            Contenido completo de las 17 especialidades
    library.ts                 Categorías de la biblioteca educativa
    blog.ts                    Helpers de lectura de MDX
    validation.ts               Esquemas Zod
    rate-limit.ts                Rate limiting en memoria para las API routes
    sanitize.ts                   Escape de HTML para los correos
```

## Páginas principales

- Inicio
- Sobre el Doctor
- Especialidades (listado + 17 páginas individuales, cada una con resumen,
  indicaciones, síntomas, diagnóstico, tratamiento, beneficios, riesgos,
  recuperación, FAQ y CTA de agenda)
- Biblioteca educativa (9 categorías)
- Blog (arquitectura MDX, lista para cientos de artículos)
- Preguntas frecuentes (generales + agregadas por especialidad)
- Contacto y Agenda (formularios con validación y envío por correo)

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Variables de entorno

Copia `.env.example` a `.env.local` y completa:

```
RESEND_API_KEY=        # API key de https://resend.com para enviar los formularios
NEXT_PUBLIC_GA_ID=      # ID de Google Analytics (opcional)
```

Sin `RESEND_API_KEY`, los formularios de contacto y agenda devuelven un error
controlado (503) en lugar de fallar silenciosamente.

## Imágenes

El sitio no utiliza imágenes de stock. En `IMAGE_PROMPTS.md` están todos los
prompts necesarios para generar las ilustraciones médicas con IA (estilo
vectorial, minimalista, institucional, sin contenido explícito), junto con
la ruta exacta donde debe guardarse cada archivo en `public/images/`.

## Seguridad

- Headers de seguridad (CSP, X-Frame-Options, etc.) configurados en
  `next.config.ts`.
- Validación de datos con Zod tanto en cliente como en servidor.
- Sanitización (escape de HTML) del contenido de los formularios antes de
  incluirlo en los correos enviados.
- Rate limiting básico en memoria por IP en las API routes (`/api/contacto`,
  `/api/agenda`, `/api/newsletter`). Para producción en un entorno serverless
  con múltiples instancias, se recomienda migrar a un rate limiter
  distribuido (ej. Upstash Redis) si el tráfico lo justifica.

## SEO

- `robots.ts` y `sitemap.ts` generados dinámicamente a partir de las
  especialidades, categorías de biblioteca y artículos del blog.
- Metadata (title, description, canonical, Open Graph, Twitter Cards) en
  cada página.
- JSON-LD: `MedicalClinic`, `Physician`, `FAQPage`, `BreadcrumbList` y
  `MedicalWebPage`/`Article` en los artículos del blog.
- Contenido optimizado para búsquedas locales: "urólogo Temuco", "vasectomía
  Temuco", "uretroplastía Chile", etc.

## Despliegue en Vercel

1. Conecta el repositorio en [vercel.com](https://vercel.com).
2. Configura las variables de entorno (`RESEND_API_KEY`, `NEXT_PUBLIC_GA_ID`).
3. Despliega — no se requiere configuración adicional.

## Próximas integraciones previstas

- Sistema de agenda en línea con calendario de disponibilidad real.
- Chatbot con IA para preguntas frecuentes.
- Portal de pacientes (resultados, indicaciones, recordatorios).
- Cursos o contenido educativo en video.
