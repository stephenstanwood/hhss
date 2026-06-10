import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Reveal } from "@/components/reveal";
import { ThanksAmount } from "@/components/thanks-amount";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Your donation to Helping Hands for South Sudan went through.",
  robots: { index: false, follow: false },
};

// PayPal's return URL lands donors here after a completed donation
// (hosted button config + `return` on the legacy forms).
export default function ThankYou() {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full bg-orange/10 blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-[480px] h-[480px] rounded-full bg-purple/10 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative text-center">
        <Reveal variant="stamp">
          <div className="inline-block border-[3px] border-red text-red px-6 py-2.5 -rotate-6 mix-blend-multiply mb-10">
            <span className="font-display uppercase tracking-[0.25em] text-lg md:text-xl">
              Received
            </span>
          </div>
        </Reveal>

        <Reveal variant="rise" delay={150}>
          <h1 className="font-display uppercase tracking-tight leading-[0.85] text-6xl md:text-8xl text-ink">
            Thank you.<br />
            <span className="scribble">It's real now.</span>
          </h1>
        </Reveal>

        <Suspense fallback={null}>
          <ThanksAmount />
        </Suspense>

        <Reveal variant="rise" delay={300}>
          <div className="mt-10 max-w-xl mx-auto text-left bg-paper border-2 border-ink shadow-[6px_6px_0_var(--ink)] p-7 md:p-8">
            <div className="font-display uppercase tracking-[0.2em] text-xs text-red mb-4">
              What happens next
            </div>
            <ul className="space-y-3.5 text-[15px] md:text-base text-ink-soft leading-relaxed">
              <li>
                <strong className="text-ink">Your receipt</strong> arrives by
                email from PayPal. We're a 501(c)(3), EIN{" "}
                <span className="font-mono">82-5215402</span>, so it's
                tax-deductible.
              </li>
              <li>
                <strong className="text-ink">Your money</strong> goes to
                tuition, uniforms, books, and meals at our six partner
                schools. Gabriel walks the schools and confirms head counts
                before tuition is paid.
              </li>
              <li>
                <strong className="text-ink">About 99%</strong> reaches the
                kids. Nobody here takes a salary.
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal variant="write" delay={450}>
          <p className="font-hand text-3xl md:text-4xl text-ink mt-10">
            From all of us, and 1,500 kids: thank you. ✦
          </p>
        </Reveal>

        <Reveal variant="rise" delay={550}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/our-story"
              className="inline-flex items-center font-display uppercase tracking-wider text-base bg-purple text-paper px-7 py-4 border-2 border-ink shadow-[5px_5px_0_var(--ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_var(--ink)] transition-all"
            >
              See whose story you just joined
            </Link>
            <a
              href="https://www.facebook.com/helpinghands4southsudan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-display uppercase tracking-wider text-base text-ink px-2 py-4 underline decoration-2 underline-offset-8 decoration-red hover:text-purple"
            >
              Follow the work on Facebook
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
