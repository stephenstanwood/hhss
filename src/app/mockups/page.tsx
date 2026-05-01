import Image from "next/image";

const HERO_IMG = "/photos/godaddy/students-2.jpg";
const HERO_IMG_2 = "/photos/godaddy/classroom-1.jpg";
const HERO_IMG_3 = "/photos/godaddy/students-1.jpg";
const HERO_IMG_4 = "/photos/godaddy/grass-1.jpg";
const HERO_IMG_5 = "/photos/godaddy/teens-lineup.jpg";

function MockupHeader({
  num,
  name,
  vibe,
}: {
  num: string;
  name: string;
  vibe: string;
}) {
  return (
    <div className="bg-ink text-paper py-8 px-6 md:px-12 border-y-2 border-purple sticky top-0 z-30">
      <div className="max-w-7xl mx-auto flex items-baseline gap-6 flex-wrap">
        <span className="font-display text-4xl md:text-5xl text-purple-soft">
          {num}
        </span>
        <h2 className="font-display uppercase tracking-tight text-2xl md:text-4xl">
          {name}
        </h2>
        <span className="font-hand text-lg text-paper/60 ml-auto">
          {vibe}
        </span>
      </div>
    </div>
  );
}

export default function MockupsPage() {
  return (
    <div className="bg-ink">
      {/* PAGE INTRO */}
      <section className="bg-paper text-ink py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b-4 border-ink">
        <div className="max-w-4xl mx-auto">
          <div className="font-display uppercase tracking-[0.3em] text-sm text-purple mb-4">
            Internal · 10 directions
          </div>
          <h1 className="font-display uppercase tracking-tight text-5xl md:text-8xl leading-[0.85] mb-6">
            Pick a vibe.
          </h1>
          <p className="text-lg md:text-xl text-ink-soft max-w-2xl leading-relaxed mb-4">
            Ten different aesthetic directions for the HH4SS site. Same content,
            same brand colors where they fit — different layouts, typography,
            and treatments. Scroll through; pick the one that feels right.
          </p>
          <p className="text-sm text-ink-muted">
            What's deployed at the root domain right now is roughly Direction 1
            (Zine). Each section below is a hero comp; final pages would extend
            the chosen system across all six routes.
          </p>
        </div>
      </section>

      {/* ============ 1. ZINE (current) ============ */}
      <MockupHeader num="01" name="Zine / Retro" vibe="bold, paper-grain, polaroids — currently shipping" />
      <section className="bg-paper py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="stamp text-xs">Est. 2018</span>
                <span className="font-hand text-xl text-ink-soft">a volunteer-run nonprofit →</span>
              </div>
              <h2 className="font-display uppercase tracking-tight leading-[0.85] text-[12vw] lg:text-[7vw] text-ink">
                Every kid<br />
                <span className="text-purple">deserves</span><br />
                <span className="scribble">a desk.</span>
              </h2>
              <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
                <Stat n="1,500" l="students" />
                <Stat n="6" l="schools" />
                <Stat n="1%" l="overhead" />
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="polaroid max-w-sm mx-auto" style={{ transform: "rotate(2.5deg)" }}>
                <div className="tape -top-3 left-10" />
                <div className="relative aspect-[4/5]">
                  <Image src={HERO_IMG} alt="" fill sizes="400px" className="object-cover" />
                </div>
                <div className="text-center font-hand text-xl mt-1">
                  South Sudan
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2. NEWSPAPER / BROADSHEET ============ */}
      <MockupHeader num="02" name="Newspaper / Broadsheet" vibe="serif, multi-column, masthead authority" />
      <section className="bg-[#fafaf6] py-12 md:py-16 px-4 sm:px-6 lg:px-8" style={{ fontFamily: "var(--mock-crimson)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="border-b-4 border-double border-black pb-3 mb-6">
            <div className="flex items-baseline justify-between text-xs uppercase tracking-[0.2em] text-black/60">
              <span>Vol. VII · No. 1,500</span>
              <span>Improving the Lives of Refugee Children Through Education</span>
              <span>Est. 2018 · 501(c)(3)</span>
            </div>
            <h2 className="text-center mt-2" style={{ fontFamily: "var(--mock-playfair)", fontSize: "clamp(48px, 9vw, 110px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 0.9 }}>
              The Helping Hands Tribune
            </h2>
            <div className="flex items-baseline justify-between text-xs uppercase tracking-[0.2em] text-black/60 mt-2">
              <span>Los Gatos · Kampala · Juba</span>
              <span>Annual Edition</span>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <div className="text-xs uppercase tracking-widest text-red mb-2">Front Page</div>
              <h3 className="text-4xl md:text-6xl leading-[1.05] mb-5" style={{ fontFamily: "var(--mock-playfair)", fontWeight: 800 }}>
                Nonprofit sends 1,500 students to school across two countries
              </h3>
              <div className="text-sm text-black/60 italic mb-6">By the volunteer board · Latest dispatch from East Africa</div>
              <div className="columns-1 md:columns-2 gap-8 text-[16px] leading-relaxed text-black/85" style={{ columnRule: "1px solid rgba(0,0,0,0.15)" }}>
                <p className="mb-4">In 2025, Helping Hands for South Sudan funded a full year of school for 1,500 students at six partner schools across South Sudan and Uganda — tuition, uniforms, books, transportation, and meals.</p>
                <p className="mb-4">Founder Gabriel Akim Nyok, who returned to East Africa with his family in 2022 to run the work on the ground, walks the schools personally and confirms head counts before each tuition payment.</p>
                <p className="mb-4">Operating expenses run about 1%. The board is all volunteer. Gabriel takes no income.</p>
              </div>
            </div>
            <aside className="md:col-span-4 border-l border-black/20 pl-6">
              <div className="border-b border-black/40 pb-3 mb-3 text-xs uppercase tracking-widest">Inside</div>
              <ul className="space-y-2 text-sm">
                <li>· About South Sudan, page 2</li>
                <li>· Gabriel's story, page 3</li>
                <li>· The schools, page 4</li>
                <li>· How to help, page 5</li>
              </ul>
              <div className="mt-6 border-2 border-black p-4">
                <div className="text-xs uppercase tracking-widest mb-1">Donate</div>
                <div className="text-3xl font-bold" style={{ fontFamily: "var(--mock-playfair)" }}>$500</div>
                <div className="text-sm">A year of school for one child.</div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ============ 3. BRUTALIST SWISS ============ */}
      <MockupHeader num="03" name="Brutalist / Swiss" vibe="black + white, hard grid, no decoration" />
      <section className="bg-white text-black py-0 px-0" style={{ fontFamily: "var(--mock-inter)" }}>
        <div className="grid grid-cols-12 border-b-2 border-black">
          <div className="col-span-12 md:col-span-7 p-8 md:p-16 border-r-0 md:border-r-2 border-black">
            <div className="text-xs uppercase tracking-[0.2em] mb-8">001 / Helping Hands for South Sudan</div>
            <h2 className="text-[14vw] md:text-[8.5vw] leading-[0.85] font-bold tracking-[-0.04em]">
              Education<br />
              for refugee<br />
              children.
            </h2>
            <div className="mt-12 max-w-md text-base leading-relaxed">
              We fund six partner schools across South Sudan and Uganda. In 2025, 1,500 students attended a year of school on our dime. Operating expenses: approximately 1%. Volunteer board.
            </div>
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className="grid grid-rows-3 h-full">
              <div className="border-b-2 border-black p-6 md:p-10 flex flex-col justify-end">
                <div className="text-7xl md:text-8xl font-bold tracking-[-0.04em]">1,500</div>
                <div className="text-xs uppercase tracking-[0.3em] mt-2">Students · 2025</div>
              </div>
              <div className="border-b-2 border-black p-6 md:p-10 flex flex-col justify-end bg-black text-white">
                <div className="text-7xl md:text-8xl font-bold tracking-[-0.04em]">6</div>
                <div className="text-xs uppercase tracking-[0.3em] mt-2">Partner schools</div>
              </div>
              <div className="p-6 md:p-10 flex flex-col justify-end">
                <div className="text-7xl md:text-8xl font-bold tracking-[-0.04em]">~1%</div>
                <div className="text-xs uppercase tracking-[0.3em] mt-2">Operating overhead</div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 border-b-2 border-black">
          <div className="col-span-6 md:col-span-3 border-r-2 border-black p-6">
            <div className="text-xs uppercase tracking-widest mb-1">EIN</div>
            <div className="font-mono text-lg">82–5215402</div>
          </div>
          <div className="col-span-6 md:col-span-3 border-r-2 border-black p-6">
            <div className="text-xs uppercase tracking-widest mb-1">Founded</div>
            <div className="text-lg">February 2018</div>
          </div>
          <div className="col-span-6 md:col-span-3 border-r-2 border-black p-6 md:border-l-0">
            <div className="text-xs uppercase tracking-widest mb-1">Tax-deductible</div>
            <div className="text-lg">501(c)(3) status</div>
          </div>
          <div className="col-span-6 md:col-span-3 p-6 bg-black text-white">
            <div className="text-xs uppercase tracking-widest mb-1">Action →</div>
            <div className="text-lg font-bold">DONATE</div>
          </div>
        </div>
      </section>

      {/* ============ 4. PHOTO-LED / FULL-BLEED ============ */}
      <MockupHeader num="04" name="Photo-led / National Geographic" vibe="full-bleed photography, lets imagery do the talking" />
      <section className="relative bg-black h-[80vh] min-h-[600px] overflow-hidden">
        <Image src={HERO_IMG_5} alt="" fill priority sizes="100vw" className="object-cover opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/85" />
        <div className="relative h-full flex items-end pb-12 md:pb-20 px-6 md:px-12">
          <div className="max-w-3xl text-white">
            <div className="text-[11px] uppercase tracking-[0.4em] text-white/70 mb-4 flex items-center gap-3">
              <span className="block w-12 h-px bg-white/60" />
              Helping Hands for South Sudan · 2025
            </div>
            <h2 className="text-5xl md:text-7xl leading-[1.05]" style={{ fontFamily: "var(--mock-crimson)", fontWeight: 600 }}>
              In 2025, 1,500 children<br />
              <em className="font-light">went to school because of donors.</em>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Six schools. Two countries. One nonprofit, run by volunteers, started by a former Lost Boy of Sudan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="bg-white text-black px-7 py-3 text-sm uppercase tracking-widest hover:bg-white/90 transition">
                Donate $500
              </button>
              <button className="border border-white/60 text-white px-7 py-3 text-sm uppercase tracking-widest hover:bg-white/10 transition">
                Read Gabriel's story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 5. EDITORIAL CALM ============ */}
      <MockupHeader num="05" name="Editorial Calm" vibe="Stripe Press inspired — quiet sophistication" />
      <section className="bg-[#f7f3ec] text-[#1a1a2e] py-20 md:py-32 px-4 sm:px-6 lg:px-8" style={{ fontFamily: "var(--mock-inter)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-xs uppercase tracking-[0.25em] text-[#7a4d2a] mb-8">Helping Hands for South Sudan</div>
          <h2 className="leading-[1.05] mb-10" style={{ fontFamily: "var(--mock-dm-serif)", fontSize: "clamp(48px, 8vw, 100px)", letterSpacing: "-0.015em" }}>
            One nonprofit. Six schools.<br />
            <span className="text-[#7a4d2a]">1,500 students.</span>
          </h2>
          <p className="text-xl md:text-2xl leading-[1.55] text-[#1a1a2e]/85 max-w-3xl mb-8" style={{ fontFamily: "var(--mock-crimson)" }}>
            Helping Hands for South Sudan is a 501(c)(3) nonprofit funding primary and secondary education for refugee children across South Sudan and Uganda. Founded in 2018 by Gabriel Akim Nyok and a small group of fellow former Lost Boys.
          </p>
          <p className="text-xl md:text-2xl leading-[1.55] text-[#1a1a2e]/85 max-w-3xl mb-12" style={{ fontFamily: "var(--mock-crimson)" }}>
            We're entirely volunteer-run. About 1% of every donation goes to operating costs. The other 99% pays for tuition, uniforms, books, transportation, exam fees, and meals.
          </p>
          <div className="flex items-center gap-6 pt-6 border-t border-[#1a1a2e]/15">
            <a className="text-[#7a4d2a] underline decoration-2 underline-offset-4 hover:text-[#5a3a20]">
              Donate $500 →
            </a>
            <a className="text-[#1a1a2e]/60 hover:text-[#1a1a2e]">
              Read our story
            </a>
          </div>
        </div>
      </section>

      {/* ============ 6. RISO POP ============ */}
      <MockupHeader num="06" name="Risograph Pop" vibe="oversized shapes, retro print colors, energetic" />
      <section className="bg-[#fff5e1] text-[#1a0033] py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ fontFamily: "var(--mock-space)" }}>
        {/* Geometric shapes */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-[#ff5b1f] mix-blend-multiply opacity-90" />
        <div className="absolute top-40 left-[10%] w-[300px] h-[300px] rounded-full bg-[#1f5dff] mix-blend-multiply opacity-80" />
        <div className="absolute bottom-10 right-[20%] w-[200px] h-[200px] bg-[#ff1fb6] mix-blend-multiply opacity-80 rotate-12" />
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "4px 4px" }} />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-block bg-[#1a0033] text-[#fff5e1] px-4 py-1.5 mb-6 text-xs uppercase tracking-widest">
                ★ Established 2018 ★
              </div>
              <h2 className="text-[14vw] lg:text-[10vw] leading-[0.85] font-black tracking-tight" style={{ fontFamily: "var(--mock-bebas)" }}>
                <span className="block">EVERY KID</span>
                <span className="block text-[#ff1fb6]">DESERVES</span>
                <span className="block underline decoration-[#1f5dff] decoration-[8px] underline-offset-8">A SHOT.</span>
              </h2>
              <p className="mt-8 text-lg max-w-md font-medium">
                We send 1,500 South Sudanese refugee kids to school every year. Six schools across two countries. Volunteer-run since 2018.
              </p>
              <button className="mt-8 inline-block bg-[#1a0033] text-[#fff5e1] px-8 py-4 text-base font-bold uppercase tracking-widest hover:bg-[#ff5b1f] transition">
                $500 = ONE YEAR →
              </button>
            </div>
            <div className="lg:col-span-5 relative z-10">
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-[#1a0033] rotate-3" />
                <Image src={HERO_IMG_3} alt="" fill className="object-cover -rotate-3 mix-blend-multiply" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 7. FIELD POSTCARD ============ */}
      <MockupHeader num="07" name="Postcard / Field Notes" vibe="paper texture, handwriting, intimate" />
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#ede4cf", backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><filter id='n'><feTurbulence baseFrequency='0.65' numOctaves='3' /><feColorMatrix values='0 0 0 0 0.4 0 0 0 0 0.3 0 0 0 0 0.1 0 0 0 0.06 0'/></filter><rect width='100' height='100' filter='url(%23n)'/></svg>\")" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-6 items-stretch">
            {/* Postcard front */}
            <div className="md:col-span-7 bg-[#f5ecd5] border border-[#a89570] shadow-[0_8px_30px_rgba(0,0,0,0.15)] aspect-[3/2] relative overflow-hidden">
              <Image src={HERO_IMG_2} alt="" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <div className="text-white text-xs uppercase tracking-[0.25em] opacity-80">Postcard from Juba</div>
                <div className="text-white text-2xl mt-1" style={{ fontFamily: "var(--font-caveat)" }}>
                  six schools. two countries.
                </div>
              </div>
            </div>
            {/* Postcard back */}
            <div className="md:col-span-5 bg-[#f5ecd5] border border-[#a89570] shadow-[0_8px_30px_rgba(0,0,0,0.15)] p-6 md:p-8 aspect-[3/2] relative" style={{ fontFamily: "var(--font-caveat)" }}>
              <div className="absolute top-4 right-4 w-16 h-20 border-2 border-[#7a3030] flex items-center justify-center">
                <div className="text-center text-[#7a3030] leading-tight">
                  <div className="text-[9px] uppercase tracking-wider">501c3</div>
                  <div className="text-2xl font-bold">$0.99</div>
                  <div className="text-[8px]">to the kids</div>
                </div>
              </div>
              <div className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug pr-20">
                Hi friend —
              </div>
              <p className="text-xl md:text-2xl text-[#2a2a2a] leading-snug mt-3">
                In 2025, you helped us send <strong>1,500 kids</strong> to school. Every dollar past the first 1% pays for tuition, books, uniforms, meals.
              </p>
              <p className="text-xl text-[#2a2a2a] leading-snug mt-3">
                Want to send another?
              </p>
              <div className="absolute bottom-4 right-6 text-2xl text-[#1a1a1a]" style={{ transform: "rotate(-4deg)" }}>
                — Gabriel & the team
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 8. CARTOGRAPHIC ============ */}
      <MockupHeader num="08" name="Cartographic / Journey" vibe="map-led, visual storytelling" />
      <section className="bg-[#f0ead6] text-[#2a2a2a] py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative" style={{ fontFamily: "var(--mock-inter)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-[#67156E] mb-4 flex items-center gap-3">
            <span className="w-12 h-px bg-[#67156E]" />
            Six schools · Two countries
          </div>
          <h2 className="text-5xl md:text-7xl leading-[0.95] mb-10 max-w-3xl" style={{ fontFamily: "var(--mock-dm-serif)" }}>
            From Juba to Lira:<br />
            a map of where we work.
          </h2>

          <div className="bg-[#fdfcf1] border-2 border-[#67156E]/30 p-8 md:p-12 relative overflow-hidden" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M0 20 H40 M20 0 V40' stroke='%2367156E' stroke-width='0.3' opacity='0.15'/></svg>\")" }}>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-5">
                {[
                  { city: "Juba", country: "South Sudan", schools: "Juba Integrated Primary · Juba Integrated High", coord: "4.85°N · 31.58°E" },
                  { city: "Gulu", country: "Uganda", schools: "Gulu Primary · Gulu Central High", coord: "2.78°N · 32.30°E" },
                  { city: "Entebbe", country: "Uganda", schools: "Broader Vision School", coord: "0.05°N · 32.46°E" },
                  { city: "Lira", country: "Uganda", schools: "St. Gracious Secondary", coord: "2.25°N · 32.90°E" },
                ].map((p) => (
                  <div key={p.city} className="border-l-4 border-[#67156E] pl-4">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <span className="text-2xl font-bold" style={{ fontFamily: "var(--mock-dm-serif)" }}>{p.city}</span>
                      <span className="text-sm uppercase tracking-widest text-[#67156E]">{p.country}</span>
                    </div>
                    <div className="text-sm text-[#2a2a2a]/80 mt-1">{p.schools}</div>
                    <div className="text-xs font-mono text-[#67156E]/70 mt-1">{p.coord}</div>
                  </div>
                ))}
              </div>
              <div className="relative aspect-[4/5] bg-[#67156E]/5 border border-[#67156E]/30 overflow-hidden">
                <Image src="/photos/schools/six-schools-map.png" alt="Map of HHSS partner schools" fill className="object-contain p-4" />
                <div className="absolute bottom-2 right-2 text-[10px] uppercase tracking-widest font-mono text-[#67156E]">
                  Helping Hands for South Sudan · 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 9. MODERN MINIMAL ============ */}
      <MockupHeader num="09" name="Modern Minimal" vibe="lots of space, huge type, single accent" />
      <section className="bg-white text-[#0a0a0a] py-32 md:py-48 px-4 sm:px-6 lg:px-8" style={{ fontFamily: "var(--mock-inter)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.4em] text-[#0a0a0a]/60 mb-12">
            Helping Hands for South Sudan
          </div>
          <h2 className="text-[8vw] md:text-[6.5vw] font-light tracking-[-0.04em] leading-[0.95]">
            <span className="block">Refugee kids,</span>
            <span className="block">in classrooms.</span>
            <span className="block text-[#67156E] font-bold">1,500 of them.</span>
          </h2>
          <div className="mt-20 grid md:grid-cols-3 gap-12 max-w-4xl">
            <div>
              <div className="text-5xl md:text-6xl font-light tracking-[-0.04em] mb-2">6</div>
              <div className="text-sm text-[#0a0a0a]/60">Partner schools across South Sudan and Uganda</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-light tracking-[-0.04em] mb-2">$500</div>
              <div className="text-sm text-[#0a0a0a]/60">Funds a year of school for one student</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-light tracking-[-0.04em] mb-2">~1%</div>
              <div className="text-sm text-[#0a0a0a]/60">Operating overhead. Volunteer board.</div>
            </div>
          </div>
          <div className="mt-20 inline-flex items-center gap-2 text-base group cursor-pointer">
            <span className="border-b border-[#67156E] pb-1">Donate</span>
            <span className="text-[#67156E] group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </section>

      {/* ============ 10. STRIPE / SAAS CLEAN ============ */}
      <MockupHeader num="10" name="Stripe / Trust-clean" vibe="soft gradients, rounded cards, fintech polish" />
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ fontFamily: "var(--mock-inter)", background: "linear-gradient(180deg, #faf8ff 0%, #fff 100%)" }}>
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-br from-purple/30 via-orange/20 to-transparent blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white border border-purple/20 rounded-full px-4 py-1.5 text-xs text-purple shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              501(c)(3) · Tax-deductible · 1% overhead
            </div>
            <h2 className="text-5xl md:text-7xl leading-[1.05] tracking-[-0.03em] font-semibold max-w-4xl mx-auto">
              Education that <span className="bg-gradient-to-r from-purple to-orange bg-clip-text text-transparent">reaches the kids</span>.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              In 2025, Helping Hands for South Sudan funded 1,500 students at six partner schools across South Sudan and Uganda. Built and run by volunteers since 2018.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <button className="bg-purple text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-purple-deep transition shadow-md">
                Donate $500 →
              </button>
              <button className="bg-white text-gray-900 px-7 py-3 rounded-full text-sm font-medium border border-gray-200 hover:border-gray-300 transition shadow-sm">
                See impact
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto mt-12">
            {[
              { n: "1,500", l: "Students in 2025" },
              { n: "6", l: "Partner schools" },
              { n: "~1%", l: "Operating overhead" },
            ].map((s) => (
              <div key={s.l} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div className="text-4xl md:text-5xl font-semibold tracking-tight mb-1 bg-gradient-to-br from-purple to-orange bg-clip-text text-transparent">{s.n}</div>
                <div className="text-sm text-gray-500">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="bg-ink text-paper py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-display uppercase tracking-tight text-4xl md:text-5xl mb-4">
            Pick your favorite.
          </h3>
          <p className="text-paper/70 mb-8">
            Once you choose, the full site (all six routes) gets rebuilt in that
            direction. Send Stephen the number.
          </p>
          <div className="font-hand text-2xl text-paper/60">
            — internal mockup page · not indexed
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-3xl md:text-4xl text-purple leading-none">{n}</div>
      <div className="font-display uppercase tracking-[0.15em] text-[10px] text-ink-muted mt-1">{l}</div>
    </div>
  );
}
