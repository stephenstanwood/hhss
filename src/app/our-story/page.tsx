import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Founded in 2018 by Gabriel Nyok. Helping Hands for South Sudan is a 501(c)(3) nonprofit with six partner schools across South Sudan and Uganda.",
};

type TimelineEntry = {
  year: string;
  title: string;
  body: string;
  img?: string;
  imgAlt?: string;
  imgCaption?: string;
  tilt?: number;
};

const TIMELINE: TimelineEntry[] = [
  {
    year: "1983",
    title: "Born near the Nile.",
    body: "Gabriel Akim Nyok is born in a clinic in South Sudan. The middle name Akim — \"doctor\" in Dinka — comes from the rarity of being born in a clinic at all.",
  },
  {
    year: "~1985",
    title: "Carried out of South Sudan.",
    body: "At two or three years old, Gabriel is among the Lost Boys and Girls of Sudan — over 20,000 children separated from their families by the civil war. Red Cross volunteers carry him from a displaced-persons camp in South Sudan to a UNHCR camp in Northern Kenya. He grows up there as an orphan with his brother.",
  },
  {
    year: "2006",
    title: "Resettled in California.",
    body: "After earning a UNICEF scholarship to attend school in Kenya — and then teaching at the camp himself — Gabriel is among the South Sudanese refugees brought to the U.S. by the U.S. government. He lands in the Bay Area and enrolls at De Anza College.",
    img: "/photos/field/gabriel-arriving-usa.jpg",
    imgAlt: "Gabriel and other South Sudanese young people on the day they arrived in the U.S., 2006",
    imgCaption: "First day in the U.S., 2006",
    tilt: -1.5,
  },
  {
    year: "2011",
    title: "First trip back to Africa.",
    body: "Gabriel visits South Sudanese refugee settlements in Uganda. Seeing children living the same way he had a few years earlier, he resolves to make a difference. He starts personally sending refugee children to school each year through his own donations.",
    img: "/photos/field/gabriel-camp-sign.jpg",
    imgAlt: "Gabriel at the entrance to Kiryandongo Refugee Settlement, Uganda",
    imgCaption: "Kiryandongo, Uganda",
    tilt: 1.2,
  },
  {
    year: "Feb 2018",
    title: "Helping Hands is founded.",
    body: "Gabriel and a group of fellow former Lost Boys file for 501(c)(3) status. The IRS grants exemption with an effective date of February 26, 2018. The same year, Gabriel earns his BS from San Jose State — Justice Studies major, Human Rights minor.",
  },
  {
    year: "Sep 2022",
    title: "Family moves back to Africa.",
    body: "After 16 years in the U.S. and five children born in California, Gabriel and Roda move the family to Kampala, Uganda — closer to the schools, the camps, and the work. He returns to the U.S. periodically for speaking and fundraising.",
  },
  {
    year: "2023",
    title: "Two new schools in Juba.",
    body: "HHSS helps build the Juba Integrated Elementary School and the Juba Integrated High School. By 2024, the org is supporting roughly 750 children at the Juba schools alone.",
    img: "/photos/field/juba-classroom.jpg",
    imgAlt: "Students at the Juba Integrated School",
    imgCaption: "Juba",
    tilt: -1.0,
  },
  {
    year: "2025",
    title: "1,500 students at six schools.",
    body: "Across South Sudan and Uganda, HHSS sponsors 1,500 students at six partner schools. The board is still all volunteer. Gabriel still takes no income from donations.",
    img: "/photos/field/students-feb23.jpg",
    imgAlt: "Students at a partner school",
    imgCaption: "Students at a partner school",
    tilt: 1.4,
  },
];

const BOARD = [
  {
    name: "Gabriel Akim Nyok",
    role: "Founder & Chairman",
    img: "/photos/board/gabriel-nyok.jpg",
    bio: "Founded HHSS in 2018. Lives in Kampala. Takes no income from donations.",
  },
  {
    name: "Ron Dickel",
    role: "Secretary / Treasurer",
    img: "/photos/board/ron-dickel.jpg",
    bio: "Retired tax VP from Intel. Former Treasurer at Presbyterian Church of Los Gatos and director at Pittsburgh Theological Seminary.",
  },
  {
    name: "Constance Maurer",
    role: "Board Member",
    img: "/photos/board/connie-maurer.jpg",
    bio: "Retired sales pro from Honeywell. 20+ years on the board of Friends for Youth in Redwood City. Past president, Woodside Terrace Kiwanis.",
  },
  {
    name: "Brenda Costanzo",
    role: "Board Member",
    img: "/photos/board/brenda-costanzo.webp",
    bio: "Retired engineering director from Lockheed Martin. 2020 Silicon Valley Business Journal Woman of Influence. Tutors math; chairs Adult Ed at PCLG.",
  },
];

