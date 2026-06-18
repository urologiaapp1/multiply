import type { Metadata } from "next";
import { GraduationCap, Award, BookOpen, Users, Stethoscope } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CallToAction } from "@/components/sections/cta";
import { Timeline } from "@/components/sections/timeline";

export const metadata: Metadata = {
  title: "Sobre el Doctor",
  description:
    "Conoce al Dr. Cristóbal Bettancourt, urólogo en Temuco especializado en cirugía genital, andrología y cirugía reconstructiva uretral.",
  alternates: { canonical: "/sobre-el-doctor" },
};

const credentials = [
  {
    icon: GraduationCap,
    title: "Médico Cirujano",
    description: "Facultad de Medicina, Universidad del Desarrollo.",
  },
  {
    icon: Award,
    title: "Especialidad en Urología",
    description: "Pontificia Universidad Católica de Chile.",
  },
  {
    icon: BookOpen,
    title: "Máster en Andrología y Cirugía Reconstructiva del Área Genital Masculina",
    description: "Formación avanzada de subespecialidad en andrología y reconstrucción genital y uretral compleja.",
  },
  {
    icon: Award,
    title: "Curso de Laparoscopía Avanzada en Tumores de Riñón y Próstata",
    description: "Formación específica en cirugía laparoscópica oncológica renal y prostática.",
  },
  {
    icon: Users,
    title: "Docente de Urología",
    description: "Universidad Mayor, sede Temuco. Ex Jefe de Internado y Coordinador Docente del Campus Clínico.",
  },
  {
    icon: Users,
    title: "Sociedades científicas",
    description: "Miembro de la Sociedad Chilena de Urología (SOCHIU) y de la Sociedad Internacional de Urología (SIU).",
  },
];

const timeline = [
  {
    title: "Médico Cirujano",
    description: "Facultad de Medicina, Universidad del Desarrollo.",
  },
  {
    title: "Especialidad en Urología",
    description:
      "Pontificia Universidad Católica de Chile, con formación integral en patología urológica general y subespecialidades quirúrgicas.",
  },
  {
    title: "Máster en Andrología y Cirugía Reconstructiva del Área Genital Masculina",
    description:
      "Formación avanzada en andrología, uretroplastía y cirugía reconstructiva genital de alta complejidad.",
  },
  {
    title: "Curso de Laparoscopía Avanzada en Tumores de Riñón y Próstata",
    description:
      "Perfeccionamiento en técnicas mínimamente invasivas para el manejo quirúrgico oncológico renal y prostático.",
  },
  {
    title: "Docencia universitaria en Temuco",
    description:
      "Docente de Urología en la Universidad Mayor desde 2011, donde ejerció como Jefe de Internado de Urología y Coordinador Docente del Campus Clínico.",
  },
  {
    title: "Práctica clínica en Temuco",
    description:
      "Atención especializada para pacientes de la Región de la Araucanía y zonas vecinas, con experiencia previa en el Hospital de Victoria, Clínica RedSalud Temuco y Hospital de Carabineros.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Sobre el Doctor" }]} />
      <Hero
        eyebrow="Conócelo"
        title="Dr. Cristóbal Bettancourt"
        description="Urólogo especializado en cirugía genital, andrología y cirugía reconstructiva uretral, comprometido con una medicina clara, rigurosa y cercana."
      />

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-brand-blue-light via-white to-brand-green/5">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-blue/10" />
            <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-brand-green/10" />
            <div className="relative flex h-full flex-col items-center justify-center gap-4 px-8 text-center">
              <span className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-sm">
                <Stethoscope className="h-12 w-12 text-brand-blue" />
              </span>
              <p className="text-lg font-semibold text-brand-blue-dark">Dr. Cristóbal Bettancourt</p>
              <p className="text-sm text-slate-500">Urólogo · Andrología y Cirugía Reconstructiva</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-blue-dark">Filosofía de atención</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Cada consulta comienza con una escucha atenta. El Dr. Bettancourt cree que un buen
              diagnóstico y un tratamiento exitoso dependen tanto del conocimiento técnico como de
              una comunicación clara, sin tecnicismos innecesarios, que permita al paciente tomar
              decisiones informadas sobre su salud.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Es Máster en Andrología y Cirugía Reconstructiva del Área Genital Masculina,
              formación de subespecialidad que lo posiciona como referente en el manejo de
              patologías de alta complejidad en la región, ofreciendo a los pacientes de Temuco
              y la Araucanía alternativas que antes requerían desplazarse a centros de mayor
              tamaño.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {credentials.map((item) => (
                <div key={item.title} className="flex gap-3 rounded-xl border border-slate-200 p-4">
                  <item.icon className="h-5 w-5 shrink-0 text-brand-blue" />
                  <div>
                    <p className="text-sm font-semibold text-brand-blue-dark">{item.title}</p>
                    <p className="text-xs text-slate-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-gray py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="mb-10 text-2xl font-bold text-brand-blue-dark">Trayectoria</h2>
          <Timeline steps={timeline} />
        </div>
      </section>

      <CallToAction />
    </>
  );
}
