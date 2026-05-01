"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type TimelineItem = {
  year: string;
  title: string;
  body: string;
  img?: string;
  imgAlt?: string;
};

// Sticky-image scroll storytelling. The image column sticks while the right
// column scrolls; as each story-frame enters the viewport it becomes the
// "active" image with a soft crossfade.
export function CinematicTimeline({ items }: { items: TimelineItem[] }) {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) setActive(i);
          }
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [items.length]);

  const withImg = items.filter((i) => i.img);
  const placeholder = withImg[0]?.img ?? items[0]?.img;

  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
      <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
        <div className="relative max-w-md mx-auto">
          <div className="absolute -inset-4 bg-orange/30 -rotate-2" aria-hidden="true" />
          <div className="relative aspect-[4/5] border-2 border-ink overflow-hidden bg-ink/10">
            {items.map((item, i) => {
              const src = item.img ?? placeholder;
              if (!src) return null;
              return (
                <Image
                  key={item.year + item.title}
                  src={src}
                  alt={item.imgAlt ?? item.title}
                  fill
                  sizes="(max-width: 1024px) 80vw, 460px"
                  className="object-cover transition-opacity duration-700"
                  style={{ opacity: i === active ? 1 : 0 }}
                  priority={i === 0}
                />
              );
            })}
          </div>
          <div className="font-display uppercase tracking-[0.2em] text-xs text-ink-muted mt-4 text-center">
            {items[active]?.year} · scroll →
          </div>
        </div>
      </div>

      <ol className="lg:col-span-7 space-y-20 md:space-y-28 relative">
        <span
          className="absolute left-3 top-2 bottom-2 w-px bg-ink/15 hidden lg:block"
          aria-hidden="true"
        />
        {items.map((item, i) => (
          <li
            key={item.year + item.title}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className="relative lg:pl-10"
          >
            <span
              className={`hidden lg:block absolute left-[7px] top-3 w-3 h-3 border-2 border-ink rounded-full transition-colors ${
                i === active ? "bg-purple" : "bg-paper"
              }`}
              aria-hidden="true"
            />
            <div className="font-display uppercase tracking-[0.25em] text-xs text-purple mb-2">
              {item.year}
            </div>
            <h3 className="font-display uppercase tracking-tight text-3xl md:text-5xl leading-[0.95] mb-4">
              {item.title}
            </h3>
            <p className="text-lg text-ink-soft leading-relaxed max-w-xl">
              {item.body}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
