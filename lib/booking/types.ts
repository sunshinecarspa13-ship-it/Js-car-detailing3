export const BOOKING_STATUSES = [
  "pending",
  "confirmed",
  "completed",
  "cancelled",
] as const;

export type BookingStatus = (typeof BOOKING_STATUSES)[number];

export const TIME_SLOTS = [
  "Morning (8am–11am)",
  "Midday (11am–2pm)",
  "Afternoon (2pm–5pm)",
  "Evening (5pm onwards)",
] as const;

export type TimeSlot = (typeof TIME_SLOTS)[number];

export type Booking = {
  id: string;
  name: string;
  phone: string;
  email?: string;
  service: string;
  area: string;
  address: string;
  preferredDate: string;
  preferredTime: TimeSlot;
  notes?: string;
  status: BookingStatus;
  createdAt: string;
};
