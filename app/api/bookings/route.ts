import { NextResponse } from "next/server";
import { bookingSchema } from "@/lib/validation/booking";
import { createBooking } from "@/lib/booking/store";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const result = bookingSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Invalid booking data", issues: result.error.flatten() },
      { status: 422 }
    );
  }

  const booking = await createBooking(result.data);
  return NextResponse.json({ ok: true, id: booking.id });
}
