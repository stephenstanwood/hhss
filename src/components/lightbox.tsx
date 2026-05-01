"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

type Photo = { src: string; caption?: string; alt?: string };

type Props = {
  photos: Photo[];
  className?: string;
  children: (open: (i: number) => void) => React.ReactNode;
};

export function Lightbox({ photos, className = "", children }: Props) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    [photos.length]
  );
  const prev = useCallback(
    () =>
      setIndex((i) =>
        i === null ? null : (i - 1 + photos.length) % photos.length
      ),
    [photos.length]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, next, prev]);

  return (
    <div className={className}>
      {children((i) => setIndex(i))}
      {index !== null && (
        <div
          className="fixed inset-0 z-[100] bg-ink/92 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 border-2 border-paper text-paper text-2xl flex items-center justify-center hover:bg-paper hover:text-ink transition-colors"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 border-2 border-paper text-paper text-2xl flex items-center justify-center hover:bg-paper hover:text-ink transition-colors"
          >
            ›
          </button>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 border-2 border-paper text-paper text-lg flex items-center justify-center hover:bg-paper hover:text-ink transition-colors"
          >
            ×
          </button>

          <figure
            className="relative max-w-5xl w-full max-h-[88vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ height: "78vh" }}>
              <Image
                src={photos[index].src}
                alt={photos[index].alt ?? photos[index].caption ?? ""}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>
            {photos[index].caption && (
              <figcaption className="text-center font-hand text-xl md:text-2xl text-paper mt-3">
                {photos[index].caption}
              </figcaption>
            )}
            <div className="text-center text-paper/60 font-display uppercase tracking-[0.2em] text-[10px] mt-1">
              {index + 1} / {photos.length}
            </div>
          </figure>
        </div>
      )}
    </div>
  );
}
