"use client";

import { useState } from "react";

export function NewsletterSignup({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "submitting" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/.+@.+\..+/.test(email)) {
      setState("err");
      return;
    }
    setState("submitting");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setState("ok");
        setEmail("");
      } else {
        setState("err");
      }
    } catch {
      setState("err");
    }
  }

  if (state === "ok") {
    return (
      <div className={compact ? "" : "max-w-md"}>
        <p className="font-hand text-2xl text-purple">
          Thank you — you're on the list. ✦
        </p>
        <p className="text-[13px] text-ink-muted mt-1">
          We send a short note every month or so. No spam, ever.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={compact ? "" : "max-w-md"}>
      {!compact && (
        <>
          <div className="font-display uppercase tracking-[0.2em] text-xs text-red mb-2">
            Stay in touch
          </div>
          <h3 className="font-display uppercase tracking-tight text-2xl md:text-3xl leading-tight mb-2">
            Monthly notes from the schools.
          </h3>
          <p className="text-[14px] text-ink-soft mb-4 leading-relaxed">
            One short email a month — kid news, school updates, the
            occasional ask. No spam.
          </p>
        </>
      )}
      <div className="flex flex-col sm:flex-row gap-2">
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state === "err") setState("idle");
          }}
          placeholder="you@example.com"
          className="flex-1 bg-paper border-2 border-ink px-3 py-2.5 font-body text-[15px] focus:outline-none focus:bg-paper/80"
        />
        <button
          type="submit"
          disabled={state === "submitting"}
          className="font-display uppercase tracking-wider text-sm bg-ink text-paper px-5 py-2.5 border-2 border-ink shadow-[3px_3px_0_var(--purple)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_var(--purple)] transition-all disabled:opacity-60"
        >
          {state === "submitting" ? "..." : "Subscribe"}
        </button>
      </div>
      {state === "err" && (
        <p className="mt-2 text-[13px] text-red">
          Hm — that didn't work. Try again, or email us directly.
        </p>
      )}
    </form>
  );
}
