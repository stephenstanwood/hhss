import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events & Press",
  description:
    "Talks, videos, and press coverage. Helping Hands for South Sudan founder Gabriel Nyok speaks regularly to Bay Area groups when in California.",
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

const TALK_HIGHLIGHTS: Talk[] = [
  { date: "Nov 23, 2025", venue: "Presbyterian Church of Los Gatos", location: "Los Gatos, CA", note: "Update on hundreds of children sponsored, head-count audits before tuition payments, and rising costs from civil unrest." },
  { date: "Dec 15, 2024", venue: "Presbyterian Church of Los Gatos", location: "Los Gatos, CA", note: "Food scarcity and immediate needs — windows, doors, dormitory bunk beds — at the new Juba schools." },
  { date: "Feb 2023", venue: "Board members visit East Africa", location: "Uganda + South Sudan", note: "Ron Dickel, Marion Dickel, and Rev. David Watermulder visit Gulu Primary, Gulu Central High, Juba Integrated Primary, and Panyndli Refugee Camp." },
  { date: "Jan 2023", venue: "Los Altos Christian School", location: "Los Altos, CA", note: "Students raised $2,000 in a fundraiser after Gabriel's visit." },
  { date: "Aug 28, 2022", venue: "Venture Christian Church", location: "Los Gatos, CA", note: "Talk led to sponsorship of education for six refugee children." },
  { date: "Oct 11, 2017", venue: "World Affairs Council panel", location: "San Francisco, CA", note: "Moderated by Jane Wales, CEO of World Affairs and the Global Philanthropy Forum." },
];

const VIDEOS = [
  {
    id: "FKVRHtWJimQ",
    start: 1,
    eyebrow: "PCLG · Nov 2025",
    title: "Gabriel updates the congregation.",
    note: "Hundreds of children sponsored, head-count audits before tuition payments, and rising costs from civil unrest in East Africa.",
  },
  {
    id: "SPmvrtZbKGw",
    eyebrow: "PCLG · 2018",
    title: "Gabriel tells his story.",
    note: "An 8-minute talk at Presbyterian Church of Los Gatos: Gabriel's journey out of South Sudan and the start of HH4SS, in his own words.",
  },
  {
    id: "rcCg63zZJXs",
    eyebrow: "Trip · Feb 2020",
    title: "A trip set to music.",
    note: "Short musical video from the team's February 2020 trip to South Sudan and Uganda: the camps, the schools, the kids.",
  },
];

const PRESS = [
  {
    outlet: "KRON 4",
    title: "Bay Area Sudanese community calls for end to violence",
    note: "Local news segment featuring Rev. David Watermulder responding to escalating conflict in South Sudan.",
    href: "https://www.kron4.com/news/bay-area/bay-area-sudanese-community-calls-for-end-to-violence/",
    color: "bg-red text-paper",
    shadow: "var(--ink)",
  },
  {
    outlet: "The Borgen Project",
    title: "5 Charities Operating in South Sudan",
    note: "HHSS featured among the leading charities working in South Sudan, alongside national-scale operations like Action Against Hunger and Save the Children.",
    href: "https://borgenproject.org/charities-operating-in-south-sudan/",
    color: "bg-orange text-ink",
    shadow: "var(--ink)",
  },
  {
    outlet: "500 Words Magazine",
    title: "The Helping Hands of Sudan",
    note: "Listed among local and international charities profiled by the leading magazine on the two Sudans.",
    href: "https://500wordsmag.com/suda-lists/the-helping-hands-of-sudan/",
    color: "bg-green text-paper",
    shadow: "var(--ink)",
  },
];

export default function Events() {
  return (
    <>
      {/* HERO */}
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
            Gabriel lives in Uganda now and the work is mostly there, but he
            still comes back to California a few times a year for talks and
            updates. Recent talks, videos, and press below.
          </p>
        </div>
      </section>

      {/* WATCH — embedded videos */}
      <section className="bg-ink text-paper py-16 md:py-24 border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-display uppercase tracking-[0.2em] text-xs text-paper/60 mb-3">
            Watch
          </div>
          <h2 className="font-display uppercase tracking-tight text-4xl md:text-6xl leading-[0.95] mb-10 md:mb-14">
            Gabriel and the work,<br />
            <span className="text-orange">on video.</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {VIDEOS.map((v) => (
              <article key={v.id}>
                <div className="aspect-video w-full bg-black border-2 border-paper/20 overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}${v.start ? `?start=${v.start}` : ""}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="mt-5">
                  <div className="font-display uppercase tracking-[0.15em] text-[11px] text-paper/60 mb-2">
                    {v.eyebrow}
                  </div>
                  <h3 className="font-display uppercase tracking-tight text-2xl md:text-3xl leading-tight mb-2">
                    {v.title}
                  </h3>
                  <p className="text-paper/75 leading-relaxed text-[15px]">
                    {v.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS */}
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
              <a
                key={p.outlet}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${p.color} border-2 border-ink p-7 md:p-8 shadow-[6px_6px_0_var(--ink)] flex flex-col h-full hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_var(--ink)] transition-all`}
                style={{ transform: `rotate(${[-0.5, 0.4, -0.3][i]}deg)` }}
              >
                <div className="font-display uppercase tracking-[0.05em] text-2xl md:text-3xl leading-tight mb-2">
                  {p.outlet}
                </div>
                <div className="font-display uppercase tracking-tight text-base md:text-lg leading-snug mb-3 opacity-95">
                  {p.title}
                </div>
                <p className="text-[14px] opacity-90 leading-relaxed flex-1">
                  {p.note}
                </p>
                <div className="font-display uppercase tracking-[0.15em] text-[11px] mt-5 opacity-80">
                  Read →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TALKS */}
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
              Recent talks
            </h2>
            <span className="font-hand text-xl text-ink-muted">a few highlights</span>
          </div>
          <ul className="border-t-2 border-ink">
            {TALK_HIGHLIGHTS.map((t) => (
              <li
                key={`${t.date}-${t.venue}`}
                className="border-b border-ink/15 grid grid-cols-12 gap-4 py-5 items-baseline"
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
            Know a journalist or a group that should hear about the work?
            Send them this page. Or tell us.
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
