import Image from "next/image";

const SCHOOLS = [
  {
    key: "juba-primary",
    name: "Juba Integrated Primary",
    country: "South Sudan",
    img: "/photos/schools/juba-3.jpg",
  },
  {
    key: "juba-high",
    name: "Juba Integrated High",
    country: "South Sudan",
    img: "/photos/schools/juba-2.jpg",
  },
  {
    key: "broader-vision",
    name: "Broader Vision School",
    country: "Uganda",
    img: "/photos/schools/broader-vision.jpg",
  },
  {
    key: "gulu",
    name: "Gulu Primary",
    country: "Uganda",
    img: "/photos/schools/gulu.jpg",
  },
  {
    key: "gulu-central",
    name: "Gulu Central High",
    country: "Uganda",
    img: "/photos/schools/gulu-central.jpg",
  },
  {
    key: "st-gracious",
    name: "St. Gracious Secondary",
    country: "Uganda",
    img: "/photos/schools/st-gracious.jpg",
  },
];

export function SchoolsMap() {
  return (
    <div>
      <div className="relative max-w-2xl mx-auto">
        <Image
          src="/photos/schools/africa-countries.png"
          alt="Map of Africa with South Sudan, Uganda, and Kenya highlighted"
          width={950}
          height={1020}
          priority
          className="w-full h-auto block"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        {SCHOOLS.map((s) => (
          <article
            key={s.key}
            className="bg-paper border-2 border-ink shadow-[3px_3px_0_var(--ink)] overflow-hidden hover:-translate-y-0.5 hover:shadow-[5px_5px_0_var(--purple)] transition-all"
          >
            <div className="relative aspect-[4/3] bg-ink/10">
              <Image
                src={s.img}
                alt={s.name}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover object-top"
              />
            </div>
            <div className="p-3">
              <div className="font-display uppercase tracking-[0.15em] text-[10px] text-purple">
                {s.country}
              </div>
              <div className="font-display uppercase tracking-tight text-sm leading-tight mt-0.5">
                {s.name}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
