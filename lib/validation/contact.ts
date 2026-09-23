import { z } from "zod";
import { services } from "@/lib/data/services";
import { areas } from "@/lib/data/areas";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20, "Enter a valid phone number")
    .regex(/^[0-9+()\s-]+$/, "Enter a valid phone number"),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address")
    .optional()
    .or(z.literal("")),
  service: z.enum(
    ["not-sure", ...services.map((s) => s.slug)] as [string, ...string[]],
    { message: "Choose a service" }
  ),
  area: z.enum(
    ["other", ...areas.map((a) => a.slug)] as [string, ...string[]],
    { message: "Choose your area" }
  ),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
