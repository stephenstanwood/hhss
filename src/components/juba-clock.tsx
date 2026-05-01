"use client";

import { useEffect, useState } from "react";

// East Africa Time = UTC+3 (Juba, South Sudan + Kampala, Uganda).
// Approximate sunrise/sunset for Juba (~4.85°N): roughly 06:30 → 18:45 year-round.
function getJubaState() {
  const now = new Date();
  const utcMs = now.getTime() + now.getTimezoneOffset() * 60_000;
  const eat = new Date(utcMs + 3 * 60 * 60 * 1000);

  const h = eat.getHours();
  const m = eat.getMinutes();
  const minutes = h * 60 + m;

  // dawn 06:00–06:45, day 06:45–18:30, dusk 18:30–19:15, night otherwise
  let phase: "night" | "dawn" | "day" | "dusk";
  if (minutes >= 360 && minutes < 405) phase = "dawn";
  else if (minutes >= 405 && minutes < 1110) phase = "day";
  else if (minutes >= 1110 && minutes < 1155) phase = "dusk";
  else phase = "night";

  const hh = ((h + 11) % 12) + 1;
  const mm = m.toString().padStart(2, "0");
  const ampm = h < 12 ? "am" : "pm";

  return { time: `${hh}:${mm}${ampm}`, phase };
}

const ICON: Record<string, string> = {
  night: "☾",
  dawn: "☀",
  day: "☀",
  dusk: "☾",
};

const LABEL: Record<string, string> = {
  night: "after dark",
  dawn: "sunrise",
  day: "in session",
  dusk: "sundown",
};

export function JubaClock() {
  const [state, setState] = useState<{ time: string; phase: string } | null>(null);

  useEffect(() => {
    setState(getJubaState());
    const id = setInterval(() => setState(getJubaState()), 30_000);
    return () => clearInterval(id);
  }, []);

  if (!state) {
    // SSR placeholder, layout-stable
    return (
      <div className="inline-flex items-center gap-2 border-2 border-ink bg-paper px-3 py-1.5 shadow-[3px_3px_0_var(--ink)]">
        <span className="text-base leading-none">○</span>
        <span className="font-display uppercase tracking-[0.18em] text-[10px] leading-none">
          Live in Juba
        </span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 border-2 border-ink bg-paper px-3 py-1.5 shadow-[3px_3px_0_var(--ink)]">
      <span className="text-base leading-none" aria-hidden="true">
        {ICON[state.phase]}
      </span>
      <div className="flex items-baseline gap-1.5">
        <span className="font-display uppercase tracking-[0.18em] text-[10px] leading-none text-ink-muted">
          Juba
        </span>
        <span className="font-mono text-[12px] leading-none text-ink">
          {state.time}
        </span>
        <span className="font-hand text-[15px] leading-none text-purple">
          · {LABEL[state.phase]}
        </span>
      </div>
    </div>
  );
}
