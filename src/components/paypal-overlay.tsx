"use client";

import { useEffect, useId, useRef, useState } from "react";
import { PAYPAL_HOSTED_BUTTON_ID, PAYPAL_HOSTED_DONATE_URL } from "@/lib/paypal";

// Our styled button in front of PayPal's Donate SDK. The SDK renders its own
// (hidden) button; we proxy clicks to it so the donate flow opens in-context
// instead of leaving the site. Renders as a plain link until the SDK is
// ready, so no-JS and SDK-blocked visitors still get the hosted page, whose
// configured return URL brings them back to /thank-you.

type DonationParams = { tx?: string; amt?: string; cc?: string };

declare global {
  interface Window {
    PayPal?: {
      Donation: {
        Button(opts: {
          env: string;
          hosted_button_id: string;
          image: { src: string; title: string; alt: string };
          onComplete: (params: DonationParams) => void;
        }): { render(selector: string): void };
      };
    };
  }
}

let sdkPromise: Promise<void> | null = null;
function loadDonateSdk(): Promise<void> {
  if (!sdkPromise) {
    sdkPromise = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = "https://www.paypalobjects.com/donate/sdk/donate-sdk.js";
      s.async = true;
      s.onload = () => resolve();
      s.onerror = () => {
        sdkPromise = null;
        reject(new Error("donate sdk failed to load"));
      };
      document.head.appendChild(s);
    });
  }
  return sdkPromise;
}

type Props = {
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function PayPalOverlay({ label, variant = "primary", className = "" }: Props) {
  const rawId = useId();
  const containerId = `pp-donate-${rawId.replace(/[^a-zA-Z0-9-]/g, "")}`;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadDonateSdk()
      .then(() => {
        if (cancelled || !containerRef.current || !window.PayPal) return;
        // strict-mode double-mount guard: never render the SDK button twice
        if (containerRef.current.childElementCount > 0) {
          setReady(true);
          return;
        }
        window.PayPal.Donation.Button({
          env: "production",
          hosted_button_id: PAYPAL_HOSTED_BUTTON_ID,
          image: {
            src: "https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif",
            title: "Donate with PayPal",
            alt: "Donate with PayPal",
          },
          onComplete: (params) => {
            const amt = params?.amt ? `?amt=${encodeURIComponent(params.amt)}` : "";
            window.location.href = `/thank-you${amt}`;
          },
        }).render(`#${containerId}`);
        setReady(true);
      })
      .catch(() => {
        /* link fallback keeps working */
      });
    return () => {
      cancelled = true;
    };
  }, [containerId]);

  const base =
    "inline-flex items-center justify-center font-display uppercase tracking-wider text-base px-6 py-4 border-2 border-ink transition-all w-full";
  const styles =
    variant === "primary"
      ? "bg-purple text-paper shadow-[5px_5px_0_var(--ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_var(--ink)]"
      : "bg-paper text-ink shadow-[3px_3px_0_var(--ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_var(--ink)]";

  return (
    <div className={className}>
      <a
        href={PAYPAL_HOSTED_DONATE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${styles}`}
        onClick={(e) => {
          if (!ready) return; // not loaded: behave as a normal link
          const sdkBtn = containerRef.current?.querySelector<HTMLElement>("a, img");
          if (sdkBtn) {
            e.preventDefault();
            sdkBtn.click(); // opens PayPal's in-context window
          }
        }}
      >
        {label}
      </a>
      {/* PayPal's own button, hidden; we only borrow its click handler */}
      <div ref={containerRef} id={containerId} className="hidden" aria-hidden="true" />
    </div>
  );
}
