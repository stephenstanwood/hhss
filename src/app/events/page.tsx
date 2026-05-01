import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events & Press",
  description:
    "Speaking events, press coverage, and recent appearances. Helping Hands for South Sudan founder Gabriel Nyok speaks regularly across the Bay Area.",
};

const TALKS = [
  { date: "Feb 2023", venue: "Presbyterian Church of Los Gatos", location: "Los Gatos, CA", note: "Uganda / South Sudan mission trip recap" },
  { date: "Mar 2019", venue: "Pacific Coast Lecture Group (PCLG)", location: "Bay Area, CA", note: null },
];

const PRESS = [
  { outlet: "KRON 4", color: "bg-red text-paper" },
  { outlet: "The Borgen Project", color: "bg-orange text-paper" },
  { outlet: "500 Words Magazine", color: "bg-green text-paper" },
];

export default function Events() {
  return (
    <>
      <section className="border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="font-display uppercase tracking-[0.3em] text-sm text-purple mb-6">
            Events &amp; press
          </div>
          <h1 className="font-display uppercase tracking-tight leading-[0.85] text-[14vw] md:text-[10vw] lg:text-[8.5vw] text-ink">
            Out in the<br />
            <span className="scribble scribble--purple">community.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-ink-soft max-w-2xl leading-relaxed">
            Gabriel speaks regularly across the Bay Area and beyond. A few of
            the more recent talks, and a couple of the press features that
            put us on the map.
          </p>
        </div>
      </section>

      {/* TALKS — newspaper-listing style */}
      <section className="py-16 md:py-24 border-b-2 border-ink">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="font-display uppercase tracking-tight text-4xl md:text-6xl">
              Recent talks
            </h2>
            <span className="font-hand text-xl text-ink-muted">2018 → today</span>
          </div>
          <ul className="border-t-2 border-ink">
            {TALKS.map((t) => (
              <li
                key={`${t.date}-${t.venue}`}
                className="border-b border-ink/15 grid grid-cols-12 gap-4 py-5 items-baseline hover:bg-paper-deep/40 transition-colors"
              >
                <div className="col-span-3 md:col-span-2 font-display uppercase tracking-[0.15em] text-xs md:text-sm text-purple">
                  {t.date}
                </div>
                <div className="col-span-9 md:col-span-7 font-display uppercase tracking-tight text-lg md:text-2xl leading-tight">
                  {t.venue}
                  {t.note && (
                    <span className="block font-body normal-case tracking-normal text-sm text-ink-soft mt-1">
                      {t.note}
                    </span>
                  )}
                </div>
                <div className="col-span-12 md:col-span-3 text-sm text-ink-soft md:text-right">
                  {t.location}
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-hand text-lg text-ink-muted">
            More on the way as we dig through the archive.
          </p>

          <div className="mt-10 border-2 border-dashed border-ink/40 p-6 md:p-8 text-center bg-paper-deep/40">
            <p className="font-hand text-2xl mb-3 text-ink">
              Want Gabriel at your group?
            </p>
            <p className="text-ink-soft mb-5 max-w-xl mx-auto">
              Schools, churches, civic groups, book clubs, corporate
              ERGs — we'll come to you. There's no fee.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center font-display uppercase tracking-wider text-sm bg-purple text-paper px-6 py-3 border-2 border-ink shadow-[4px_4px_0_var(--ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--ink)] transition-all"
            >
              Request a talk →
            </Link>
          </div>
        </div>
      </section>

      {/* PRESS — bold cards */}
      <section className="py-16 md:py-24 bg-paper-deep border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-display uppercase tracking-[0.2em] text-xs text-red mb-3">
            In the news
          </div>
          <h2 className="font-display uppercase tracking-tight text-4xl md:text-6xl mb-12">
            Press &amp; features.
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {PRESS.map((p, i) => (
              <article
                key={p.outlet}
                className={`${p.color} border-2 border-ink p-8 md:p-10 shadow-[6px_6px_0_var(--ink)] flex items-center justify-center min-h-[180px]`}
                style={{ transform: `rotate(${[-0.5, 0.4, -0.3][i]}deg)` }}
              >
                <div className="font-display uppercase tracking-[0.05em] text-3xl md:text-4xl text-center leading-tight">
                  {p.outlet}
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 font-hand text-lg text-ink-muted">
            Featured in. Links coming as we track them down.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-ink text-paper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display uppercase tracking-tight text-5xl md:text-7xl leading-[0.85] mb-6">
            Get the<br />
            <span className="text-orange">word out.</span>
          </h2>
          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto mb-9">
            Know a group that should hear Gabriel speak? Or a journalist
            who'd be interested in the story? Tell them. Or tell us.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center font-display uppercase tracking-wider text-lg bg-paper text-ink px-10 py-5 border-2 border-paper shadow-[6px_6px_0_var(--purple)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_var(--purple)] transition-all"
          >
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  );
}
