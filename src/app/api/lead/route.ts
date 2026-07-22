import { NextResponse } from "next/server";

/**
 * Lead-magnet (checklist) signup endpoint.
 *
 * NOTE (owner/launch task): this validates the signup but does NOT yet
 * store the lead or email the checklist. Before launch, connect an email
 * platform (e.g. Klaviyo, or a transactional provider) to capture the
 * contact and deliver the Pre-Inspection Self-Audit Checklist PDF.
 */
export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = typeof data.email === "string" ? data.email.trim() : "";
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!emailOk) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 422 }
    );
  }

  // TODO: store the lead and email the checklist before launch.
  return NextResponse.json({ ok: true });
}
