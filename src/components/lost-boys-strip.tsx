import { AnimatedCounter } from "@/components/animated-counter";

// Visual context strip about the historic Lost Boys / Lost Girls of Sudan
// crisis Gabriel was part of. Numbers are well-documented: ~20,000 children
// separated; many walked over 1,000 miles; roughly half didn't survive the
// journey to Kakuma. Cited from UNHCR and IRC reporting.

const FACTS = [
  {
    n: 20000,
    suffix: "+",
    label: "Children separated",
    body: "Over 20,000 boys and girls separated from their families in Sudan's civil war. Most were under 10.",
  },
  {
    n: 1000,
    suffix: "+ mi",
    label: "On foot",
    body: "Many walked across South Sudan into Ethiopia and on to Kakuma in northern Kenya — over a thousand miles, mostly at night.",
  },
  {
    n: 50,
    suffix: "%",
    label: "Didn't reach the camp",
    body: "Roughly half of the children died on the walk — to dehydration, starvation, attacks, or river crossings.",
  },
  {
    n: 3800,
    suffix: "",
    label: "Resettled to the U.S.",
    body: "About 3,800 — including Gabriel — were resettled to the United States starting in 2001.",
  },
];

export function LostBoysStrip() {
  return (
    <section className="bg-ink text-paper border-y-2 border-ink relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
        <div className="absolute -left-20 top-10 w-[480px] h-[480px] rounded-full bg-orange blur-3xl" />
        <div className="absolute -right-20 bottom-10 w-[420px] h-[420px] rounded-full bg-purple blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
        <div className="grid md:grid-cols-12 gap-10 mb-12 md:mb-16">
          <div className="md:col-span-5">
            <div className="font-display uppercase tracking-[0.3em] text-xs text-orange mb-4">
              The history
            </div>
            <h2 className="font-display uppercase tracking-tight text-5xl md:text-7xl leading-[0.85]">
              The Lost Boys<br />
              <span className="text-orange">of Sudan.</span>
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-8">
            <p className="text-lg md:text-xl text-paper/80 leading-relaxed max-w-2xl">
              Gabriel didn't read about this in a book. He was two years old
              when soldiers reached his village. The Red Cross carried him out.
              He grew up an orphan in a UNHCR camp in northern Kenya. The
              numbers below are why he came back.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-paper/15 border-y border-paper/15">
          {FACTS.map((f) => (
            <div key={f.label} className="py-8 md:py-10 px-2 md:px-6">
              <div className="font-display text-5xl md:text-6xl text-orange leading-none">
                <AnimatedCounter value={f.n} suffix={f.suffix} duration={1800} />
              </div>
              <div className="font-display uppercase tracking-[0.2em] text-[10px] mt-3 mb-3 text-paper/70">
                {f.label}
              </div>
              <p className="text-[14px] text-paper/85 leading-relaxed">
                {f.body}
              </p>
            </div>
          ))}
        </div>

        <p className="text-[12px] text-paper/55 mt-6 max-w-3xl leading-relaxed">
          Sources: UNHCR; International Rescue Committee; Lost Boys of Sudan
          oral histories. Numbers are widely-reported approximations of the
          1987–2001 displacement.
        </p>
      </div>
    </section>
  );
}
