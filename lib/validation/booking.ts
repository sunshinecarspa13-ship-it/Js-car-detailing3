import { z } from "zod";
import { services } from "@/lib/data/services";
import { areas } from "@/lib/data/areas";
import { TIME_SLOTS } from "@/lib/booking/types";

function isTodayOrFuture(dateStr: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const date = new Date(`${dateStr}T00:00:00`);
  return date.getTime() >= today.getTime();
}

export const bookingSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20, "Enter a valid phone number")
    .regex(/^[0-9+()\s-]+$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email address").optional().or(z.literal("")),
  service: z.enum(
    ["not-sure", ...services.map((s) => s.slug)] as [string, ...string[]],
    { message: "Choose a service" }
  ),
  area: z.enum(
    ["other", ...areas.map((a) => a.slug)] as [string, ...string[]],
    { message: "Choose your area" }
  ),
  address: z.string().trim().min(5, "Enter the address for the appointment").max(300),
  preferredDate: z
    .string()
    .trim()
    .refine((val) => !Number.isNaN(Date.parse(val)), "Choose a valid date")
    .refine(isTodayOrFuture, "Choose today or a future date"),
  preferredTime: z.enum(TIME_SLOTS, { message: "Choose a time slot" }),
  notes: z.string().trim().max(2000).optional().or(z.literal("")),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;
