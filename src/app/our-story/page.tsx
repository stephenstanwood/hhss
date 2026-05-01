import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Founded by Lost Boy Gabriel Nyok. Helping Hands for South Sudan is a 501(c)(3) nonprofit with six partner schools across South Sudan and Uganda.",
};

const TIMELINE = [
  {
    year: "1987",
    title: "Walking out of Sudan.",
    body: "At seven years old, Gabriel Nyok fled the second Sudanese civil war on foot — one of an estimated 20,000 boys who became known as the Lost Boys of Sudan. The walk took years, crossed three countries, and ended in the Kakuma refugee camp in Kenya.",
  },
  {
    year: "2001",
    title: "Resettled in the U.S.",
    body: "Gabriel was one of roughly 3,800 Lost Boys resettled in the United States. He eventually made his way to the Bay Area, learned English on the job, and went to work — putting himself through school, supporting family in South Sudan, and building a life from scratch.",
  },
  {
    year: "2017",
    title: "Going home.",
    body: "Gabriel returned to South Sudan for the first time in three decades. He saw what war had taken — and what was still possible. The kids he met in Juba had nothing, but they wanted to be in school more than anything.",
  },
  {
    year: "2018",
    title: "Helping Hands begins.",
    body: "Back in California, Gabriel filed for 501(c)(3) status with help from a small group of volunteers. The mission was simple: pay for school. No salaries, no overhead — just tuition, uniforms, books, and meals.",
  },
  {
    year: "2020 – 2024",
    title: "Six schools, two countries.",
    body: "Word spread. Schools in Uganda — where many South Sudanese refugee families had settled — reached out. We added partners in Gulu, Entebbe, and Lira. Today we support six schools and a few hundred children every term.",
  },
  {
    year: "Today",
    title: "Still volunteer-run.",
    body: "Every dollar still has to fight for itself. We run on donations, board volunteer hours, and Gabriel's biennial trips home to walk the schools and check in with the kids.",
  },
];

const BOARD = [
  {
    name: "Gabriel Nyok",
    role: "Founder & Executive Director",
    bio: "Lost Boy of Sudan. Resettled in the United States in 2001. Founded HH4SS in 2018 to fund education for refugee children in his home country.",
  },
  {
    name: "Roda Nyok",
    role: "Co-Founder",
    bio: "Gabriel's wife and partner in the work. Leads day-to-day coordination with families and partner schools on the ground.",
  },
  {
    name: "Connie Maurer",
    role: "Board Member",
    bio: "Long-time volunteer and community organizer. Drives donor outreach and event coordination across the Bay Area.",
  },
  {
    name: "Dave Cleveland",
    role: "Board Member",
    bio: "Photographer and storyteller. Has accompanied Gabriel on multiple trips to South Sudan and Uganda.",
  },
];

