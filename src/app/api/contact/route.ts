import { NextResponse } from "next/server";

/**
 * Contact form endpoint.
 *
 * NOTE (owner/launch task): this validates and accepts the submission but
 * does NOT yet deliver it anywhere. Before launch, wire an email/notification
 * provider here (e.g. Resend, Postmark, Formspree, or a Klaviyo event) so
 * submissions reach an inbox. Until then, submissions are accepted but not
 * stored or forwarded.
 */
export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !emailOk) {
    return NextResponse.json(
      { error: "Please provide your name and a valid email." },
      { status: 422 }
    );
  }

  // TODO: forward `data` to an email/notification provider before launch.
  return NextResponse.json({ ok: true });
}
