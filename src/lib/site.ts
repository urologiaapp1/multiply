export const siteConfig = {
  name: "Dr. Cristóbal Bettancourt",
  shortName: "Dr. Bettancourt Urología",
  title: "Dr. Cristóbal Bettancourt | Urólogo en Temuco",
  description:
    "Urólogo en Temuco especializado en cirugía genital, vasectomía, circuncisión, andrología y cirugía reconstructiva uretral. Atención médica de excelencia, cercana y basada en evidencia.",
  url: "https://www.drbetancourturologia.cl",
  locale: "es_CL",
  phone: "+56 9 3002 6395",
  phoneHref: "https://wa.me/56930026395",
  whatsapp: "https://wa.me/56930026395",
  email: "cabettancourt@uc.cl",
  address: {
    streetAddress: "Gabriela Mistral 01955",
    addressLocality: "Temuco",
    addressRegion: "Araucanía",
    postalCode: "4780000",
    addressCountry: "CL",
  },
  geo: {
    latitude: -38.7359,
    longitude: -72.5904,
  },
  hours: [
    { day: "Lunes a viernes", hours: "09:00 – 18:30" },
    { day: "Sábado", hours: "09:00 – 13:00 (previa cita)" },
  ],
  social: {
    instagram: "https://instagram.com/drbetancourturologia",
    linkedin: "https://linkedin.com/in/cristobal-betancourt-urologia",
  },
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Sobre el Doctor", href: "/sobre-el-doctor" },
    { label: "Especialidades", href: "/especialidades" },
    { label: "Biblioteca educativa", href: "/biblioteca-educativa" },
    { label: "Blog", href: "/blog" },
    { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
    { label: "Contacto", href: "/contacto" },
  ],
} as const;
