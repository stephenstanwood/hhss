import type { Metadata } from "next";
import { PayPalDonate } from "@/components/paypal-donate";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "99% of every donation reaches the children. Helping Hands for South Sudan is an all-volunteer 501(c)(3). Tax ID 82-5215402.",
};

const TIERS = [
  { amount: 100, headline: "Books & supplies", body: "Books, notebooks, and supplies that get shared across a classroom for a term." },
  { amount: 300, headline: "A year at Juba Primary", body: "A full year of school for one student at Juba Integrated Primary — tuition, uniform, books, meals." },
  { amount: 500, headline: "A year at Gulu", body: "A full year of school for one student at Gulu Primary or Gulu Central High." },
  { amount: 1000, headline: "Two students, one year", body: "Two students, one year of school — or one secondary student plus a chunk of supplies for the rest of the class." },
];

const QUICK = [25, 50, 75, 150];

export default function Donate() {
  return (
    <>
      <section className="border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <div className="font-display uppercase tracking-[0.3em] text-sm text-purple mb-6">
                Donate
              </div>
              <h1 className="font-display uppercase tracking-tight leading-[0.85] text-[14vw] md:text-[10vw] lg:text-[8.5vw] text-ink">
                <span className="text-purple">99%</span><br />
                <span className="scribble">to the kids.</span><br />
                period.
              </h1>
              <p className="mt-8 text-lg md:text-xl text-ink-soft max-w-xl leading-relaxed">
                We're an all-volunteer 501(c)(3). Operating expenses run about
                1% — the rest goes to tuition, uniforms, books, and meals.
                Every donation is tax-deductible.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-paper border-2 border-ink p-6 md:p-8 shadow-[8px_8px_0_var(--ink)]">
                <div className="font-display uppercase tracking-[0.2em] text-xs text-red mb-2">
                  Tax info
                </div>
                <div className="space-y-1.5 text-[15px]">
                  <div>
                    <span className="text-ink-muted">EIN:</span>{" "}
                    <span className="font-mono">82-5215402</span>
                  </div>
                  <div>
                    <span className="text-ink-muted">Status:</span>{" "}
                    <span className="font-display uppercase tracking-wider text-purple">
                      501(c)(3) public charity
                    </span>
                  </div>
                  <div>
                    <span className="text-ink-muted">Founded:</span> 2018
                  </div>
                </div>
                <p className="text-xs text-ink-muted mt-4 leading-relaxed">
                  Donations to Helping Hands for South Sudan are
                  tax-deductible to the fullest extent allowed by law.
                  We'll email a receipt for any contribution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section className="py-16 md:py-24 border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="font-display uppercase tracking-tight text-4xl md:text-6xl">
              Pick a tier.
            </h2>
            <span className="font-hand text-xl text-ink-muted">
              what your gift does →
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {TIERS.map((t, i) => (
              <article
                key={t.amount}
                className={`border-2 border-ink p-6 md:p-7 flex flex-col shadow-[6px_6px_0_var(--ink)] ${
                  i === 1 ? "bg-purple text-paper" : "bg-paper"
                }`}
                style={{ transform: `rotate(${[-0.4, 0.5, -0.3, 0.4][i]}deg)` }}
              >
                <div
                  className={`font-display uppercase tracking-[0.2em] text-xs mb-2 ${
                    i === 1 ? "opacity-80" : "text-ink-muted"
                  }`}
                >
                  {t.headline}
                </div>
                <div className="font-display text-6xl md:text-7xl leading-none mb-3">
                  ${t.amount}
                </div>
                <p
                  className={`text-[15px] leading-relaxed mb-6 ${
                    i === 1 ? "opacity-95" : "text-ink-soft"
                  }`}
                >
                  {t.body}
                </p>
                <div className="mt-auto">
                  <PayPalDonate
                    amount={t.amount}
                    label={`Give $${t.amount}`}
                    variant={i === 1 ? "secondary" : "primary"}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK + CUSTOM */}
      <section className="py-16 md:py-24 bg-paper-deep border-b-2 border-ink">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-14">
            <div>
              <h3 className="font-display uppercase tracking-tight text-3xl md:text-5xl leading-tight mb-5">
                Or pick<br />your own amount.
              </h3>
              <p className="text-ink-soft mb-7 max-w-md">
                Recurring monthly support is the most useful thing we can
                receive — it lets us commit to families ahead of each
                school year.
              </p>
              <div className="grid grid-cols-4 gap-3 mb-4">
                {QUICK.map((a) => (
                  <PayPalDonate
                    key={a}
                    amount={a}
                    label={`$${a}`}
                    variant="secondary"
                  />
                ))}
              </div>
              <PayPalDonate label="Custom amount on PayPal →" variant="primary" />
            </div>

            <div className="bg-paper border-2 border-ink p-7 md:p-8 shadow-[6px_6px_0_var(--ink)]">
              <div className="font-display uppercase tracking-[0.2em] text-xs text-purple mb-2">
                Other ways
              </div>
              <h3 className="font-display uppercase tracking-tight text-2xl md:text-3xl leading-tight mb-5">
                Mail a check, gift stock, employer match.
              </h3>
              <ul className="space-y-4 text-[15px] text-ink-soft leading-relaxed">
                <li>
                  <strong className="text-ink block">Check:</strong>
                  Made out to <em>Helping Hands for South Sudan</em>.
                  Email us for the mailing address.
                </li>
                <li>
                  <strong className="text-ink block">Stock or DAF:</strong>
                  We accept stock gifts and donor-advised fund grants. EIN
                  82-5215402.
                </li>
                <li>
                  <strong className="text-ink block">Employer match:</strong>
                  Many Bay Area employers will match charitable
                  contributions. Ask your HR team.
                </li>
              </ul>
              <a
                href="mailto:helpinghandsforsouthsudan@gmail.com"
                className="mt-6 inline-flex items-center font-display uppercase tracking-wider text-sm border-b-2 border-ink hover:text-purple hover:border-purple pb-1"
              >
                Email us about a non-PayPal gift →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section className="py-20 md:py-24 bg-purple text-paper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display uppercase tracking-tight text-4xl md:text-6xl leading-[0.9] mb-6">
            Where your dollar goes.
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mt-10 text-left">
            {[
              { pct: "~99%", label: "Direct school costs", body: "Tuition, uniforms, books, meals — straight to the partner schools." },
              { pct: "~1%", label: "Operating overhead", body: "We don't pay anyone a salary; the board is all volunteer." },
            ].map((c) => (
              <div key={c.label} className="border-2 border-paper p-6">
                <div className="font-display text-5xl mb-1">{c.pct}</div>
                <div className="font-display uppercase tracking-[0.15em] text-xs opacity-80 mb-3">
                  {c.label}
                </div>
                <p className="text-[15px] opacity-95 leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
