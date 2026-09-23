import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Invalid form data", issues: result.error.flatten() },
      { status: 422 }
    );
  }

  // TODO: swap this for a real email send (e.g. Resend) or CRM/webhook once
  // the client supplies a destination. Logging server-side in the meantime
  // so submissions aren't silently dropped.
  console.log("[contact-form] new enquiry:", result.data);

  return NextResponse.json({ ok: true });
}
