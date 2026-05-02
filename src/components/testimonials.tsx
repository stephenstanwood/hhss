// Real comments from HHSS's Facebook page, collected for the marketing
// folder. Light styling — quotes feel pinned to the wall, not corporate.

type Testimonial = {
  quote: string;
  author: string;
  context?: string;
  tilt: number;
  bg: "paper" | "purple" | "orange";
};

const QUOTES: Testimonial[] = [
  {
    quote:
      "This initiative deserves credit for my success currently in university pursuing a Bachelor of Software Engineering.",
    author: "Dengtiel Junior Mayen",
    context: "former student",
    tilt: -1.2,
    bg: "paper",
  },
  {
    quote:
      "It healed most of the refugee children who had no access to education and now they stand firm and proud of the level of education they have acquired. May the almighty father keep blessing the founder and the support staff to accomplish their mission.",
    author: "Jooh Riak Alier-Aguek",
    tilt: 0.8,
    bg: "purple",
  },
  {
    quote:
      "A huge THANK YOU to Helping Hands South Sudan for the incredible work they're doing! Your support is truly changing lives and shaping the future of South Sudanese youth through education.",
    author: "Mayen Aguto Agot",
    tilt: 1.4,
    bg: "orange",
  },
  {
    quote:
      "Many thanks to Helping Hands for educating thousands of students across East Africa and South Sudan. Your continued support has transformed many lives and our nation's future is bright.",
    author: "Achuony Atem Akuak",
    tilt: -0.6,
    bg: "paper",
  },
];

const BG_CLASSES: Record<Testimonial["bg"], string> = {
  paper: "bg-paper text-ink",
  purple: "bg-purple text-paper",
  orange: "bg-orange text-paper",
};

const RULE_CLASSES: Record<Testimonial["bg"], string> = {
  paper: "border-ink/20",
  purple: "border-paper/30",
  orange: "border-paper/40",
};

const QUOTE_COLOR: Record<Testimonial["bg"], string> = {
  paper: "text-red",
  purple: "text-gold",
  orange: "text-paper",
};

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 border-b-2 border-ink bg-paper-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-4">
            <div className="ribbon-num">04</div>
          </div>
          <div className="md:col-span-8">
            <div className="font-display uppercase tracking-[0.2em] text-xs text-red mb-3">
              In their words
            </div>
            <h2 className="font-display uppercase tracking-tight text-5xl md:text-7xl leading-[0.9] mb-6">
              From the<br />
              <span className="scribble">community.</span>
            </h2>
            <p className="text-lg text-ink-soft max-w-2xl">
              Comments and notes from former students and South Sudanese
              community members on our Facebook page.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {QUOTES.map((t) => (
            <figure
              key={t.author}
              className={`relative ${BG_CLASSES[t.bg]} border-2 border-ink pt-12 pb-8 px-8 md:pt-14 md:pb-10 md:px-12 shadow-[6px_6px_0_var(--ink)]`}
              style={{ transform: `rotate(${t.tilt}deg)` }}
            >
              <span
                aria-hidden="true"
                className={`absolute top-2 left-6 md:top-3 md:left-8 font-display leading-none select-none ${QUOTE_COLOR[t.bg]}`}
                style={{ fontFamily: "Georgia, serif", fontSize: "9rem" }}
              >
                &ldquo;
              </span>
              <blockquote className="relative text-lg md:text-xl leading-relaxed">
                {t.quote}
              </blockquote>
              <figcaption className={`mt-6 pt-5 border-t ${RULE_CLASSES[t.bg]}`}>
                <div className="font-display uppercase tracking-wide text-xl md:text-2xl leading-tight">
                  {t.author}
                </div>
                {t.context && (
                  <div className="font-display uppercase tracking-[0.18em] text-xs opacity-80 mt-1.5">
                    {t.context}
                  </div>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
