"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { bookingSchema, type BookingFormValues } from "@/lib/validation/booking";
import { services } from "@/lib/data/services";
import { areas } from "@/lib/data/areas";
import { TIME_SLOTS } from "@/lib/booking/types";

const inputClasses =
  "w-full rounded-xl border border-border-strong bg-bg px-4 py-3 text-sm text-fg placeholder:text-fg-subtle focus:border-accent focus:outline-none";

function todayIsoDate(): string {
  return new Date().toISOString().slice(0, 10);
}

export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "not-sure",
      area: "colchester",
      address: "",
      preferredDate: "",
      preferredTime: TIME_SLOTS[0],
      notes: "",
    },
  });

  async function onSubmit(values: BookingFormValues) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-bg-elevated p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent" aria-hidden />
        <h3 className="text-lg font-semibold text-fg">Booking request received</h3>
        <p className="max-w-sm text-sm text-fg-muted">
          We&apos;ll confirm your appointment shortly. For anything urgent, call{" "}
          <a href="tel:+447778902278" className="text-accent hover:underline">
            +44 7778 902278
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-medium text-accent hover:underline"
        >
          Book another appointment
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-fg">
            Full name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            className={cn(inputClasses, errors.name && "border-error")}
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && <p className="mt-1.5 text-xs text-error">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-fg">
            Phone number
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={cn(inputClasses, errors.phone && "border-error")}
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          {errors.phone && <p className="mt-1.5 text-xs text-error">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-fg">
          Email <span className="text-fg-subtle">(optional)</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={cn(inputClasses, errors.email && "border-error")}
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        {errors.email && <p className="mt-1.5 text-xs text-error">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="address" className="mb-1.5 block text-sm font-medium text-fg">
          Address for the appointment
        </label>
        <input
          id="address"
          type="text"
          autoComplete="street-address"
          placeholder="Where should we come to?"
          className={cn(inputClasses, errors.address && "border-error")}
          aria-invalid={!!errors.address}
          {...register("address")}
        />
        {errors.address && <p className="mt-1.5 text-xs text-error">{errors.address.message}</p>}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-fg">
            Service
          </label>
          <select id="service" className={inputClasses} {...register("service")}>
            <option value="not-sure">Not sure yet</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="area" className="mb-1.5 block text-sm font-medium text-fg">
            Your area
          </label>
          <select id="area" className={inputClasses} {...register("area")}>
            {areas.map((a) => (
              <option key={a.slug} value={a.slug}>
                {a.name}
              </option>
            ))}
            <option value="other">Other / not listed</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="preferredDate" className="mb-1.5 block text-sm font-medium text-fg">
            Preferred date
          </label>
          <input
            id="preferredDate"
            type="date"
            min={todayIsoDate()}
            className={cn(inputClasses, errors.preferredDate && "border-error")}
            aria-invalid={!!errors.preferredDate}
            {...register("preferredDate")}
          />
          {errors.preferredDate && (
            <p className="mt-1.5 text-xs text-error">{errors.preferredDate.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="preferredTime" className="mb-1.5 block text-sm font-medium text-fg">
            Preferred time
          </label>
          <select id="preferredTime" className={inputClasses} {...register("preferredTime")}>
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="mb-1.5 block text-sm font-medium text-fg">
          Notes <span className="text-fg-subtle">(optional)</span>
        </label>
        <textarea
          id="notes"
          rows={4}
          placeholder="Vehicle make/model, condition, or anything else useful"
          className={inputClasses}
          {...register("notes")}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-error" role="alert">
          Something went wrong sending your booking — please call{" "}
          <a href="tel:+447778902278" className="underline">
            +44 7778 902278
          </a>{" "}
          instead.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover disabled:opacity-60"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
        {status === "submitting" ? "Sending…" : "Request Booking"}
      </button>
    </form>
  );
}
