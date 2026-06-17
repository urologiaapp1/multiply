import { z } from "zod";

export const contactSchema = z.object({
  nombre: z.string().trim().min(2, "Ingresa tu nombre completo").max(100),
  correo: z.string().trim().email("Ingresa un correo válido").max(150),
  telefono: z
    .string()
    .trim()
    .min(7, "Ingresa un teléfono válido")
    .max(20)
    .regex(/^[0-9+\s()-]+$/, "Formato de teléfono inválido"),
  mensaje: z.string().trim().min(10, "Cuéntanos un poco más").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const appointmentSchema = z.object({
  nombre: z.string().trim().min(2, "Ingresa tu nombre completo").max(100),
  edad: z.coerce.number().int().min(0, "Edad inválida").max(120, "Edad inválida"),
  motivo: z.string().trim().min(5, "Describe brevemente el motivo de tu consulta").max(1000),
  telefono: z
    .string()
    .trim()
    .min(7, "Ingresa un teléfono válido")
    .max(20)
    .regex(/^[0-9+\s()-]+$/, "Formato de teléfono inválido"),
  correo: z.string().trim().email("Ingresa un correo válido").max(150),
});

export type AppointmentInput = z.infer<typeof appointmentSchema>;

export const newsletterSchema = z.object({
  email: z.string().trim().email("Ingresa un correo válido").max(150),
});
