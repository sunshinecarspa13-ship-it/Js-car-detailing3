import { CalendarX2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { listBookings } from "@/lib/booking/store";
import { BOOKING_STATUSES } from "@/lib/booking/types";
import { BookingRow } from "./BookingRow";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const bookings = await listBookings();

  const counts = BOOKING_STATUSES.reduce<Record<string, number>>((acc, status) => {
    acc[status] = bookings.filter((b) => b.status === status).length;
    return acc;
  }, {});

  return (
    <Container className="py-10">
      <h1 className="text-2xl font-semibold text-fg">Bookings</h1>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {BOOKING_STATUSES.map((status) => (
          <div key={status} className="rounded-xl border border-border bg-bg-elevated p-4">
            <p className="text-2xl font-semibold text-fg">{counts[status]}</p>
            <p className="text-xs capitalize text-fg-subtle">{status}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        {bookings.length === 0 ? (
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-bg-elevated p-12 text-center">
            <CalendarX2 className="h-8 w-8 text-fg-subtle" aria-hidden />
            <p className="text-sm text-fg-muted">No bookings yet.</p>
          </div>
        ) : (
          bookings.map((booking) => <BookingRow key={booking.id} booking={booking} />)
        )}
      </div>
    </Container>
  );
}
