"use client";

import Image from "next/image";
import { useState } from "react";

// School positions are expressed as percentages of the AFRICAN COUNTRIES.png
// (950×1020 — South Sudan in purple, Uganda in red, Kenya in green).
// Two Juba schools are slightly offset so both pins are visible.
const SCHOOLS = [
  {
    key: "juba-primary",
    name: "Juba Integrated Primary",
    country: "South Sudan",
    img: "/photos/schools/juba-3.jpg",
    pos: { x: 63.5, y: 46.5 },
  },
  {
    key: "juba-high",
    name: "Juba Integrated High",
    country: "South Sudan",
    img: "/photos/schools/juba-2.jpg",
    pos: { x: 65.5, y: 47.5 },
  },
  {
    key: "broader-vision",
    name: "Broader Vision School",
    country: "Uganda",
    img: "/photos/schools/broader-vision.jpg",
    pos: { x: 62.5, y: 49.5 }, // Adjumani area, far N. Uganda
  },
  {
    key: "gulu",
    name: "Gulu Primary",
    country: "Uganda",
    img: "/photos/schools/gulu.jpg",
    pos: { x: 64, y: 52 },
  },
  {
    key: "gulu-central",
    name: "Gulu Central High",
    country: "Uganda",
    img: "/photos/schools/gulu-central.jpg",
    pos: { x: 66, y: 53 },
  },
  {
    key: "st-gracious",
    name: "St. Gracious Secondary",
    country: "Uganda",
    img: "/photos/schools/st-gracious.jpg",
    pos: { x: 67.5, y: 57.5 }, // Kampala area, S. Uganda
  },
];

export function SchoolsMap() {
  const [active, setActive] = useState<string | null>(null);

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

        {/* Overlay pins, positioned in percentages of the image */}
        <div className="absolute inset-0 pointer-events-none">
          {SCHOOLS.map((s) => (
            <button
              key={s.key}
              type="button"
              onMouseEnter={() => setActive(s.key)}
              onFocus={() => setActive(s.key)}
              onMouseLeave={() => setActive(null)}
              onBlur={() => setActive(null)}
              onClick={() => setActive(s.key)}
              aria-label={`${s.name}, ${s.country}`}
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group focus:outline-none"
              style={{ left: `${s.pos.x}%`, top: `${s.pos.y}%` }}
            >
              {/* Pin */}
              <span
                className={`block rounded-full border-2 border-ink shadow-[2px_2px_0_var(--ink)] transition-all ${
                  active === s.key
                    ? "w-5 h-5 bg-paper"
                    : "w-3.5 h-3.5 bg-paper group-hover:w-5 group-hover:h-5"
                }`}
              />
              <span className="block absolute inset-0 m-auto w-1.5 h-1.5 rounded-full bg-ink" />
              {/* Hover label */}
              <span
                className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap font-display uppercase tracking-[0.15em] text-[10px] bg-paper border-2 border-ink px-2 py-1 shadow-[2px_2px_0_var(--ink)] transition-opacity ${
                  active === s.key ? "opacity-100" : "opacity-0"
                }`}
              >
                {s.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* School cards below — hover-linked with the pins. */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        {SCHOOLS.map((s) => (
          <button
            key={s.key}
            type="button"
            onMouseEnter={() => setActive(s.key)}
            onFocus={() => setActive(s.key)}
            onMouseLeave={() => setActive(null)}
            onBlur={() => setActive(null)}
            className={`group text-left bg-paper border-2 border-ink overflow-hidden transition-all ${
              active === s.key
                ? "shadow-[5px_5px_0_var(--purple)] -translate-y-0.5"
                : "shadow-[3px_3px_0_var(--ink)]"
            }`}
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
          </button>
        ))}
      </div>
    </div>
  );
}
