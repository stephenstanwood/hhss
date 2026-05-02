"use client";

import Image from "next/image";
import { Lightbox } from "@/components/lightbox";

// Mix of curated photos pulled from the long-running live site (godaddy/),
// 2024 Day of Thanks at Juba High, and 2023 Juba High Facebook posts.
const PHOTOS = [
  { src: "/photos/godaddy/students-1.jpg", caption: "Students" },
  { src: "/photos/godaddy/classroom-1.jpg", caption: "Classroom" },
  { src: "/photos/godaddy/singing.jpg", caption: "Assembly" },
  { src: "/photos/godaddy/students-2.jpg", caption: "Schoolyard" },
  { src: "/photos/wall/thanks-05-30-56.jpg", caption: "Day of Thanks, Juba High" },
  { src: "/photos/godaddy/teens-lineup.jpg", caption: "Lined up" },
  { src: "/photos/godaddy/classroom-2.jpg", caption: "Classroom" },
  { src: "/photos/wall/jubahigh-01.jpg", caption: "Juba High" },
  { src: "/photos/godaddy/students-3.jpg", caption: "Schoolyard" },
  { src: "/photos/wall/thanks-05-30-58.jpg", caption: "Juba High" },
  { src: "/photos/godaddy/camp-1.jpg", caption: "Camp" },
  { src: "/photos/godaddy/students-4.jpg", caption: "Students" },
  { src: "/photos/wall/jubahigh-02.jpg", caption: "Juba High" },
  { src: "/photos/godaddy/classroom-3.jpg", caption: "Classroom" },
  { src: "/photos/godaddy/school.jpg", caption: "School" },
  { src: "/photos/wall/thanks-05-30-57_1.jpg", caption: "Juba High" },
  { src: "/photos/godaddy/students-5.jpg", caption: "Students" },
  { src: "/photos/godaddy/camp-2.jpg", caption: "Camp" },
  { src: "/photos/wall/jubahigh-03.jpg", caption: "Juba High" },
  { src: "/photos/wall/thanks-05-30-59.jpg", caption: "Day of Thanks" },
  { src: "/photos/godaddy/camp-3.jpg", caption: "Camp" },
  { src: "/photos/wall/jubahigh-04.jpg", caption: "Juba High" },
  { src: "/photos/wall/thanks-05-30-58_1.jpg", caption: "Juba High" },
  { src: "/photos/wall/jubahigh-05.jpg", caption: "Juba High" },
  { src: "/photos/godaddy/grass-1.jpg", caption: "On the way" },
  { src: "/photos/wall/jubahigh-06.jpg", caption: "Juba High" },
  { src: "/photos/wall/thanks-05-31-00.jpg", caption: "Day of Thanks" },
  { src: "/photos/wall/jubahigh-07.jpg", caption: "Juba High" },
  { src: "/photos/wall/thanks-05-31-04.jpg", caption: "Juba High" },
  { src: "/photos/wall/jubahigh-08.jpg", caption: "Juba High" },
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