export default function OurStory() {
  return (
    <>
      <section className="border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <div className="font-display uppercase tracking-[0.3em] text-sm text-purple mb-6">
                Our story
              </div>
              <h1 className="font-display uppercase tracking-tight leading-[0.85] text-[14vw] md:text-[10vw] lg:text-[8.5vw] text-ink">
                A Lost Boy<br />
                <span className="text-purple">went home,</span><br />
                <span className="scribble">and got to work.</span>
              </h1>
              <p className="mt-8 text-lg md:text-xl text-ink-soft max-w-xl leading-relaxed">
                Helping Hands for South Sudan started with one
                question: <em>what would it cost to keep these kids in
                school?</em> The answer turned out to be small, and
                the work turned out to be big.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative max-w-sm mx-auto lg:ml-auto">
                <div className="polaroid" style={{ transform: "rotate(-3deg)" }}>
                  <div className="tape -top-3 left-12" />
                  <Image
                    src="/photos/gabriel/portrait.jpg"
                    alt="Gabriel Nyok, founder"
                    width={600}
                    height={750}
                    className="w-full h-auto block"
                  />
                  <div className="text-center font-hand text-xl mt-1">
                    Gabriel Nyok, founder
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 md:py-24 border-b-2 border-ink">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-display uppercase tracking-[0.2em] text-xs text-red mb-3">
            How we got here
          </div>
          <h2 className="font-display uppercase tracking-tight text-5xl md:text-7xl leading-[0.9] mb-12">
            The walk, the<br />
            <span className="text-orange">return,</span> the work.
          </h2>

          <ol className="relative border-l-2 border-ink/20 ml-3 space-y-12">
            {TIMELINE.map((t) => (
              <li key={t.year} className="relative pl-8">
                <span className="absolute -left-[11px] top-2 w-5 h-5 bg-purple border-2 border-ink rounded-full" />
                <div className="font-display uppercase tracking-[0.2em] text-xs text-purple mb-2">
                  {t.year}
                </div>
                <h3 className="font-display uppercase tracking-tight text-2xl md:text-3xl leading-tight mb-3">
                  {t.title}
                </h3>
                <p className="text-lg text-ink-soft leading-relaxed">
                  {t.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SPEAKER STRIP */}
      <section className="py-16 md:py-20 bg-paper-deep border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
            <div className="polaroid max-w-md mx-auto md:mx-0" style={{ transform: "rotate(2deg)" }}>
              <Image
                src="/photos/gabriel/speaking.jpg"
                alt="Gabriel speaking at a Bay Area event"
                width={800}
                height={600}
                className="w-full h-auto block"
              />
              <div className="text-center font-hand text-lg mt-1">
                Speaking at PCLG, 2025
              </div>
            </div>
            <div>
              <h3 className="font-display uppercase tracking-tight text-3xl md:text-5xl leading-tight mb-5">
                Bring Gabriel<br />to your group.
              </h3>
              <p className="text-lg text-ink-soft mb-6 leading-relaxed">
                Gabriel speaks regularly to schools, churches, civic groups,
                and book clubs across the Bay Area and beyond — sharing his
                story, the history of the Lost Boys, and the work happening
                today in South Sudan and Uganda.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center font-display uppercase tracking-wider text-sm bg-ink text-paper px-6 py-3 border-2 border-ink shadow-[4px_4px_0_var(--purple)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--purple)] transition-all"
              >
                Request a talk →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BOARD */}
      <section className="py-16 md:py-24 border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-display uppercase tracking-[0.2em] text-xs text-red mb-3">
            Board of directors
          </div>
          <h2 className="font-display uppercase tracking-tight text-5xl md:text-7xl leading-[0.9] mb-12">
            All volunteers.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BOARD.map((p, i) => (
              <article
                key={p.name}
                className="bg-paper border-2 border-ink p-6 shadow-[5px_5px_0_var(--ink)] relative"
                style={{ transform: `rotate(${[-0.6, 0.5, -0.4, 0.7][i]}deg)` }}
              >
                <div className="font-display uppercase tracking-tight text-2xl leading-tight mb-1">
                  {p.name}
                </div>
                <div className="font-display uppercase tracking-[0.15em] text-xs text-purple mb-4">
                  {p.role}
                </div>
                <p className="text-[15px] text-ink-soft leading-relaxed">
                  {p.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-purple text-paper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display uppercase tracking-tight text-5xl md:text-7xl leading-[0.85] mb-6">
            Want to help us<br />keep going?
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-9">
            We're an all-volunteer 501(c)(3). Every dollar funds a real kid
            sitting in a real classroom right now.
          </p>
          <Link
            href="/donate"
            className="inline-flex items-center font-display uppercase tracking-wider text-lg bg-paper text-ink px-10 py-5 border-2 border-paper shadow-[6px_6px_0_var(--ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_var(--ink)] transition-all"
          >
            Donate now →
          </Link>
        </div>
      </section>
    </>
  );
}
