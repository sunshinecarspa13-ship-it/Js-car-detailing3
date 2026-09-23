import { put, list, del } from "@vercel/blob";
import type { Booking, BookingStatus } from "./types";

const PREFIX = "bookings/";

export async function createBooking(
  data: Omit<Booking, "id" | "status" | "createdAt">
): Promise<Booking> {
  const booking: Booking = {
    ...data,
    id: crypto.randomUUID(),
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  await put(`${PREFIX}${booking.id}.json`, JSON.stringify(booking), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
  });

  return booking;
}

export async function listBookings(): Promise<Booking[]> {
  const { blobs } = await list({ prefix: PREFIX });

  const bookings = await Promise.all(
    blobs.map(async (blob) => {
      const res = await fetch(blob.url, { cache: "no-store" });
      return (await res.json()) as Booking;
    })
  );

  return bookings.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export async function updateBookingStatus(
  id: string,
  status: BookingStatus
): Promise<void> {
  const { blobs } = await list({ prefix: `${PREFIX}${id}.json` });
  const existing = blobs[0];
  if (!existing) throw new Error(`Booking ${id} not found`);

  const res = await fetch(existing.url, { cache: "no-store" });
  const booking = (await res.json()) as Booking;

  await put(`${PREFIX}${id}.json`, JSON.stringify({ ...booking, status }), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
  });
}

export async function deleteBooking(id: string): Promise<void> {
  const { blobs } = await list({ prefix: `${PREFIX}${id}.json` });
  const existing = blobs[0];
  if (existing) await del(existing.url);
}
