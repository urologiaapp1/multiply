import {
  Stethoscope,
  HeartPulse,
  Baby,
  Wrench,
  ShieldPlus,
  type LucideIcon,
} from "lucide-react";
import type { Specialty } from "@/lib/specialties";

export const categoryIcons: Record<Specialty["category"], LucideIcon> = {
  "Cirugía genital": Wrench,
  Andrología: HeartPulse,
  "Reconstrucción uretral": ShieldPlus,
  Infertilidad: Baby,
  "Urología general": Stethoscope,
};

export const categoryAccents: Record<Specialty["category"], { bg: string; text: string }> = {
  "Cirugía genital": { bg: "bg-brand-blue/10", text: "text-brand-blue" },
  Andrología: { bg: "bg-brand-green/10", text: "text-brand-green" },
  "Reconstrucción uretral": { bg: "bg-brand-blue-dark/10", text: "text-brand-blue-dark" },
  Infertilidad: { bg: "bg-brand-green/10", text: "text-brand-green" },
  "Urología general": { bg: "bg-brand-blue/10", text: "text-brand-blue" },
};
