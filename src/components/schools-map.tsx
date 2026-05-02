"use client";

import Image from "next/image";
import { useState } from "react";

// Approximate coords (lat, lon) → mapped to viewBox 800x600.
// Region shown: South Sudan + Uganda, roughly lat -1.5..12, lon 24..36.
// Each school includes a hand-pinned position in viewBox units.
const SCHOOLS = [
  {
    key: "juba-primary",
    name: "Juba Integrated Primary",
    country: "South Sudan",
    img: "/photos/schools/juba-3.jpg",
    pos: { x: 470, y: 250 }, // Juba area, slightly offset
  },
  {
    key: "juba-high",
    name: "Juba Integrated High",
    country: "South Sudan",
    img: "/photos/schools/juba-2.jpg",
    pos: { x: 510, y: 270 },
  },
  {
    key: "broader-vision",
    name: "Broader Vision School",
    country: "Uganda",
    img: "/photos/schools/broader-vision.jpg",
    pos: { x: 440, y: 350 }, // Adjumani area
  },
  {
    key: "gulu",
    name: "Gulu Primary",
    country: "Uganda",
    img: "/photos/schools/gulu.jpg",
    pos: { x: 490, y: 405 }, // Gulu
  },
  {
    key: "gulu-central",
    name: "Gulu Central High",
    country: "Uganda",
    img: "/photos/schools/gulu-central.jpg",
    pos: { x: 525, y: 415 },
  },
  {
    key: "st-gracious",
    name: "St. Gracious Secondary",
    country: "Uganda",
    img: "/photos/schools/st-gracious.jpg",
    pos: { x: 555, y: 490 }, // Kampala area
  },
];

export function SchoolsMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative">
      <svg
        viewBox="0 0 800 600"
        className="w-full h-auto"
        aria-label="Map of partner schools across South Sudan and Uganda"
      >
        {/* Paper texture grid */}
        <defs>
          <pattern id="paperGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="rgba(0,0,0,0.04)"
              strokeWidth="0.5"
            />
          </pattern>
          <filter id="rough">
            <feTurbulence baseFrequency="0.02" numOctaves="2" seed="3" />
            <feDisplacementMap in="SourceGraphic" scale="1.5" />
          </filter>
        </defs>

        <rect width="800" height="600" fill="var(--paper)" />
        <rect width="800" height="600" fill="url(#paperGrid)" />

        {/* Hand-drawn approximate borders. South Sudan (top), Uganda (bottom). */}
        {/* South Sudan rough outline */}
        <path
          d="M 230 80 C 280 60, 360 70, 430 75 C 510 80, 590 90, 660 110 C 670 140, 660 200, 640 240 C 600 270, 540 290, 480 295 C 420 300, 360 295, 300 280 C 260 260, 230 220, 220 180 C 215 140, 220 105, 230 80 Z"
          fill="#f0e9d4"
          stroke="var(--ink)"
          strokeWidth="2"
          strokeLinejoin="round"
          opacity="0.85"
        />
        <text
          x="380"
          y="170"
          fontFamily="var(--font-display)"
          fontSize="22"
          letterSpacing="4"
          fill="var(--ink)"
          opacity="0.55"
          textAnchor="middle"
        >
          SOUTH SUDAN
        </text>

        {/* Uganda rough outline */}
        <path
          d="M 410 320 C 460 310, 510 308, 570 320 C 620 335, 650 360, 645 410 C 640 460, 615 500, 580 520 C 530 540, 470 540, 420 525 C 380 510, 360 480, 365 440 C 370 395, 385 350, 410 320 Z"
          fill="#e8e0c5"
          stroke="var(--ink)"
          strokeWidth="2"
          strokeLinejoin="round"
          opacity="0.85"
        />
        <text
          x="500"
          y="445"
          fontFamily="var(--font-display)"
          fontSize="20"
          letterSpacing="4"
          fill="var(--ink)"
          opacity="0.55"
          textAnchor="middle"
        >
          UGANDA
        </text>

        {/* Lake Victoria hint */}
        <path
          d="M 600 510 C 640 500, 690 510, 700 540 C 695 565, 660 570, 620 560 C 595 545, 590 525, 600 510 Z"
          fill="#a9c8d8"
          stroke="var(--ink)"
          strokeWidth="1.5"
          opacity="0.7"
        />
        <text
          x="660"
          y="544"
          fontFamily="var(--font-hand)"
          fontSize="14"
          fill="var(--ink)"
          opacity="0.7"
        >
          Lake Victoria
        </text>

        {/* Nile river hand-drawn */}
        <path
          d="M 470 530 Q 470 460, 480 400 Q 490 340, 480 260 Q 470 180, 460 100"
          stroke="#5a8eaa"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="0"
          opacity="0.55"
        />
        <text
          x="446"
          y="200"
          fontFamily="var(--font-hand)"
          fontSize="14"
          fill="#3d6e8b"
          opacity="0.75"
          transform="rotate(-78 446 200)"
        >
          the Nile
        </text>

        {/* School markers */}
        {SCHOOLS.map((s) => (
          <g
            key={s.key}
            onMouseEnter={() => setActive(s.key)}
            onFocus={() => setActive(s.key)}
            onClick={() => setActive(s.key)}
            tabIndex={0}
            role="button"
            aria-label={`${s.name}, ${s.country}`}
            style={{ cursor: "pointer" }}
          >
            {/* Pin shadow */}
            <ellipse cx={s.pos.x + 1} cy={s.pos.y + 12} rx="8" ry="2" fill="rgba(0,0,0,0.18)" />
            {/* Pin body */}
            <circle
              cx={s.pos.x}
              cy={s.pos.y}
              r={active === s.key ? "11" : "8"}
              fill="var(--purple)"
              stroke="var(--ink)"
              strokeWidth="2"
              style={{ transition: "r 0.18s" }}
            />
            <circle cx={s.pos.x} cy={s.pos.y} r="3" fill="var(--paper)" />
          </g>
        ))}
      </svg>

      {/* School cards (positioned around the map). */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {SCHOOLS.map((s) => (
          <button
            key={s.key}
            type="button"
            onMouseEnter={() => setActive(s.key)}
            onFocus={() => setActive(s.key)}
            onMouseLeave={() => setActive(null)}
            className={`group text-left bg-paper border-2 border-ink overflow-hidden transition-all ${
              active === s.key ? "shadow-[5px_5px_0_var(--purple)] -translate-y-0.5" : "shadow-[3px_3px_0_var(--ink)]"
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
