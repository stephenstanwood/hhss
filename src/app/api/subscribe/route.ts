import { NextResponse } from "next/server";

const NOTIFY_TO = "helpinghandsforsouthsudan@gmail.com";

type Body = {
  email?: string;
  website?: string;
};

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const email = (body.email || "").trim().toLowerCase();
  if (!email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "That email looks invalid." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[subscribe] RESEND_API_KEY not set; signup lost:", email);
    return NextResponse.json(
      { error: "Signups are down right now. Email us instead." },
      { status: 503 }
    );
  }

  // Preferred path: add the contact to a Resend audience. Requires a
  // full-access API key + RESEND_AUDIENCE_ID; the current key is
  // sending-only, so this is dormant until those creds exist.
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (audienceId) {
    const res = await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, unsubscribed: false }),
      }
    );
    if (res.ok) {
      return NextResponse.json({ ok: true });
    }
    const detail = await res.text().catch(() => "");
    console.error("[subscribe] audience add failed, falling back", res.status, detail);
  }

  // Fallback path: deliver the signup to the org inbox so no address is
  // ever lost. Gmail filter on the subject collects these into a label.
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Helping Hands website <noreply@helpsouthsudan.org>",
      to: [NOTIFY_TO],
      subject: "[Field Notes signup]",
      text: `New Field Notes signup from the website:\n\n${email}\n`,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("[subscribe] notify send failed", res.status, detail);
    return NextResponse.json(
      { error: "Could not sign you up. Please email us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
