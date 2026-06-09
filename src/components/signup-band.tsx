"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "ok" | "error";

export function SignupBand() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({
          email: formData.get("email"),
          // honeypot
          website: formData.get("website"),
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong");
      }
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  }

  return (
    <section id="updates" className="border-b-2 border-ink bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div>
            <div className="font-display uppercase tracking-[0.2em] text-xs text-red mb-3">
              Field notes
            </div>
            <h2 className="font-display uppercase tracking-tight text-3xl md:text-5xl leading-[0.95] mb-4">
              Letters from<br />
              <span className="scribble scribble--purple">the schools.</span>
            </h2>
            <p className="text-ink-soft leading-relaxed max-w-md">
              A short email a few times a year — real photos, real numbers,
              what your support actually did. No spam, ever. Unsubscribe
              anytime.
            </p>
          </div>

          {status === "ok" ? (
            <div className="border-2 border-ink bg-paper p-7 md:p-8 shadow-[6px_6px_0_var(--purple)] text-center">
              <div className="font-hand text-3xl text-purple mb-1">
                you&apos;re in. ✦
              </div>
              <p className="text-ink-soft text-[15px]">
                We&apos;ll write when there&apos;s something worth reading.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* honeypot */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <div className="flex flex-col sm:flex-row gap-3">
                <label htmlFor="signup-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="signup-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="flex-1 bg-paper border-2 border-ink px-4 py-3.5 font-body text-base focus:outline-none focus:bg-paper-deep/40 focus:shadow-[4px_4px_0_var(--purple)] transition-all"
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center font-display uppercase tracking-wider text-base bg-purple text-paper px-7 py-3.5 border-2 border-ink shadow-[4px_4px_0_var(--ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--ink)] transition-all disabled:opacity-60 disabled:cursor-wait"
                >
                  {status === "submitting" ? "Signing up..." : "Sign me up"}
                </button>
              </div>
              {status === "error" && (
                <p className="mt-3 text-sm text-red">
                  {error || "Something went wrong. Try again, or email us."}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
