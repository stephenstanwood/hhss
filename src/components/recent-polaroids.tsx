"use client";

import Image from "next/image";
import { Lightbox } from "@/components/lightbox";

type Photo = { src: string; caption: string };

const TILTS = [-2, 1.5, -1, 2.4, -1.6, 2.0, -0.8, 1.4];

export function RecentPolaroids({ photos }: { photos: Photo[] }) {
  return (
    <Lightbox photos={photos}>
      {(open) => (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {photos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={() => open(i)}
              className="polaroid block w-full text-left focus:outline-none focus:ring-2 focus:ring-purple"
              style={{ transform: `rotate(${TILTS[i % TILTS.length]}deg)` }}
              aria-label={`Open photo: ${p.caption}`}
            >
              <div className="relative aspect-[3/4] bg-ink/10">
                <Image
                  src={p.src}
                  alt={p.caption}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="text-center font-hand text-base md:text-lg text-ink mt-1.5">
                {p.caption}
              </div>
            </button>
          ))}
        </div>
      )}
    </Lightbox>
  );
}
