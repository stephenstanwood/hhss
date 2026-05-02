"use client";

import Image from "next/image";
import { Lightbox } from "@/components/lightbox";

// Curated face-shots and group-shots, ordered so uniform colors alternate
// (blue → pink → blue → white → red → ...). Stephen specifically called out:
// no buildings, no backs-of-groups, no distant crowd shots — only photos
// where you can read the kids' faces.
const PHOTOS = [
  { src: "/photos/wall/jubahigh-01.jpg", caption: "Juba High" },
  { src: "/photos/field/students-feb23.jpg", caption: "Schoolmate" },
  { src: "/photos/wall/schools-07.jpg", caption: "Juba Integrated" },
  { src: "/photos/godaddy/students-3.jpg", caption: "Three of ours" },
  { src: "/photos/wall/thanks-05-31-04_2.jpg", caption: "Day of Thanks" },
  { src: "/photos/wall/jubahigh-02.jpg", caption: "Juba High" },
  { src: "/photos/godaddy/classroom-1.jpg", caption: "Classroom" },
  { src: "/photos/godaddy/students-1.jpg", caption: "Walking to school" },
  { src: "/photos/wall/jubahigh-03.jpg", caption: "Juba High classroom" },
  { src: "/photos/field/children-group.jpg", caption: "At the camp" },
  { src: "/photos/wall/thanks-05-31-04.jpg", caption: "Day of Thanks" },
  { src: "/photos/wall/thanks-05-30-56.jpg", caption: "Day of Thanks" },
  { src: "/photos/field/juba-students-2.jpg", caption: "Juba" },
  { src: "/photos/wall/schools-05.jpg", caption: "Assembly" },
  { src: "/photos/wall/thanks-05-30-57_1.jpg", caption: "Day of Thanks" },
  { src: "/photos/wall/thanks-05-30-58.jpg", caption: "Day of Thanks" },
];

export function WallOfKids() {
  return (
    <Lightbox photos={PHOTOS}>
      {(open) => (
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
          {/* Edge fades — hint at scrollable content */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 bottom-4 w-8 md:w-12 z-10 bg-gradient-to-r from-paper to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 bottom-4 w-8 md:w-12 z-10 bg-gradient-to-l from-paper to-transparent"
          />

          <div
            className="flex gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-4 sm:px-6 lg:px-8 scroll-smooth"
            style={{ scrollbarWidth: "thin" }}
          >
            {PHOTOS.map((p, i) => (
              <button
                key={p.src}
                type="button"
                onClick={() => open(i)}
                className="shrink-0 snap-start group focus:outline-none focus:ring-2 focus:ring-purple"
                aria-label={`Open photo: ${p.caption}`}
              >
                <div className="relative w-56 sm:w-64 md:w-72 lg:w-80 aspect-square overflow-hidden border-2 border-ink shadow-[4px_4px_0_var(--ink)] group-hover:shadow-[6px_6px_0_var(--purple)] group-hover:-translate-y-0.5 transition-all">
                  <Image
                    src={p.src}
                    alt={p.caption}
                    fill
                    sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 320px"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="text-center mt-2 font-display uppercase tracking-[0.25em] text-[10px] text-ink-muted">
            ← swipe →
          </div>
        </div>
      )}
    </Lightbox>
  );
}
