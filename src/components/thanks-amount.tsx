"use client";

import { useSearchParams } from "next/navigation";

// Personalizes /thank-you when PayPal hands back an amount (?amt=42).
// Client-side so the page itself stays fully static; must sit inside
// <Suspense> per the useSearchParams CSR-bailout rule.
export function ThanksAmount() {
  const params = useSearchParams();
  const raw = params.get("amt") ?? params.get("amount");
  const amt = raw ? Number.parseFloat(raw) : NaN;
  if (!Number.isFinite(amt) || amt <= 0) return null;

  return (
    <p className="mt-8 text-lg md:text-xl text-ink-soft max-w-xl mx-auto leading-relaxed">
      Your <strong className="text-ink">${amt % 1 === 0 ? amt : amt.toFixed(2)}</strong>{" "}
      is on its way to a real classroom.
    </p>
  );
}
