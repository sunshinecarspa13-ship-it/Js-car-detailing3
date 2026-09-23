"use client";

import { useState, useTransition } from "react";
import { Trash2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { setBookingStatus, removeBooking } from "./actions";
import { BOOKING_STATUSES, type Booking } from "@/lib/booking/types";
import { getServiceBySlug } from "@/lib/data/services";
import { getAreaBySlug } from "@/lib/data/areas";

const statusColors: Record<string, string> = {
  pending: "text-accent",
  confirmed: "text-fg",
  completed: "text-success",
  cancelled: "text-fg-subtle",
};

export function BookingRow({ booking }: { booking: Booking }) {
  const [isPending, startTransition] = useTransition();
  const [deleting, setDeleting] = useState(false);

  const serviceName = getServiceBySlug(booking.service)?.name ?? "Not sure yet";
  const areaName = getAreaBySlug(booking.area)?.name ?? "Other";

  function onStatusChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const status = e.target.value;
    startTransition(() => {
      setBookingStatus(booking.id, status);
    });
  }

  function onDelete() {
    if (!confirm(`Delete the booking for ${booking.name}? This can't be undone.`)) return;
    setDeleting(true);
    startTransition(() => {
      removeBooking(booking.id);
    });
  }

  return (
    <div className="grid grid-cols-1 gap-4 rounded-2xl border border-border bg-bg-elevated p-5 sm:grid-cols-[1fr_auto] sm:items-start">
      <div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <p className="text-sm font-semibold text-fg">{booking.name}</p>
          <span className={cn("text-xs font-medium capitalize", statusColors[booking.status])}>
            {booking.status}
          </span>
        </div>
        <p className="mt-1 text-xs text-fg-subtle">
          {new Date(booking.createdAt).toLocaleString("en-GB")}
        </p>

        <dl className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 text-sm text-fg-muted sm:grid-cols-2">
          <div>
            <dt className="inline text-fg-subtle">Phone: </dt>
            <dd className="inline">
              <a href={`tel:${booking.phone}`} className="hover:text-accent">
                {booking.phone}
              </a>
            </dd>
          </div>
          {booking.email && (
            <div>
              <dt className="inline text-fg-subtle">Email: </dt>
              <dd className="inline">{booking.email}</dd>
            </div>
          )}
          <div>
            <dt className="inline text-fg-subtle">Service: </dt>
            <dd className="inline">{serviceName}</dd>
          </div>
          <div>
            <dt className="inline text-fg-subtle">Area: </dt>
            <dd className="inline">{areaName}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="inline text-fg-subtle">Address: </dt>
            <dd className="inline">{booking.address}</dd>
          </div>
          <div>
            <dt className="inline text-fg-subtle">Date: </dt>
            <dd className="inline">{booking.preferredDate}</dd>
          </div>
          <div>
            <dt className="inline text-fg-subtle">Time: </dt>
            <dd className="inline">{booking.preferredTime}</dd>
          </div>
          {booking.notes && (
            <div className="sm:col-span-2">
              <dt className="inline text-fg-subtle">Notes: </dt>
              <dd className="inline">{booking.notes}</dd>
            </div>
          )}
        </dl>
      </div>

      <div className="flex items-center gap-2 sm:flex-col sm:items-stretch">
        <select
          value={booking.status}
          onChange={onStatusChange}
          disabled={isPending}
          className="rounded-lg border border-border-strong bg-bg px-3 py-2 text-sm text-fg focus:border-accent focus:outline-none disabled:opacity-60"
        >
          {BOOKING_STATUSES.map((s) => (
            <option key={s} value={s}>
              {s[0].toUpperCase() + s.slice(1)}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={onDelete}
          disabled={isPending}
          className="flex items-center justify-center gap-1.5 rounded-lg border border-border-strong px-3 py-2 text-xs font-medium text-error transition-colors hover:border-error disabled:opacity-60"
        >
          {deleting && isPending ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />
          ) : (
            <Trash2 className="h-3.5 w-3.5" aria-hidden />
          )}
          Delete
        </button>
      </div>
    </div>
  );
}
