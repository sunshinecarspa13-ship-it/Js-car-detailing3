"use server";

import { revalidatePath } from "next/cache";
import { updateBookingStatus, deleteBooking } from "@/lib/booking/store";
import { BOOKING_STATUSES, type BookingStatus } from "@/lib/booking/types";

export async function setBookingStatus(id: string, status: string) {
  if (!BOOKING_STATUSES.includes(status as BookingStatus)) {
    throw new Error("Invalid status");
  }
  await updateBookingStatus(id, status as BookingStatus);
  revalidatePath("/admin");
}

export async function removeBooking(id: string) {
  await deleteBooking(id);
  revalidatePath("/admin");
}
