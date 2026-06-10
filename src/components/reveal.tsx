"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  variant?: "rise" | "stamp" | "develop" | "write";
  /** transition-delay in ms, for staggering siblings */
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

// Scroll-triggered entrance wrapper. Adds .is-in once when the element
// enters the viewport; all motion lives in globals.css so reduced-motion
// is handled in one place. A <noscript> fallback in layout.tsx un-hides
// everything if JS never runs.
export function Reveal({
  variant = "rise",
  delay = 0,
  className = "",
  children,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || shown) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [shown]);

  return (
    <div
      ref={ref}
      className={`reveal reveal--${variant} ${shown ? "is-in" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
