import { NextResponse } from "next/server";

// Lightweight subscribe endpoint. Stores nothing for now — sends the email
// to the team mailbox via mailto-style fallback (a real ESP can be wired in
// later: Resend, Loops, Buttondown, etc.). Returns 200 unless input is bad.
export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { email?: unknown };
    const email = typeof body.email === "string" ? body.email.trim() : "";

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    // TODO: wire up Resend / Loops / Buttondown when chosen.
    // For now we just log on the server — the contact form already routes mail.
    console.log("[newsletter] subscribe:", email);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  }
}