const ADVISORS = [
  {
    name: "Rev. Dr. David G. Watermulder",
    role: "Advisor",
    img: "/photos/board/david-watermulder.jpg",
    bio: "Pastor & Head of Staff at Presbyterian Church of Los Gatos. Peace Corps West Africa. Princeton Theological Seminary, Doctorate from Portland Seminary. Has traveled to Africa with the team multiple times.",
  },
  {
    name: "David Anyieth",
    role: "Advisor",
    img: "/photos/board/david-garang.jpg",
    bio: "Former Lost Boy of Sudan.",
  },
  { name: "Garang Bol", role: "Advisor", bio: "Former Lost Boy of Sudan." },
  { name: "Paul Kuai", role: "Advisor", bio: "Former Lost Boy of Sudan." },
  { name: "Sri Narasimhan", role: "Advisor", bio: "Former Lost Boy of Sudan." },
];

const SS_VOLUNTEERS = [
  "Isaiah Mayen",
  "Michael Kui",
  "Taban Agau",
  "Samuel Ayuen",
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
                Gabriel<br />
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
                <div className={t.img ? "grid md:grid-cols-12 gap-6 items-start" : ""}>
                  <div className={t.img ? "md:col-span-7" : ""}>
                    <p className="text-lg text-ink-soft leading-relaxed">
                      {t.body}
                    </p>
                  </div>
                  {t.img && (
                    <figure
                      className="md:col-span-5 polaroid max-w-xs"
                      style={{ transform: `rotate(${t.tilt ?? -1}deg)` }}
                    >
                      <div className="relative aspect-[4/3] bg-ink/10">
                        <Image
                          src={t.img}
                          alt={t.imgAlt ?? ""}
                          fill
                          sizes="320px"
                          className="object-cover"
                        />
                      </div>
                      {t.imgCaption && (
                        <figcaption className="text-center font-hand text-sm mt-1.5">
                          {t.imgCaption}
                        </figcaption>
                      )}
                    </figure>
                  )}
                </div>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {BOARD.map((p, i) => {
              const tilt = [-1.0, 0.6, -0.5, 0.8][i] ?? 0;
              return (
                <article
                  key={p.name}
                  className="bg-paper border-2 border-ink shadow-[5px_5px_0_var(--ink)] overflow-hidden"
                  style={{ transform: `rotate(${tilt}deg)` }}
                >
                  <div className="relative aspect-[4/5] bg-ink/10">
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="font-display uppercase tracking-tight text-lg leading-tight">
                      {p.name}
                    </div>
                    <div className="font-display uppercase tracking-[0.15em] text-[10px] text-purple mt-1 mb-3">
                      {p.role}
                    </div>
                    <p className="text-[13px] text-ink-soft leading-relaxed">
                      {p.bio}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ADVISORS */}
      <section className="py-16 md:py-24 bg-paper-deep border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <div className="font-display uppercase tracking-[0.2em] text-xs text-red mb-3">
                Advisors
              </div>
              <h2 className="font-display uppercase tracking-tight text-4xl md:text-5xl leading-[0.95] mb-5">
                People keeping us honest.
              </h2>
              <p className="text-ink-soft leading-relaxed">
                Several of our advisors are themselves former Lost Boys and
                Girls of Sudan — they made it out, made lives in the U.S., and
                turned around to help the next generation.
              </p>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-5">
              {ADVISORS.map((a) => (
                <article
                  key={a.name}
                  className="bg-paper border-2 border-ink p-5 flex gap-4"
                >
                  {a.img ? (
                    <div className="relative w-16 h-16 shrink-0 bg-ink/10">
                      <Image
                        src={a.img}
                        alt={a.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 shrink-0 bg-ink/10 flex items-center justify-center font-display uppercase text-xl text-ink-muted">
                      {a.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </div>
                  )}
                  <div>
                    <div className="font-display uppercase tracking-tight text-base leading-tight">
                      {a.name}
                    </div>
                    <div className="font-display uppercase tracking-[0.15em] text-[10px] text-purple mt-0.5 mb-1.5">
                      {a.role}
                    </div>
                    <p className="text-[13px] text-ink-soft leading-relaxed">
                      {a.bio}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOUTH SUDANESE VOLUNTEERS */}
      <section className="py-16 md:py-20 border-b-2 border-ink">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-display uppercase tracking-[0.2em] text-xs text-red mb-3">
            On the ground
          </div>
          <h2 className="font-display uppercase tracking-tight text-4xl md:text-5xl leading-[0.95] mb-6">
            South Sudanese volunteers.
          </h2>
          <p className="text-lg text-ink-soft max-w-2xl mb-8 leading-relaxed">
            We're based in California, so it matters to have feet on the ground
            in the communities we're trying to help. These volunteers handle
            day-to-day coordination — and we're grateful for them.
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SS_VOLUNTEERS.map((name, i) => (
              <li
                key={name}
                className="bg-paper border-2 border-ink p-5 font-display uppercase tracking-tight text-lg leading-tight"
                style={{ transform: `rotate(${[-0.5, 0.4, -0.3, 0.5][i]}deg)` }}
              >
                {name}
              </li>
            ))}
          </ul>
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
