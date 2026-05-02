"use client";

import Image from "next/image";
import { Lightbox } from "@/components/lightbox";

// 20 close-up photos of kids — no adults, no buildings, no distant crowds.
// Mix of 2024 Day of Thanks (Juba High), 2023 Juba High Facebook posts,
// 2026 Juba Integrated Schools Facebook posts, godaddy curated, and field
// trips. Tile size is bigger (5 cols on desktop) so faces read.
const PHOTOS = [
  { src: "/photos/wall/jubahigh-01.jpg", caption: "Juba High" },
  { src: "/photos/wall/thanks-05-31-04.jpg", caption: "Day of Thanks" },
  { src: "/photos/wall/schools-03.jpg", caption: "Juba High" },
  { src: "/photos/wall/jubahigh-02.jpg", caption: "Juba High" },
  { src: "/photos/wall/thanks-05-30-58.jpg", caption: "Day of Thanks" },
  { src: "/photos/wall/schools-07.jpg", caption: "Juba Integrated" },
  { src: "/photos/godaddy/students-3.jpg", caption: "Schoolyard" },
  { src: "/photos/wall/thanks-05-30-56.jpg", caption: "Day of Thanks" },
  { src: "/photos/wall/jubahigh-03.jpg", caption: "Juba High" },
  { src: "/photos/godaddy/classroom-1.jpg", caption: "Classroom" },
  { src: "/photos/wall/schools-02.jpg", caption: "Classroom" },
  { src: "/photos/wall/thanks-05-31-04_2.jpg", caption: "Day of Thanks" },
  { src: "/photos/field/students-feb23.jpg", caption: "Schoolmate" },
  { src: "/photos/wall/jubahigh-05.jpg", caption: "Juba High" },
  { src: "/photos/wall/schools-05.jpg", caption: "Assembly" },
  { src: "/photos/godaddy/students-4.jpg", caption: "On the way" },
  { src: "/photos/wall/thanks-05-30-58_2.jpg", caption: "Day of Thanks" },
  { src: "/photos/wall/thanks-05-30-57_1.jpg", caption: "Day of Thanks" },
  { src: "/photos/godaddy/students-1.jpg", caption: "Schoolyard" },
  { src: "/photos/field/children-group.jpg", caption: "At the camp" },
];

export function WallOfKids() {
  return (
    <Lightbox photos={PHOTOS}>
      {(open) => (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
          {PHOTOS.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={() => open(i)}
              className="relative aspect-square overflow-hidden border-2 border-ink group focus:outline-none focus:ring-2 focus:ring-purple"
              aria-label={`Open photo: ${p.caption}`}
            >
              <Image
                src={p.src}
                alt={p.caption}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-purple/0 group-hover:bg-purple/25 transition-colors" />
            </button>
          ))}
        </div>
      )}
    </Lightbox>
  );
}
