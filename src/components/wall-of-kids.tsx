"use client";

import Image from "next/image";
import { Lightbox } from "@/components/lightbox";

// Curated face / group shots from across the partner schools and the
// Day of Thanks events. Stephen's rule: no buildings, no backs of heads,
// no distant crowds — only photos where the kids' faces read.
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
  { src: "/photos/wall/jubahigh-04.jpg", caption: "Juba High" },
  { src: "/photos/godaddy/students-2.jpg", caption: "Students" },
  { src: "/photos/wall/thanks-05-31-00.jpg", caption: "Day of Thanks" },
  { src: "/photos/field/juba-students-1.jpg", caption: "Juba" },
  { src: "/photos/wall/jubahigh-05.jpg", caption: "Juba High" },
  { src: "/photos/wall/thanks-05-30-58_1.jpg", caption: "Day of Thanks" },
  { src: "/photos/godaddy/classroom-2.jpg", caption: "Classroom" },
  { src: "/photos/wall/jubahigh-06.jpg", caption: "Juba High" },
  { src: "/photos/wall/thanks-05-30-59.jpg", caption: "Day of Thanks" },
  { src: "/photos/field/students-feb23-2.jpg", caption: "Schoolmate" },
  { src: "/photos/wall/jubahigh-07.jpg", caption: "Juba High" },
  { src: "/photos/wall/thanks-05-31-01_1.jpg", caption: "Day of Thanks" },
  { src: "/photos/wall/bvs-girls.jpg", caption: "BVS girls" },
  { src: "/photos/wall/jubahigh-08.jpg", caption: "Juba High" },
  { src: "/photos/wall/thanks-05-30-58_2.jpg", caption: "Day of Thanks" },
  { src: "/photos/wall/thanks-05-31-04_1.jpg", caption: "Day of Thanks" },
];

export function WallOfKids() {
  return (
    <Lightbox photos={PHOTOS}>
      {(open) => (
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden">
          {/* Edge fades */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 md:w-16 z-10 bg-gradient-to-r from-paper to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 md:w-16 z-10 bg-gradient-to-l from-paper to-transparent"
          />

          <div
            className="marquee-track gap-3 md:gap-4 py-2 hover:[animation-play-state:paused]"
            style={{ animationDuration: "180s" }}
          >
            {[...PHOTOS, ...PHOTOS].map((p, i) => (
              <button
                key={`${p.src}-${i}`}
                type="button"
                onClick={() => open(i % PHOTOS.length)}
                className="shrink-0 group focus:outline-none focus:ring-2 focus:ring-purple"
                aria-label={`Open photo: ${p.caption}`}
              >
                <div className="relative w-56 sm:w-64 md:w-72 lg:w-80 aspect-square overflow-hidden border-2 border-ink shadow-[4px_4px_0_var(--ink)] group-hover:shadow-[6px_6px_0_var(--purple)] group-hover:-translate-y-0.5 transition-all">
                  <Image
                    src={p.src}
                    alt={p.caption}
                    fill
                    sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 320px"
                    className="object-cover object-top"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </Lightbox>
  );
}
