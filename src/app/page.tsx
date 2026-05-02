import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@/components/marquee";
import { JubaClock } from "@/components/juba-clock";
import { AnimatedCounter } from "@/components/animated-counter";
import { SchoolsMap } from "@/components/schools-map";
import { WallOfKids } from "@/components/wall-of-kids";
import { GabrielSignature } from "@/components/signature";
import { Testimonials } from "@/components/testimonials";

type Stat =
  | { kind: "num"; value: number; suffix?: string; prefix?: string; label: string }
  | { kind: "text"; text: string; label: string };

const STATS: Stat[] = [
  { kind: "num", value: 1500, label: "Students in school" },
  { kind: "num", value: 6, label: "Partner schools" },
  { kind: "num", value: 1, suffix: "%", prefix: "~", label: "Operating overhead" },
  { kind: "text", text: "Est. 2018", label: "Volunteer-run" },
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
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span className="stamp text-xs">Est. 2018</span>
                <JubaClock />
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
                uniforms, books, and meals.
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
                {/* Main photo — a classroom of kids */}
                <div className="relative">
                  <div className="absolute -inset-3 bg-orange/30 -rotate-2" aria-hidden="true" />
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
                  <div
                    className="absolute -top-5 -right-5 hidden md:flex items-center justify-center bg-red text-paper border-2 border-ink w-28 h-28 rounded-full font-display uppercase tracking-tight text-center leading-tight text-sm shadow-[4px_4px_0_var(--ink)]"
                    style={{ transform: "rotate(8deg)" }}
                  >
                    1,500<br />kids<br />in school
                  </div>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER VOICE — replaces the 3-card "what we do" */}
      <section className="py-20 md:py-28 border-b-2 border-ink relative overflow-hidden">
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
              <h2 className="font-display uppercase tracking-tight text-5xl md:text-7xl leading-[0.9] mb-6">
                Our founder<br />
                <span className="text-purple">walked it</span> first.
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="relative max-w-sm mx-auto lg:mx-0">
                <div className="absolute -inset-4 bg-purple -rotate-2" aria-hidden="true" />
                <div className="relative aspect-[4/5] border-2 border-ink overflow-hidden">
                  <Image
                    src="/photos/gabriel/portrait.jpg"
                    alt="Gabriel Nyok, founder"
                    fill
                    sizes="(max-width: 1024px) 80vw, 400px"
                    className="object-cover"
                  />
                </div>
                <div className="relative mt-5 font-display uppercase tracking-tight text-xl text-ink leading-tight">
                  Gabriel Akim Nyok
                  <span className="block text-sm text-ink-muted tracking-[0.2em] font-normal mt-1">
                    Founder &amp; Chairman
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-7 text-lg md:text-xl text-ink-soft leading-relaxed">
              <p>
                Gabriel was born in 1983 in a clinic near the Nile — rare
                enough that his middle name <em>Akim</em>, "doctor" in Dinka,
                came from it. He was two when civil war reached his village.
              </p>
              <p>
                Red Cross volunteers carried him out of South Sudan to a UNHCR
                camp in northern Kenya, where he grew up with his brother as
                an orphan. He was one of the <strong className="text-ink">Lost Boys and
                Girls of Sudan</strong> — over 20,000 children separated from their
                families by the war.
              </p>
              <p>
                In 2006, the U.S. government brought him to California. He
                worked, went to school, became a citizen. In 2011 he went
                back to visit the camps and saw children living the same life
                he had — and started sending a few of them to school out of
                his own paycheck.
              </p>
              <p>
                <strong className="text-ink">Helping Hands for South Sudan</strong> is
                that effort, formalized. He still doesn't take a salary. The
                board is all volunteer. He returns to walk the schools and
                personally confirm head counts before tuition is paid.
              </p>

              {/* Signature pull-quote */}
              <div className="relative mt-8 pl-7 border-l-4 border-purple">
                <p className="font-hand text-3xl md:text-4xl text-ink leading-snug">
                  "I still don't take a salary.<br />
                  These kids are why I went home."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <GabrielSignature
                    width={180}
                    height={60}
                    stroke="var(--purple)"
                  />
                  <span className="font-display uppercase tracking-[0.2em] text-[10px] text-ink-muted">
                    Gabriel · Kampala
                  </span>
                </div>
              </div>

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

      {/* SCHOOLS — INTERACTIVE MAP */}
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
                refugee families have settled. Hover any pin to meet the
                school.
              </p>
            </div>
          </div>

          <div className="bg-paper border-2 border-ink p-4 md:p-8 shadow-[8px_8px_0_var(--ink)]">
            <SchoolsMap />
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
            <div className="font-display uppercase tracking-[0.2em] text-xs text-paper/80 mb-3">
              We've lived it.
            </div>
            <h2 className="font-display uppercase tracking-tight text-paper text-5xl md:text-7xl leading-[0.9] max-w-3xl">
              The founder<br />
              was a Lost Boy<br />
              <span className="text-orange">himself.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* GIRLS' EDUCATION FOCUS — beefed up */}
      <section className="py-20 md:py-28 border-b-2 border-ink bg-paper-deep relative overflow-hidden">
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
                they almost always choose the boy. Girls are the most
                under-educated group in the country. We're flipping that —
                <strong className="text-ink"> sending more girls than boys this year.</strong>
              </p>
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
            </div>
            <div className="lg:col-span-6">
              <div className="relative h-full min-h-[500px]">
                <div
                  className="absolute top-0 right-0 w-[68%] aspect-[3/4] border-2 border-ink overflow-hidden shadow-[8px_8px_0_var(--ink)]"
                  style={{ transform: "rotate(2deg)" }}
                >
                  <Image
                    src="/photos/wall/schools-08.jpg"
                    alt="Six girls in Juba Integrated High uniforms standing on a hillside above the city"
                    fill
                    sizes="(max-width: 1024px) 60vw, 400px"
                    className="object-cover"
                  />
                </div>
                <div
                  className="absolute bottom-0 left-0 w-[55%] aspect-[3/4] border-2 border-ink overflow-hidden bg-paper shadow-[6px_6px_0_var(--ink)]"
                  style={{ transform: "rotate(-3deg)" }}
                >
                  <Image
                    src="/photos/wall/schools-03.jpg"
                    alt="A girl in Juba Integrated High uniform smiling"
                    fill
                    sizes="(max-width: 1024px) 50vw, 320px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                A snapshot of recent days at our partner schools. Tap any
                photo to enlarge — these are the kids your gift puts in a
                desk.
              </p>
            </div>
          </div>

          <WallOfKids />

          <p className="font-hand text-2xl md:text-3xl text-ink mt-8 text-center">
            ...and 1,470 more like them. ✦
          </p>
        </div>
      </section>

      {/* TESTIMONIALS — real Facebook comments from former students */}
      <Testimonials />

      {/* MANDELA QUOTE BAND — brand asset */}
      <section className="bg-purple py-12 md:py-16 border-b-2 border-ink">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* CTA — visceral price ladder */}
      <section className="relative py-24 md:py-32 bg-purple text-paper overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <Marquee
            items={["donate", "give", "support", "ayúdanos", "education", "future", "act"]}
            separator="○"
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <div className="font-display uppercase tracking-[0.3em] text-xs text-paper/70 mb-4">
              Pick a number
            </div>
            <h2 className="font-display uppercase tracking-tight text-6xl md:text-8xl leading-[0.85] mb-6">
              $500 sends a child<br />
              <span className="outline-text" style={{ WebkitTextStroke: "2px var(--paper)" }}>
                to school
              </span>{" "}
              for a year.
            </h2>
            <p className="text-lg md:text-xl opacity-85 max-w-2xl mx-auto">
              Or pick something smaller. Every line below covers a real cost a real student is facing.
            </p>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 max-w-4xl mx-auto">
            {[
              { n: "$15", l: "Exam fee" },
              { n: "$35", l: "School uniform" },
              { n: "$45", l: "A year of books" },
              { n: "$100", l: "Meals" },
            ].map((tier) => (
              <li key={tier.l} className="border-2 border-paper/40 p-4 md:p-5 text-center">
                <div className="font-display text-3xl md:text-5xl leading-none mb-1">
                  {tier.n}
                </div>
                <div className="font-display uppercase tracking-[0.15em] text-[10px] md:text-xs opacity-80">
                  {tier.l}
                </div>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <Link
              href="/donate"
              className="inline-flex items-center font-display uppercase tracking-wider text-lg bg-paper text-ink px-10 py-5 border-2 border-paper shadow-[6px_6px_0_var(--ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_var(--ink)] transition-all"
            >
              Donate now →
            </Link>
            <p className="text-paper/70 text-sm mt-5">
              501(c)(3) · EIN 82-5215402 · Tax-deductible · ~1% overhead
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
