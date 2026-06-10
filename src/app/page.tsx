import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@/components/marquee";
import { JubaClock } from "@/components/juba-clock";
import { AnimatedCounter } from "@/components/animated-counter";
import { SchoolsMap } from "@/components/schools-map";
import { WallOfKids } from "@/components/wall-of-kids";
import { Testimonials } from "@/components/testimonials";
import { Reveal } from "@/components/reveal";
import { TornEdge } from "@/components/torn-edge";
import { YearBuilder } from "@/components/year-builder";

type Stat =
  | { kind: "num"; value: number; suffix?: string; prefix?: string; label: string }
  | { kind: "text"; text: string; label: string };

const STATS: Stat[] = [
  { kind: "num", value: 1500, label: "Supported last year" },
  { kind: "num", value: 6, label: "Partner schools" },
  { kind: "num", value: 1, suffix: "%", prefix: "~", label: "Operating overhead" },
  { kind: "text", text: "Est. 2018", label: "Volunteer-run" },
];

export default function Home() {
  return (
    <>
      {/* HERO — the cover of the zine */}
      <section className="relative overflow-hidden border-b-2 border-ink">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full bg-orange/10 blur-3xl" />
          <div className="absolute top-40 -right-20 w-[480px] h-[480px] rounded-full bg-purple/10 blur-3xl" />
        </div>

        {/* Masthead — issue line, like the top of a field report */}
        <div className="relative border-b border-ink/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-x-6 gap-y-1 font-display uppercase tracking-[0.2em] text-[10px] md:text-[11px] text-ink-muted">
            <span>
              <span className="text-red" aria-hidden="true">✦ </span>
              Field report · June 2026
            </span>
            <span className="hidden sm:inline">Juba · Gulu · Lira · Kampala</span>
            <span className="hidden md:inline">Vol. 9 · free · take one</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-16 pb-12 md:pb-20 relative">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span className="stamp text-xs">Est. 2018</span>
                <JubaClock />
              </div>
              <Reveal variant="rise">
                <h1 className="font-display uppercase tracking-tight leading-[0.85] text-[14vw] md:text-[10vw] lg:text-[8.5vw] text-ink">
                  Every kid<br />
                  <span className="text-purple">deserves</span><br />
                  <span className="scribble">a desk.</span>
                </h1>
              </Reveal>
              <Reveal variant="rise" delay={110}>
                <p className="mt-8 text-lg md:text-xl text-ink-soft max-w-xl leading-relaxed">
                  We fund primary and secondary education for refugee
                  children across <strong className="text-ink">six partner schools</strong> in
                  South Sudan and Uganda. No salaries. No offices. Just tuition,
                  uniforms, books, and meals.
                </p>
              </Reveal>
              <Reveal variant="rise" delay={200}>
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
              </Reveal>
              <Reveal variant="rise" delay={300}>
                <div className="mt-10 hidden md:flex items-end gap-4">
                  <div className="barcode w-44 opacity-75" aria-hidden="true" />
                  <div className="font-mono text-[10px] leading-snug text-ink-muted uppercase">
                    501(c)(3) public charity
                    <br />
                    EIN 82-5215402 · helpsouthsudan.org
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative max-w-md mx-auto lg:mx-0 lg:ml-auto">
                {/* Main photo — a classroom of kids */}
                <div className="relative">
                  <div className="absolute -inset-3 bg-orange/30 -rotate-2" aria-hidden="true" />
                  <Reveal variant="develop">
                    <div className="relative aspect-[5/6] border-2 border-ink overflow-hidden">
                      <Image
                        src="/photos/field/classroom-red.jpg"
                        alt="A classroom of students in red uniforms at one of our partner schools"
                        fill
                        sizes="(max-width: 1024px) 90vw, 480px"
                        priority
                        className="object-cover"
                      />
                    </div>
                  </Reveal>
                  <div
                    className="absolute -bottom-6 -left-10 hidden md:block bg-paper border-2 border-ink p-2.5 shadow-[6px_6px_0_var(--ink)] w-44"
                    style={{ transform: "rotate(-4deg)" }}
                  >
                    <div className="relative aspect-square">
                      <Image
                        src="/photos/field/juba-students-1.jpg"
                        alt="Students at Juba Integrated High"
                        fill
                        sizes="180px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <Reveal
                    variant="stamp"
                    delay={350}
                    className="absolute -top-5 -right-5 hidden md:block z-10"
                  >
                    <div
                      className="flex items-center justify-center bg-red text-paper border-2 border-ink w-28 h-28 rounded-full font-display uppercase tracking-tight text-center leading-tight text-sm shadow-[4px_4px_0_var(--ink)]"
                      style={{ transform: "rotate(8deg)" }}
                    >
                      1,500<br />kids<br />supported<br />last year
                    </div>
                  </Reveal>
                  {/* Price tag — the whole pitch, hanging off the cover photo */}
                  <Reveal
                    variant="stamp"
                    delay={500}
                    className="absolute -bottom-8 right-2 md:-right-7 z-10"
                  >
                    <Link
                      href="/donate"
                      className="price-tag block px-5 py-3 pl-8 -rotate-6 hover:-translate-y-1 transition-[translate]"
                    >
                      <span className="block font-display text-2xl md:text-3xl leading-none text-ink">
                        $42/mo
                      </span>
                      <span className="block font-hand text-lg leading-tight text-ink/85 mt-1">
                        keeps one kid in school
                      </span>
                    </Link>
                  </Reveal>
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
              "Six partner schools",
              "99% to the children",
            ]}
          />
        </div>
      </section>

      {/* STATS */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x-2 divide-ink/15">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`py-10 px-4 text-center ${
                  i % 2 === 0 ? "border-r-2 md:border-r-2" : ""
                } ${i < 2 ? "border-b-2 md:border-b-0" : ""} border-ink/15`}
              >
                <Reveal variant="rise" delay={i * 80}>
                  <div className="font-display text-6xl md:text-7xl text-purple leading-none">
                    {s.kind === "num" ? (
                      <AnimatedCounter
                        value={s.value}
                        prefix={s.prefix}
                        suffix={s.suffix}
                        duration={1600}
                      />
                    ) : (
                      s.text
                    )}
                  </div>
                  <div className="mt-3 font-display uppercase tracking-[0.2em] text-xs text-ink-muted">
                    {s.label}
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TornEdge from="var(--paper)" to="var(--paper-deep)" />

      {/* NEWS — Kenyi Lado Lawon, 3rd nationwide on the 2025 CSE */}
      <section
        id="news"
        className="py-16 md:py-24 bg-paper-deep relative overflow-hidden scroll-mt-24"
      >
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-red/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <span className="stamp text-xs">News</span>
                <span className="font-display uppercase tracking-[0.2em] text-xs text-red">
                  June 2026
                </span>
              </div>
              <Reveal variant="rise">
                <h2 className="font-display uppercase tracking-tight text-6xl md:text-8xl leading-[0.85] mb-7">
                  Third in<br />
                  <span className="scribble">the nation.</span>
                </h2>
              </Reveal>
              <div className="space-y-5 text-lg md:text-xl text-ink-soft leading-relaxed max-w-xl">
                <p>
                  South Sudan just released the results of the{" "}
                  <strong className="text-ink">
                    Certificate of Secondary Education
                  </strong>
                  , the national exam that 45,776 students sat last December
                  at 521 schools across the country.
                </p>
                <p>
                  Kenyi Lado Lawon, a student at{" "}
                  <strong className="text-ink">Juba Integrated High</strong>,
                  one of our six partner schools, placed third in the entire
                  nation with 88.3% in the science section. Only two students
                  in the country scored higher.
                </p>
              </div>
              <Reveal variant="write" delay={250}>
                <p className="font-hand text-3xl md:text-4xl text-ink mt-8">
                  Congratulations, Kenyi. We are so proud. ✦
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <div className="relative max-w-xl mx-auto lg:mx-0 lg:ml-auto">
                <div className="absolute -inset-3 bg-orange/30 rotate-2" aria-hidden="true" />
                <Reveal variant="develop">
                  <div className="relative aspect-[4/3] border-2 border-ink overflow-hidden">
                    <Image
                      src="/photos/field/juba-assembly-2026.jpg"
                      alt="The student body assembled in the courtyard at Juba Integrated High School"
                      fill
                      sizes="(max-width: 1024px) 90vw, 560px"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal
                  variant="stamp"
                  delay={300}
                  className="absolute -top-6 -right-5 hidden md:block z-10"
                >
                  <div
                    className="flex items-center justify-center bg-red text-paper border-2 border-ink w-28 h-28 rounded-full font-display uppercase tracking-tight text-center leading-tight text-sm shadow-[4px_4px_0_var(--ink)]"
                    style={{ transform: "rotate(7deg)" }}
                  >
                    3rd of<br />45,776<br />students
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TornEdge from="var(--paper-deep)" to="var(--paper)" />

      {/* FOUNDER VOICE — replaces the 3-card "what we do" */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute -top-10 -right-20 w-[420px] h-[420px] rounded-full bg-orange/15 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-12 gap-10 mb-14">
            <div className="md:col-span-4">
              <div className="ribbon-num">01</div>
            </div>
            <div className="md:col-span-8">
              <div className="font-display uppercase tracking-[0.2em] text-xs text-red mb-3">
                Why we exist
              </div>
              <Reveal variant="rise">
                <h2 className="font-display uppercase tracking-tight text-5xl md:text-7xl leading-[0.9] mb-6">
                  Our founder<br />
                  <span className="text-purple">walked it</span> first.
                </h2>
              </Reveal>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="max-w-sm mx-auto lg:mx-0">
                <Reveal variant="develop">
                  <div className="relative aspect-[4/5] border-2 border-ink overflow-hidden shadow-[6px_6px_0_var(--purple)]">
                    <Image
                      src="/photos/gabriel/portrait.jpg"
                      alt="Gabriel Nyok, founder"
                      fill
                      sizes="(max-width: 1024px) 80vw, 400px"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
                <div className="mt-6 font-display uppercase tracking-tight text-xl text-ink leading-tight text-center lg:text-left">
                  Gabriel Akim Nyok
                  <span className="block text-sm text-ink-muted tracking-[0.2em] font-normal mt-1">
                    Founder &amp; Chairman
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-7 text-lg md:text-xl text-ink-soft leading-relaxed">
              <p>
                Gabriel was born in 1983 near the Nile. Being born in a
                clinic was rare enough back then that his middle name{" "}
                <em>Akim</em>, "doctor" in Dinka, came from it. He was
                two when civil war reached his village.
              </p>
              <p>
                Red Cross volunteers carried him out of South Sudan to a UNHCR
                camp in northern Kenya, where he grew up with his brother as
                an orphan. He was one of the <strong className="text-ink">Lost Boys and
                Girls of Sudan</strong>, over 20,000 children separated from their
                families by the war.
              </p>
              <p>
                In 2006, the U.S. government brought him to California. He
                worked, went to school, and became a citizen. In 2011 he went
                back to visit the camps and saw children living the same life
                he had, and started sending a few of them to school out of
                his own paycheck.
              </p>
              <p>
                <strong className="text-ink">Helping Hands for South Sudan</strong> is
                that same effort, formalized. Gabriel still doesn't take a
                salary. The board is all-volunteer. Gabriel walks the schools
                and personally confirms head counts before tuition is paid.
              </p>

              <Link
                href="/our-story"
                className="inline-flex items-center font-display uppercase tracking-wider text-sm border-b-2 border-ink hover:text-purple hover:border-purple pb-1 mt-3"
              >
                Read the full story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TornEdge from="var(--paper)" to="var(--paper-deep)" />

      {/* SCHOOLS — INTERACTIVE MAP */}
      <section className="py-20 md:py-28 bg-paper-deep border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-10 mb-12">
            <div className="md:col-span-4">
              <div className="ribbon-num">02</div>
            </div>
            <div className="md:col-span-8">
              <Reveal variant="rise">
                <h2 className="font-display uppercase tracking-tight text-5xl md:text-7xl leading-[0.9] mb-6">
                  Six partner<br />
                  <span className="scribble scribble--purple">schools.</span>
                </h2>
                <p className="text-lg text-ink-soft max-w-2xl">
                  Two in South Sudan. Four in Uganda, where many South Sudanese
                  refugee families have settled. Every one of them serves
                  children who would otherwise have no access to school.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="bg-paper border-2 border-ink p-4 md:p-8 shadow-[8px_8px_0_var(--ink)]">
            <SchoolsMap />
          </div>
        </div>
      </section>

      {/* FULL-BLEED PHOTO BAND — visual breath between sections */}
      <section className="relative h-[60vh] min-h-[420px] max-h-[640px] overflow-hidden border-b-2 border-ink">
        <Image
          src="/photos/field/juba-students-1.jpg"
          alt="Children at a partner school in Juba"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/65" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 w-full">
            <Reveal variant="write">
              <h2 className="font-display uppercase tracking-tight text-paper text-5xl md:text-7xl leading-[0.9] max-w-3xl">
                The founder<br />
                was a Lost Boy<br />
                <span className="text-orange">himself.</span>
              </h2>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GIRLS' EDUCATION FOCUS — beefed up */}
      <section className="py-20 md:py-28 bg-paper-deep relative overflow-hidden">
        <div className="absolute -right-32 top-10 w-[520px] h-[520px] rounded-full bg-orange/15 blur-3xl pointer-events-none" />
        <div className="absolute -left-32 bottom-0 w-[420px] h-[420px] rounded-full bg-purple/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="font-display uppercase tracking-[0.2em] text-xs text-red mb-4">
                This year's focus
              </div>
              <h2 className="font-display uppercase tracking-tight text-6xl md:text-8xl leading-[0.85] mb-7">
                More girls<br />
                <span className="text-purple">in school.</span>
              </h2>
              <p className="text-lg md:text-xl text-ink-soft max-w-xl leading-relaxed mb-8">
                When a family in South Sudan can only send one kid to school,
                they almost always choose the boy. As a result, girls are the
                most under-educated group in the country. We're flipping that —
                <strong className="text-ink"> sending more girls than boys this year.</strong>
              </p>
              <Reveal variant="write" delay={150}>
                <blockquote className="relative pl-7 mt-4">
                  <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange" aria-hidden="true" />
                  <p className="font-hand text-3xl md:text-4xl text-ink leading-snug">
                    "Educate a man, you educate an individual.<br />
                    Educate a woman, you educate a nation."
                  </p>
                  <footer className="font-display uppercase tracking-[0.2em] text-xs text-ink-muted mt-4">
                    African proverb
                  </footer>
                </blockquote>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <div className="relative h-full min-h-[500px]">
                <Reveal
                  variant="develop"
                  className="absolute top-0 right-0 w-[68%]"
                >
                  <div
                    className="relative aspect-[3/4] border-2 border-ink overflow-hidden shadow-[8px_8px_0_var(--ink)]"
                    style={{ transform: "rotate(2deg)" }}
                  >
                    <Image
                      src="/photos/wall/bvs-girls.jpg"
                      alt="Five girls in Broader Vision School green and checkered uniforms"
                      fill
                      sizes="(max-width: 1024px) 60vw, 400px"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal
                  variant="develop"
                  delay={200}
                  className="absolute bottom-0 left-0 w-[55%]"
                >
                  <div
                    className="relative aspect-[3/4] border-2 border-ink overflow-hidden bg-paper shadow-[6px_6px_0_var(--ink)]"
                    style={{ transform: "rotate(-3deg)" }}
                  >
                    <Image
                      src="/photos/wall/schools-03.jpg"
                      alt="A girl in Juba Integrated High blue uniform smiling"
                      fill
                      sizes="(max-width: 1024px) 50vw, 320px"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TornEdge from="var(--paper-deep)" to="var(--paper)" />

      {/* WALL OF KIDS — the 1,500, made visible */}
      <section className="py-20 md:py-28 border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-10 mb-10">
            <div className="md:col-span-4">
              <div className="ribbon-num">03</div>
            </div>
            <div className="md:col-span-8">
              <div className="font-display uppercase tracking-[0.2em] text-xs text-red mb-3">
                The 1,500
              </div>
              <h2 className="font-display uppercase tracking-tight text-5xl md:text-7xl leading-[0.9] mb-5">
                Faces, not<br />
                <span className="text-orange">a number.</span>
              </h2>
              <p className="text-lg text-ink-soft max-w-2xl">
                A snapshot of recent days at our partner schools. Real kids,
                real classrooms.
              </p>
            </div>
          </div>

          <WallOfKids />

          <p className="font-hand text-2xl md:text-3xl text-ink mt-8 text-center">
            ...and hundreds more like them. ✦
          </p>
        </div>
      </section>

      {/* TESTIMONIALS — real Facebook comments from former students */}
      <Testimonials />

      <TornEdge from="var(--paper-deep)" to="var(--purple)" />

      {/* MANDELA QUOTE BAND — brand asset */}
      <section className="bg-purple py-12 md:py-16 border-b-2 border-ink">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="rise">
            <div className="border-2 border-paper/20 p-3 md:p-4 bg-paper">
              <Image
                src="/photos/brand/mandela.jpg"
                alt="Nelson Mandela quote: It is not beyond our power to create a world in which all children have access to good education."
                width={664}
                height={664}
                sizes="(max-width: 768px) 90vw, 600px"
                className="w-full h-auto block"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA — build one student's year, line by line */}
      <section className="relative py-24 md:py-32 bg-purple text-paper overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
          <Marquee
            items={["donate", "give", "support", "ayúdanos", "education", "future", "act"]}
            separator="○"
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 md:mb-16">
            <div className="font-display uppercase tracking-[0.3em] text-xs text-paper/70 mb-4">
              Do the math yourself
            </div>
            <h2 className="font-display uppercase tracking-tight text-6xl md:text-8xl leading-[0.85] mb-6">
              $500 sends a child<br />
              <span className="outline-text" style={{ WebkitTextStroke: "2px var(--paper)" }}>
                to school
              </span>{" "}
              for a year.
            </h2>
            <p className="text-lg md:text-xl opacity-85 max-w-2xl mx-auto">
              Don't take our word for it. These are the seven line items from
              our school budget. Build the year, or cover the piece you can.
            </p>
          </div>

          <YearBuilder />

          <div className="text-center mt-14">
            <p className="text-paper/85">
              Monthly giving, checks, stock, employer matching —{" "}
              <Link
                href="/donate"
                className="underline decoration-2 underline-offset-4 hover:opacity-80 font-display uppercase tracking-wider text-sm"
              >
                see every way to give →
              </Link>
            </p>
            <p className="text-paper/70 text-sm mt-4">
              501(c)(3) · EIN 82-5215402 · Tax-deductible · ~1% overhead
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
