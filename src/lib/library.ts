export type LibraryCategory = {
  slug: string;
  name: string;
  description: string;
  topics: string[];
};

export const libraryCategories: LibraryCategory[] = [
  {
    slug: "prostata",
    name: "Próstata",
    description:
      "Anatomía, hiperplasia prostática benigna, prostatitis y prevención del cáncer de próstata.",
    topics: [
      "¿Qué es la próstata y para qué sirve?",
      "Hiperplasia prostática benigna: síntomas y tratamiento",
      "Antígeno prostático específico (PSA): cuándo controlarlo",
      "Prevención y detección precoz del cáncer de próstata",
    ],
  },
  {
    slug: "pene",
    name: "Pene",
    description: "Anatomía, fimosis, curvatura peneana, enfermedad de Peyronie y salud genital.",
    topics: [
      "Anatomía básica del pene",
      "Fimosis: cuándo preocuparse",
      "Curvatura peneana y enfermedad de Peyronie",
      "Higiene genital masculina",
    ],
  },
  {
    slug: "testiculo",
    name: "Testículo",
    description: "Autoexamen testicular, dolor testicular, varicocele y masas testiculares.",
    topics: [
      "Cómo realizar el autoexamen testicular",
      "Varicocele: causas y tratamiento",
      "Dolor testicular: cuándo es una urgencia",
      "Nódulos y masas testiculares: qué hacer",
    ],
  },
  {
    slug: "escroto",
    name: "Escroto",
    description: "Hidrocele, quistes de epidídimo y otras condiciones del contenido escrotal.",
    topics: [
      "Hidrocele: causas y tratamiento",
      "Quiste de epidídimo (espermatocele)",
      "Aumento de volumen escrotal: guía orientativa",
    ],
  },
  {
    slug: "infertilidad",
    name: "Infertilidad",
    description: "Evaluación de fertilidad masculina, espermiograma y opciones de tratamiento.",
    topics: [
      "Cómo se evalúa la fertilidad masculina",
      "Entendiendo tu espermiograma",
      "Varicocele e infertilidad",
      "Factores de estilo de vida que afectan la fertilidad",
    ],
  },
  {
    slug: "cirugia",
    name: "Cirugía",
    description: "Qué esperar antes y después de una cirugía urológica o andrológica.",
    topics: [
      "Preparación para una cirugía urológica ambulatoria",
      "Recuperación postoperatoria: cuidados generales",
      "Anestesia local en cirugía genital: qué esperar",
    ],
  },
  {
    slug: "reconstruccion",
    name: "Reconstrucción",
    description: "Estenosis y trauma uretral, y cirugía reconstructiva de alta complejidad.",
    topics: [
      "Estenosis uretral: signos de alarma",
      "Qué es una uretroplastía",
      "Vida después de una reconstrucción uretral",
    ],
  },
  {
    slug: "salud-sexual",
    name: "Salud sexual",
    description: "Disfunción eréctil, prótesis peneana y bienestar sexual masculino.",
    topics: [
      "Disfunción eréctil: mitos y realidades",
      "Opciones de tratamiento para la disfunción eréctil",
      "Prótesis peneana: preguntas frecuentes",
    ],
  },
  {
    slug: "prevencion",
    name: "Prevención",
    description: "Chequeos urológicos, factores de riesgo y hábitos de vida saludable.",
    topics: [
      "¿Cuándo visitar al urólogo por primera vez?",
      "Chequeo urológico según la edad",
      "Hábitos que protegen tu salud urológica",
    ],
  },
];

export function getLibraryCategoryBySlug(slug: string) {
  return libraryCategories.find((c) => c.slug === slug);
}
