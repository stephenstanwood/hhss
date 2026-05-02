"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "ok" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
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

  if (status === "ok") {
    return (
      <div className="border-2 border-ink bg-paper p-8 md:p-10 shadow-[6px_6px_0_var(--purple)] text-center">
        <div className="font-hand text-3xl text-purple mb-2">thanks!</div>
        <h3 className="font-display uppercase tracking-tight text-2xl mb-3">
          Got your message.
        </h3>
        <p className="text-ink-soft">
          We'll reply from{" "}
          <span className="font-mono text-ink">
            helpinghandsforsouthsudan@gmail.com
          </span>
          , usually within a couple of days.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-paper border-2 border-ink px-4 py-3 font-body text-base focus:outline-none focus:bg-paper-deep/40 focus:shadow-[4px_4px_0_var(--purple)] transition-all";
  const labelClass =
    "block font-display uppercase tracking-[0.15em] text-xs text-ink-muted mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>
          Subject (optional)
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className={inputClass}
          placeholder="Speaking request, donation question, etc."
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={7}
          className={`${inputClass} resize-vertical`}
        />
      </div>

      {status === "error" && (
        <div className="border-2 border-red bg-red/10 px-4 py-3 text-sm text-red">
          {error || "Something went wrong. Try again, or email us directly."}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center font-display uppercase tracking-wider text-base bg-purple text-paper px-8 py-4 border-2 border-ink shadow-[5px_5px_0_var(--ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_var(--ink)] transition-all disabled:opacity-60 disabled:cursor-wait"
      >
        {status === "submitting" ? "Sending..." : "Send message →"}
      </button>
    </form>
  );
}
