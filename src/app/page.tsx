import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@/components/marquee";

const STATS = [
  { num: "1,500", label: "Students in 2025" },
  { num: "6", label: "Partner schools" },
  { num: "2", label: "Countries" },
  { num: "Est. 2018", label: "Volunteer-run" },
];

const SCHOOLS = [
  { name: "Juba Integrated Primary", country: "South Sudan", img: "/photos/schools/juba.jpg" },
  { name: "Juba Integrated High", country: "South Sudan", img: "/photos/schools/juba.jpg" },
  { name: "Gulu Primary", country: "Uganda", img: "/photos/schools/gulu.jpg" },
  { name: "Gulu Central High", country: "Uganda", img: "/photos/schools/gulu.jpg" },
  { name: "Broader Vision School", country: "Uganda", img: "/photos/schools/broader-vision.jpg" },
  { name: "St. Gracious Secondary", country: "Uganda", img: "/photos/schools/st-gracious.jpg" },
];

const RECENT = [
  { src: "/photos/day_of_thanks_2024/01.jpg", caption: "Juba" },
  { src: "/photos/day_of_thanks_2024/04.jpg", caption: "Assembly" },
  { src: "/photos/day_of_thanks_2024/05.jpg", caption: "Together" },
  { src: "/photos/day_of_thanks_2024/07.jpg", caption: "South Sudan" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b-2 border-ink">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full bg-orange/10 blur-3xl" />
          <div className="absolute top-40 -right-20 w-[480px] h-[480px] rounded-full bg-purple/10 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-10 md:pb-20 relative">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="stamp text-xs">Est. 2018</span>
                <span className="font-hand text-xl text-ink-soft">a volunteer-run nonprofit →</span>
              </div>
              <h1 className="font-display uppercase tracking-tight leading-[0.85] text-[14vw] md:text-[10vw] lg:text-[8.5vw] text-ink">
                Every kid<br />
                <span className="text-purple">deserves</span><br />
                <span className="scribble">a desk.</span>
              </h1>
              <p className="mt-8 text-lg md:text-xl text-ink-soft max-w-xl leading-relaxed">
                We fund primary and secondary education for refugee
                children across <strong className="text-ink">six partner schools</strong> in
                South Sudan and Uganda. No salaries. No overhead. Just tuition,
                uniforms, books, and one good meal a day.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/donate"
                  className="inline-flex items-center font-display uppercase tracking-wider text-base bg-purple text-paper px-7 py-4 border-2 border-ink shadow-[5px_5px_0_var(--ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_var(--ink)] transition-all"
                >
                  Donate today
                </Link>
                <Link
                  href="/our-story"
                  className="inline-flex items-center font-display uppercase tracking-wider text-base text-ink px-2 py-4 underline decoration-2 underline-offset-8 decoration-red hover:text-purple"
                >
                  Read our story
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative max-w-md mx-auto lg:mx-0 lg:ml-auto">
                <div className="polaroid relative" style={{ transform: "rotate(2.5deg)" }}>
                  <div className="tape -top-3 left-10" />
                  <Image
                    src="/photos/day_of_thanks_2024/02.jpg"
                    alt="Students at a partner school in Juba"
                    width={800}
                    height={1000}
                    className="w-full h-auto block"
                  />
                  <div className="absolute bottom-3 left-0 right-0 text-center font-hand text-xl text-ink">
                    Juba, November 2024
                  </div>
                </div>
                <div
                  className="polaroid hidden md:block absolute -bottom-8 -left-12 w-44"
                  style={{ transform: "rotate(-7deg)" }}
                >
                  <Image
                    src="/photos/day_of_thanks_2024/06.jpg"
                    alt=""
                    width={300}
                    height={400}
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="bg-ink text-paper border-t-2 border-ink py-3">
          <Marquee
            items={[
              "Improving lives through education",
              "Volunteer-run since 2018",
              "Six schools, two countries",
              "99% to the children",
            ]}
          />
        </div>
      </section>

      {/* STATS */}
      <section className="border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x-2 divide-ink/15">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`py-10 px-4 text-center ${
                  i % 2 === 0 ? "border-r-2 md:border-r-2" : ""
                } ${i < 2 ? "border-b-2 md:border-b-0" : ""} border-ink/15`}
              >
                <div className="font-display text-6xl md:text-7xl text-purple leading-none">
                  {s.num}
                </div>
                <div className="mt-3 font-display uppercase tracking-[0.2em] text-xs text-ink-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION — three cards in a zine grid */}
      <section className="py-20 md:py-28 border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-10 mb-14">
            <div className="md:col-span-4">
              <div className="ribbon-num">01</div>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-display uppercase tracking-tight text-5xl md:text-7xl leading-[0.9] mb-6">
                What we do <span className="text-orange">&amp;</span><br />
                why it works.
              </h2>
              <p className="text-lg text-ink-soft max-w-2xl">
                South Sudan has the lowest literacy rate in the world.
                Decades of war displaced millions of children, many of whom
                never saw the inside of a classroom. We change that — one
                child, one school year, at a time.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                kicker: "we fund",
                title: "Tuition, uniforms, books",
                body: "The full cost of school for one child runs about $500/year — tuition, uniform, books, transportation, exam fees, and meals.",
                color: "bg-purple text-paper",
              },
              {
                kicker: "we partner",
                title: "Six schools, run locally",
                body: "Headmasters and teachers on the ground know what their students need. We resource them; they educate.",
                color: "bg-paper border-2 border-ink",
              },
              {
                kicker: "we live there",
                title: "Founder on the ground",
                body: "Gabriel moved his family back to Kampala in 2022 to be closer to the work. He visits the schools regularly and personally confirms head counts for tuition.",
                color: "bg-red text-paper",
              },
            ].map((card) => (
              <article
                key={card.title}
                className={`p-7 md:p-9 ${card.color} border-2 border-ink shadow-[6px_6px_0_var(--ink)] relative`}
              >
                <div className="font-hand text-2xl mb-4 opacity-80">
                  {card.kicker}
                </div>
                <h3 className="font-display uppercase tracking-tight text-3xl md:text-4xl leading-tight mb-4">
                  {card.title}
                </h3>
                <p className="text-[15px] leading-relaxed opacity-95">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SCHOOLS PREVIEW */}
      <section className="py-20 md:py-28 bg-paper-deep border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-10 mb-12">
            <div className="md:col-span-4">
              <div className="ribbon-num">02</div>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-display uppercase tracking-tight text-5xl md:text-7xl leading-[0.9] mb-6">
                Six partner<br />
                <span className="scribble scribble--purple">schools.</span>
              </h2>
              <p className="text-lg text-ink-soft max-w-2xl">
                Two in South Sudan. Four in Uganda — where many South Sudanese
                refugee families have settled. Every one of them serves
                children who would otherwise have no access to school.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {SCHOOLS.map((s, i) => (
              <article
                key={s.name}
                className="bg-paper border-2 border-ink overflow-hidden hover:translate-y-[-3px] transition-transform"
                style={{ transform: `rotate(${i % 2 === 0 ? "-0.4deg" : "0.4deg"})` }}
              >
                <div className="aspect-[4/3] relative bg-ink/10">
                  <Image
                    src={s.img}
                    alt={s.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="font-display uppercase tracking-wide text-xs text-purple">
                    {s.country}
                  </div>
                  <h3 className="font-display uppercase tracking-tight text-lg leading-tight mt-1">
                    {s.name}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/our-story"
              className="inline-flex items-center font-display uppercase tracking-wider text-sm border-b-2 border-ink hover:text-purple hover:border-purple pb-1"
            >
              Meet the schools and the people behind them →
            </Link>
          </div>
        </div>
      </section>

      {/* GIRLS' EDUCATION FOCUS */}
      <section className="py-20 md:py-28 border-b-2 border-ink relative overflow-hidden">
        <div className="absolute -right-20 top-10 w-[420px] h-[420px] rounded-full bg-orange/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="font-display uppercase tracking-[0.2em] text-xs text-red mb-3">
                This year's focus
              </div>
              <h2 className="font-display uppercase tracking-tight text-5xl md:text-7xl leading-[0.9] mb-6">
                More girls<br />
                <span className="text-purple">in school.</span>
              </h2>
              <p className="text-lg text-ink-soft max-w-xl leading-relaxed mb-6">
                When a family in South Sudan can only send one kid to school,
                they usually choose the boy. So girls are the most under-educated
                group in the country. We're flipping that — sending more girls
                than boys this year.
              </p>
              <blockquote className="border-l-4 border-purple pl-5 font-hand text-2xl md:text-3xl text-ink leading-snug italic">
                "Educate a man, you educate an individual.<br />
                Educate a woman, you educate a nation."
                <span className="block font-body not-italic text-sm text-ink-muted mt-3 tracking-wider uppercase">
                  — African proverb
                </span>
              </blockquote>
            </div>
            <div className="lg:col-span-5">
              <div className="relative max-w-sm mx-auto lg:ml-auto">
                <div className="polaroid" style={{ transform: "rotate(-3deg)" }}>
                  <div className="tape -top-3 right-10" />
                  <Image
                    src="/photos/day_of_thanks_2024/03.jpg"
                    alt="Students at a partner school"
                    width={600}
                    height={750}
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT MOMENTS — photo wall */}
      <section className="py-20 md:py-28 border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-10 mb-12">
            <div className="md:col-span-4">
              <div className="ribbon-num">03</div>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-display uppercase tracking-tight text-5xl md:text-7xl leading-[0.9] mb-6">
                On the<br />
                <span className="text-orange">ground.</span>
              </h2>
              <p className="text-lg text-ink-soft max-w-2xl">
                A few moments from our partner schools — the kids, the
                classrooms, and the days that make this work possible.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {RECENT.map((p, i) => (
              <div
                key={p.src}
                className="polaroid"
                style={{ transform: `rotate(${[-2, 1.5, -1, 2.4][i]}deg)` }}
              >
                <div className="relative aspect-[3/4] bg-ink/10">
                  <Image
                    src={p.src}
                    alt={p.caption}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="text-center font-hand text-base md:text-lg text-ink mt-1.5">
                  {p.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 bg-purple text-paper overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Marquee
            items={["donate", "give", "support", "ayúdanos", "education", "future", "act"]}
            separator="○"
          />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="font-display uppercase tracking-tight text-6xl md:text-8xl leading-[0.85] mb-6">
            $500 sends a child<br />
            <span className="outline-text" style={{ WebkitTextStroke: "2px var(--paper)" }}>
              to school
            </span>{" "}
            for a year.
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10">
            That covers tuition, books, uniform, meals — the works. $35 covers
            just a uniform. $25 covers a term of school supplies. Pick whatever
            works for you. We're an all-volunteer 501(c)(3) with about 1% overhead.
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
