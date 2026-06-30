"use client";

import Image from "next/image";
import { Lightbox } from "@/components/lightbox";
import { Reveal } from "@/components/reveal";

// Photos that landed by WhatsApp from the partner schools in June 2026 —
// Gulu (Uganda) and Juba Integrated High (South Sudan). Captions are
// location/scene only (no names), per the org's consent rule.
type Shot = {
  src: string;
  caption: string;
  alt: string;
  tilt: string; // rotation utility, e.g. "-rotate-2"
  obj?: string; // object-position utility for the square crop
};

const POLAROIDS: Shot[] = [
  {
    src: "/photos/june2026/gulu-girls-walking.jpg",
    caption: "On the walk in",
    alt: "Two Gulu Primary girls in red uniforms with backpacks on the way to school",
    tilt: "-rotate-3",
    obj: "object-top",
  },
  {
    src: "/photos/june2026/gulu-boy-grin.jpg",
    caption: "Break time",
    alt: "A Gulu primary boy grinning on a veranda bench between assembly and class",
    tilt: "rotate-2",
    obj: "object-left",
  },
  {
    src: "/photos/june2026/juba-girls-reading.jpg",
    caption: "Heads down — Juba High",
    alt: "Rows of Juba Integrated High girls in uniform reading at their desks outdoors",
    tilt: "-rotate-1",
    obj: "object-center",
  },
  {
    src: "/photos/june2026/gulu-boys-tarp.jpg",
    caption: "After assembly",
    alt: "Gulu primary boys sitting together on a tarp on the school grounds",
    tilt: "rotate-3",
    obj: "object-top",
  },
  {
    src: "/photos/june2026/gulu-girls-group.jpg",
    caption: "End of the day",
    alt: "A group of Gulu Primary girls in white shirts and red skirts on the school grounds",
    tilt: "-rotate-2",
    obj: "object-center",
  },
  {
    src: "/photos/june2026/gulu-girls-road.jpg",
    caption: "Almost there",
    alt: "Two Gulu Primary girls with backpacks heading to school along a dirt road",
    tilt: "rotate-1",
    obj: "object-top",
  },
];

const AERIAL: Shot = {
  src: "/photos/june2026/juba-assembly-aerial.jpg",
  caption: "Morning assembly — Juba Integrated High",
  alt: "Aerial view of the entire Juba Integrated High student body gathered for morning assembly",
  tilt: "",
};

// Lightbox set: the six polaroids, then the aerial as the last frame.
const ALL = [...POLAROIDS, AERIAL];

export function FieldDispatch() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute -top-16 -left-24 w-[420px] h-[420px] rounded-full bg-orange/12 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-24 w-[460px] h-[460px] rounded-full bg-purple/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Masthead-style bulletin header */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="stamp text-xs">Just in</span>
          <span className="font-display uppercase tracking-[0.2em] text-[11px] text-ink-muted">
            <span className="text-red" aria-hidden="true">✦ </span>
            Forwarded from the field · June 2026
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-12">
          <div className="lg:col-span-8">
            <Reveal variant="rise">
              <h2 className="font-display uppercase tracking-tight text-5xl md:text-7xl leading-[0.9]">
                Straight from<br />
                the <span className="scribble scribble--purple">group chat.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <p className="text-lg text-ink-soft leading-relaxed">
              No photographer, no press kit — just a phone passed around the
              schoolyard and a WhatsApp thread. Here's what landed from{" "}
              <strong className="text-ink">Gulu</strong> and{" "}
              <strong className="text-ink">Juba High</strong> this month.
            </p>
          </div>
        </div>

        <Lightbox photos={ALL}>
          {(open) => (
            <>
              {/* Pinned polaroid scatter */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
                {POLAROIDS.map((p, i) => (
                  <Reveal
                    key={p.src}
                    variant="develop"
                    delay={(i % 3) * 90}
                    className={`${i % 2 === 0 ? "md:mt-6" : "md:-mt-2"}`}
                  >
                    <button
                      type="button"
                      onClick={() => open(i)}
                      aria-label={`Open photo: ${p.caption}`}
                      className={`group relative block w-full polaroid ${p.tilt} hover:rotate-0 hover:-translate-y-1 transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple`}
                    >
                      <span className="tape left-1/2 -translate-x-1/2 -top-2.5" aria-hidden="true" />
                      <span className="relative block aspect-square overflow-hidden bg-ink/10">
                        <Image
                          src={p.src}
                          alt={p.alt}
                          fill
                          sizes="(max-width: 768px) 45vw, 30vw"
                          className={`object-cover ${p.obj ?? "object-center"}`}
                        />
                      </span>
                      <span className="block font-hand text-xl md:text-2xl text-ink/85 text-center pt-2 leading-tight">
                        {p.caption}
                      </span>
                    </button>
                  </Reveal>
                ))}
              </div>

              {/* Wide anchor — the whole school in one frame */}
              <Reveal variant="develop" delay={120} className="mt-12 md:mt-16">
                <button
                  type="button"
                  onClick={() => open(POLAROIDS.length)}
                  aria-label="Open photo: morning assembly at Juba Integrated High"
                  className="group relative block w-full aspect-[16/10] md:aspect-[2/1] border-2 border-ink overflow-hidden shadow-[8px_8px_0_var(--ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple"
                >
                  <Image
                    src={AERIAL.src}
                    alt={AERIAL.alt}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1216px"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent" />
                  <span className="absolute left-5 right-5 bottom-5 md:left-8 md:bottom-8 flex flex-wrap items-end justify-between gap-4">
                    <span className="block max-w-2xl text-left">
                      <span className="block font-display uppercase tracking-tight text-paper text-3xl md:text-5xl leading-[0.95]">
                        One school.<br />One morning.
                      </span>
                      <span className="block font-hand text-xl md:text-2xl text-orange mt-2">
                        Morning assembly at Juba Integrated High.
                      </span>
                    </span>
                    <span
                      className="hidden sm:flex shrink-0 items-center justify-center bg-red text-paper border-2 border-ink w-28 h-28 md:w-32 md:h-32 rounded-full font-display uppercase tracking-tight text-center leading-tight text-xs md:text-sm shadow-[4px_4px_0_var(--ink)]"
                      style={{ transform: "rotate(7deg)" }}
                    >
                      Six<br />schools<br />like this
                    </span>
                  </span>
                </button>
              </Reveal>
            </>
          )}
        </Lightbox>

        <p className="font-hand text-2xl md:text-3xl text-ink mt-10 text-center">
          This is what your donations look like on the ground. ✦
        </p>
      </div>
    </section>
  );
}
