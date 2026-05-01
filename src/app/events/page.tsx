import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events & Press",
  description:
    "Speaking events, press coverage, and recent appearances. Helping Hands for South Sudan founder Gabriel Nyok speaks regularly across the Bay Area.",
};

type Talk = { date: string; venue: string; location: string; note?: string };

const UPCOMING: Talk[] = [
  {
    date: "Summer 2026",
    venue: "Team trip to East Africa",
    location: "Uganda + South Sudan",
    note: "Board members Ron Dickel and Rev. David Watermulder visit the partner schools and meet with Gabriel, teachers, and administrators.",
  },
];

const TALKS: Talk[] = [
  { date: "Nov 23, 2025", venue: "Presbyterian Church of Los Gatos", location: "Los Gatos, CA", note: "Gabriel updates the congregation on hundreds of children supported and rising costs." },
  { date: "Dec 22, 2024", venue: "Gilroy Presbyterian Church", location: "Gilroy, CA" },
  { date: "Dec 15, 2024", venue: "Presbyterian Church of Los Gatos", location: "Los Gatos, CA", note: "Discussion of food scarcity + needs for windows, doors, and dormitory bunk beds at the new schools." },
  { date: "Dec 10, 2023", venue: "Presbyterian Church of Los Gatos", location: "Los Gatos, CA" },
  { date: "Nov 26, 2023", venue: "Kiwanis Club of San Carlos", location: "San Carlos, CA" },
  { date: "Feb 2023", venue: "Board members visit East Africa", location: "Uganda + South Sudan", note: "Ron Dickel, Marion Dickel, and Pastor David Watermulder visit Gulu Primary, Gulu Central High, Juba Integrated Primary, and Panyndli Refugee Camp." },
  { date: "Feb 26, 2023", venue: "San Martin Presbyterian Church", location: "San Martin, CA" },
  { date: "Feb 26, 2023", venue: "Gilroy Presbyterian Church", location: "Gilroy, CA", note: "Q&A with Pastor Trevor Van Laar during worship." },
  { date: "Feb 19, 2023", venue: "WestGate Church, Saratoga Campus", location: "San Jose, CA" },
  { date: "Jan 2023", venue: "Los Altos Christian School", location: "Los Altos, CA", note: "Students raised $2,000 in a fundraiser after Gabriel's visit." },
  { date: "Sep 2022", venue: "The Big Move", location: "Kampala, Uganda", note: "After 16 years in the U.S., Gabriel and Roda move the family back to East Africa." },
  { date: "Sep 19, 2022", venue: "Burlingame High School", location: "Burlingame, CA" },
  { date: "Sep 15, 2022", venue: "Lucille M. Nixon Elementary", location: "Stanford, CA", note: "The school Gabriel's own children attended." },
  { date: "Aug 28, 2022", venue: "Venture Christian Church", location: "Los Gatos, CA", note: "Led to sponsorship of education for six refugee children." },
  { date: "Jan 30, 2022", venue: "WestGate Church, South Hills Campus", location: "San Jose, CA" },
  { date: "Dec 9, 2018", venue: "Presbyterian Church of Los Gatos", location: "Los Gatos, CA" },
  { date: "Dec 20, 2018", venue: "Kiwanis Club of Redwood City", location: "Redwood City, CA" },
  { date: "Jun 20, 2018", venue: "UNHCR World Refugee Day panel", location: "SF Veterans War Memorial", note: "Part of the 70th anniversary of the Universal Declaration of Human Rights." },
  { date: "Oct 11, 2017", venue: "World Affairs Council panel", location: "San Francisco, CA", note: "Moderated by Jane Wales (CEO of World Affairs and Global Philanthropy Forum)." },
  { date: "Aug 9, 2017", venue: "ENGAGE: The South Sudan Migration Story", location: "Union Square, SF", note: "Panel with Diana Essex-Lettieri (Asylum Access) and Valentino Achak Deng." },
  { date: "Jan 3, 2015", venue: "Presbyterian Church of Los Gatos", location: "Los Gatos, CA" },
];

const PRESS = [
  { outlet: "KRON 4", note: "Bay Area news segment featuring Pastor Dave Watermulder.", color: "bg-red text-paper" },
  { outlet: "The Borgen Project", note: "Featured in \"Five Charities Operating in South Sudan\".", color: "bg-orange text-paper" },
  { outlet: "500 Words Magazine", note: "Listed among leading charities working in the Sudans.", color: "bg-green text-paper" },
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
          {UPCOMING.length > 0 && (
            <div className="mb-12">
              <div className="font-display uppercase tracking-[0.2em] text-xs text-red mb-3">
                Upcoming
              </div>
              <ul className="space-y-4">
                {UPCOMING.map((t) => (
                  <li
                    key={`${t.date}-${t.venue}`}
                    className="bg-purple text-paper border-2 border-ink p-5 md:p-6 shadow-[5px_5px_0_var(--ink)]"
                  >
                    <div className="font-display uppercase tracking-[0.15em] text-xs opacity-80 mb-1">
                      {t.date} · {t.location}
                    </div>
                    <div className="font-display uppercase tracking-tight text-2xl md:text-3xl leading-tight mb-2">
                      {t.venue}
                    </div>
                    {t.note && <p className="text-[15px] opacity-95 leading-relaxed">{t.note}</p>}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex items-baseline justify-between mb-6">
            <h2 className="font-display uppercase tracking-tight text-4xl md:text-6xl">
              Past talks
            </h2>
            <span className="font-hand text-xl text-ink-muted">2015 → today</span>
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
                className={`${p.color} border-2 border-ink p-7 md:p-9 shadow-[6px_6px_0_var(--ink)]`}
                style={{ transform: `rotate(${[-0.5, 0.4, -0.3][i]}deg)` }}
              >
                <div className="font-display uppercase tracking-[0.05em] text-2xl md:text-3xl leading-tight mb-3">
                  {p.outlet}
                </div>
                <p className="text-[14px] opacity-95 leading-relaxed">
                  {p.note}
                </p>
              </article>
            ))}
          </div>
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
