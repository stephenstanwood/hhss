"use client";

import Image from "next/image";
import { Lightbox } from "@/components/lightbox";

// Stable shuffle so SSR + client match.
const PHOTOS = [
  { src: "/photos/wall/thanks-05-30-56.jpg", caption: "Day of Thanks, Juba High" },
  { src: "/photos/wall/jubahigh-01.jpg", caption: "Juba Integrated High" },
  { src: "/photos/wall/schools-01.jpg", caption: "Juba Integrated" },
  { src: "/photos/wall/thanks-05-30-58.jpg", caption: "Juba High" },
  { src: "/photos/wall/jubahigh-02.jpg", caption: "Juba High students" },
  { src: "/photos/wall/thanks-05-30-57_1.jpg", caption: "Juba High" },
  { src: "/photos/wall/schools-02.jpg", caption: "Partner school" },
  { src: "/photos/wall/jubahigh-03.jpg", caption: "Juba High" },
  { src: "/photos/wall/thanks-05-30-59.jpg", caption: "Day of Thanks" },
  { src: "/photos/wall/schools-03.jpg", caption: "Partner school" },
  { src: "/photos/wall/jubahigh-04.jpg", caption: "Juba High" },
  { src: "/photos/wall/thanks-05-30-58_1.jpg", caption: "Juba High" },
  { src: "/photos/wall/schools-04.jpg", caption: "Partner school" },
  { src: "/photos/wall/thanks-05-31-00.jpg", caption: "Day of Thanks" },
  { src: "/photos/wall/jubahigh-05.jpg", caption: "Juba High" },
  { src: "/photos/wall/thanks-05-30-58_2.jpg", caption: "Juba High" },
  { src: "/photos/wall/schools-05.jpg", caption: "Partner school" },
  { src: "/photos/wall/jubahigh-06.jpg", caption: "Juba High" },
  { src: "/photos/wall/thanks-05-30-59_1.jpg", caption: "Day of Thanks" },
  { src: "/photos/wall/schools-06.jpg", caption: "Partner school" },
  { src: "/photos/wall/jubahigh-07.jpg", caption: "Juba High" },
  { src: "/photos/wall/thanks-05-31-01_1.jpg", caption: "Juba High" },
  { src: "/photos/wall/schools-07.jpg", caption: "Partner school" },
  { src: "/photos/wall/thanks-05-31-02_1.jpg", caption: "Juba High" },
  { src: "/photos/wall/jubahigh-08.jpg", caption: "Juba High" },
  { src: "/photos/wall/thanks-05-31-03_1.jpg", caption: "Juba High" },
  { src: "/photos/wall/schools-08.jpg", caption: "Partner school" },
  { src: "/photos/wall/thanks-05-31-04.jpg", caption: "Juba High" },
  { src: "/photos/wall/thanks-05-31-04_1.jpg", caption: "Juba High" },
  { src: "/photos/wall/thanks-05-31-04_2.jpg", caption: "Juba High" },
];

export function WallOfKids() {
  return (
    <Lightbox photos={PHOTOS}>
      {(open) => (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1.5 md:gap-2">
          {PHOTOS.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={() => open(i)}
              className="relative aspect-square overflow-hidden border border-ink/30 group focus:outline-none focus:ring-2 focus:ring-purple"
              aria-label={`Open photo: ${p.caption}`}
            >
              <Image
                src={p.src}
                alt={p.caption}
                fill
                sizes="(max-width: 768px) 33vw, 12vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-purple/0 group-hover:bg-purple/30 transition-colors" />
            </button>
          ))}
        </div>
      )}
    </Lightbox>
  );
}
