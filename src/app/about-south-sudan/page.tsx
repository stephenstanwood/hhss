import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About South Sudan",
  description:
    "South Sudan has the lowest literacy rate in the world and one of the largest displaced populations. Learn about the country, the conflict, and why education is the long way out.",
};

const FACTS = [
  {
    n: "01",
    label: "Newest nation",
    title: "Independent since 2011.",
    body: "South Sudan became the world's newest country after a 2011 referendum. Two years later, civil war broke out — and a country still finding its footing was thrown back into crisis.",
  },
  {
    n: "02",
    label: "Years of conflict",
    title: "Decades of war.",
    body: "From the second Sudanese civil war through the 2013–2018 South Sudanese civil war, generations have grown up with displacement as the default. An estimated 4 million people have been forced from their homes.",
  },
  {
    n: "03",
    label: "Limited resources",
    title: "Among the lowest literacy rates on earth.",
    body: "Roughly 1 in 4 adults in South Sudan can read. For girls and rural communities, the numbers are even lower. Schools that exist often lack books, desks, electricity, and trained teachers.",
  },
  {
    n: "04",
    label: "Children in need",
    title: "Half the country is under 18.",
    body: "More than 2 million school-age children are out of school. The cost of bringing one of them into a classroom is small — usually under $200 per year. The cost of leaving them out is generational.",
  },
];

export default function AboutSouthSudan() {
  return (
    <>
      <section className="border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="font-display uppercase tracking-[0.3em] text-sm text-purple mb-6">
            Field guide
          </div>
          <h1 className="font-display uppercase tracking-tight leading-[0.85] text-[14vw] md:text-[10vw] lg:text-[8.5vw] text-ink">
            South Sudan,<br />
            <span className="scribble scribble--purple">in brief.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-ink-soft max-w-2xl leading-relaxed">
            Why this country, why these children, and why education is the
            piece that compounds. Four things to know — and one decision at
            the end of it.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
          {FACTS.map((f, i) => (
            <article
              key={f.n}
              className={`grid md:grid-cols-12 gap-8 md:gap-14 items-start ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-4">
                <div className="ribbon-num">{f.n}</div>
                <div className="mt-2 font-display uppercase tracking-[0.2em] text-xs text-ink-muted">
                  {f.label}
                </div>
              </div>
              <div className="md:col-span-8">
                <h2 className="font-display uppercase tracking-tight text-4xl md:text-6xl leading-[0.95] mb-6">
                  {f.title}
                </h2>
                <p className="text-lg text-ink-soft leading-relaxed max-w-2xl">
                  {f.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* UNHCR explainer */}
      <section className="py-16 md:py-24 bg-paper-deep border-b-2 border-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-2 border-ink bg-paper p-8 md:p-12 shadow-[8px_8px_0_var(--ink)]">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-display uppercase tracking-[0.2em] text-xs text-red">
                Where the kids end up
              </span>
              <span className="h-px flex-1 bg-ink/20" />
            </div>
            <h2 className="font-display uppercase tracking-tight text-3xl md:text-5xl leading-tight mb-5">
              Refugee camps in Uganda.
            </h2>
            <p className="text-lg text-ink-soft leading-relaxed mb-4">
              Many South Sudanese families flee south to Uganda, where the
              UNHCR runs some of the largest refugee settlements in the world.
              Conditions are crowded; schools are oversubscribed; resources
              are stretched thin.
            </p>
            <p className="text-lg text-ink-soft leading-relaxed">
              That's why four of our six partner schools are in Uganda —
              serving the displaced South Sudanese families who landed there
              and the local Ugandan communities that took them in.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-purple text-paper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display uppercase tracking-tight text-5xl md:text-7xl leading-[0.85] mb-6">
            One classroom at<br />a time.
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-9">
            We can't end a war. We can keep one kid in school for one more
            year. Stack enough of those years together and a country
            changes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center font-display uppercase tracking-wider text-base bg-paper text-ink px-8 py-4 border-2 border-paper shadow-[5px_5px_0_var(--ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_var(--ink)] transition-all"
            >
              Donate
            </Link>
            <Link
              href="/our-story"
              className="inline-flex items-center font-display uppercase tracking-wider text-base text-paper px-2 py-4 underline decoration-2 underline-offset-8 hover:opacity-80"
            >
              Read our story →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
