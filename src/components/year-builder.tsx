"use client";

import { useRef, useState } from "react";
import {
  SCHOOL_YEAR_ITEMS,
  SCHOOL_YEAR_TOTAL,
} from "@/lib/school-year";
import {
  PAYPAL_BUSINESS_EMAIL,
  DONATE_RETURN_URL,
  DONATE_CANCEL_URL,
} from "@/lib/paypal";

// Interactive donate moment: the visitor assembles one student's real
// school year line by line. Every amount is the actual Juba budget line.
// The PayPal handoff carries whatever they've built.

const TILTS = [-1.4, 1.1, -0.7, 1.6, -1.2, 0.8, -1.6];

export function YearBuilder() {
  // key -> insertion tick; tick changes the row key so re-adding an item
  // replays its stamp-in animation
  const [added, setAdded] = useState<Map<string, number>>(new Map());
  const tickRef = useRef(0);

  const toggle = (key: string) => {
    setAdded((prev) => {
      const next = new Map(prev);
      if (next.has(key)) next.delete(key);
      else next.set(key, ++tickRef.current);
      return next;
    });
  };

  const addAll = () => {
    setAdded((prev) => {
      const next = new Map(prev);
      for (const item of SCHOOL_YEAR_ITEMS) {
        if (!next.has(item.key)) next.set(item.key, ++tickRef.current);
      }
      return next;
    });
  };

  const clear = () => setAdded(new Map());

  const total = SCHOOL_YEAR_ITEMS.reduce(
    (acc, i) => (added.has(i.key) ? acc + i.amount : acc),
    0
  );
  const complete = added.size === SCHOOL_YEAR_ITEMS.length;

  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
      {/* THE SUPPLIES — tappable stickers */}
      <div>
        <p className="font-hand text-2xl md:text-3xl text-paper/90 mb-6">
          tap what you want to cover ↓
        </p>
        <ul className="grid grid-cols-2 gap-3 md:gap-4">
          {SCHOOL_YEAR_ITEMS.map((item, i) => {
            const on = added.has(item.key);
            return (
              <li key={item.key}>
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggle(item.key)}
                  className={`w-full text-left border-2 border-ink p-4 md:p-5 transition-all ${
                    on
                      ? "bg-green text-paper shadow-[2px_2px_0_var(--ink)] translate-x-[2px] translate-y-[2px]"
                      : "bg-paper text-ink shadow-[5px_5px_0_var(--ink)] hover:-translate-y-0.5"
                  }`}
                  style={{ transform: `rotate(${TILTS[i] ?? 0}deg)` }}
                >
                  <span className="flex items-baseline justify-between gap-2">
                    <span className="font-display text-3xl md:text-4xl leading-none">
                      ${item.amount}
                    </span>
                    <span
                      className={`font-hand text-xl leading-none ${
                        on ? "" : "opacity-0"
                      }`}
                      aria-hidden="true"
                    >
                      ✓ got it
                    </span>
                  </span>
                  <span
                    className={`block font-display uppercase tracking-[0.15em] text-[11px] md:text-xs mt-2 ${
                      on ? "opacity-90" : "text-ink-muted"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}

          {/* the shortcut */}
          <li className="col-span-2">
            <div className="flex flex-wrap items-center gap-4 mt-1">
              <button
                type="button"
                onClick={complete ? clear : addAll}
                className="inline-flex items-center font-display uppercase tracking-wider text-sm bg-orange text-paper px-5 py-3 border-2 border-ink shadow-[4px_4px_0_var(--ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--ink)] transition-all"
              >
                {complete ? "Start over" : `The whole year · $${SCHOOL_YEAR_TOTAL}`}
              </button>
              {!complete && added.size > 0 && (
                <button
                  type="button"
                  onClick={clear}
                  className="font-display uppercase tracking-wider text-xs text-paper/70 underline underline-offset-4 hover:text-paper"
                >
                  Clear
                </button>
              )}
            </div>
          </li>
        </ul>
      </div>

      {/* THE RECEIPT — fills in live */}
      <div className="relative max-w-md w-full mx-auto lg:mx-0">
        <div
          className="absolute -top-3 left-1/2 w-32 h-5 bg-gold/60 border-x border-dashed border-ink/30 z-10"
          style={{ transform: "translateX(-50%) rotate(-2deg)" }}
          aria-hidden="true"
        />
        <div
          className="relative bg-paper border-2 border-ink shadow-[8px_8px_0_var(--ink)] p-6 md:p-7 pt-9 font-mono text-[13px] text-ink"
          style={{ transform: "rotate(-1deg)" }}
        >
          <div className="text-center font-display uppercase tracking-[0.25em] text-[11px] mb-1">
            HHSS · School Year Receipt
          </div>
          <div className="text-center text-[11px] text-ink-muted mb-5">
            One Student · East Africa · 2026
          </div>

          <div className="border-y-2 border-dashed border-ink/40 py-4 space-y-2">
            {SCHOOL_YEAR_ITEMS.map((item) => {
              const tick = added.get(item.key);
              const on = tick !== undefined;
              return on ? (
                <div
                  key={`${item.key}-${tick}`}
                  className="receipt-line-in flex items-baseline justify-between gap-3"
                >
                  <div className="flex-1 truncate">
                    <span className="text-ink-muted">1× </span>
                    {item.label}
                  </div>
                  <div className="tabular-nums">${item.amount.toFixed(2)}</div>
                </div>
              ) : (
                <div
                  key={item.key}
                  className="flex items-baseline justify-between gap-3 text-ink-muted/45"
                >
                  <div className="flex-1 truncate">
                    <span>1× </span>
                    {item.label}
                  </div>
                  <div className="tracking-widest">·····</div>
                </div>
              );
            })}
          </div>

          <div
            className="flex items-baseline justify-between pt-4"
            aria-live="polite"
          >
            <div className="font-display uppercase tracking-[0.15em] text-[12px]">
              Total
            </div>
            <div className="font-display tabular-nums text-3xl text-purple">
              ${total.toFixed(2)}
            </div>
          </div>

          <div className="mt-4 text-[11px] text-ink-muted text-center leading-relaxed">
            501(c)(3) · EIN 82-5215402 · tax-deductible
          </div>
          <div className="mt-3 barcode opacity-70" aria-hidden="true" />

          {/* PAID stamp lands when the year is complete */}
          {complete && (
            <div
              className="paid-stamp-in pointer-events-none absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"
              aria-hidden="true"
            >
              <div className="border-[3px] border-red text-red px-6 py-3 text-center">
                <div className="font-display uppercase tracking-[0.2em] text-2xl md:text-3xl leading-none">
                  Paid in full
                </div>
                <div className="font-display uppercase tracking-[0.3em] text-[10px] mt-1.5">
                  one student · one school year
                </div>
              </div>
            </div>
          )}
        </div>

        {/* PayPal handoff carries the built amount */}
        <form
          action="https://www.paypal.com/donate"
          method="post"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7"
        >
          <input type="hidden" name="business" value={PAYPAL_BUSINESS_EMAIL} />
          <input type="hidden" name="cmd" value="_donations" />
          <input
            type="hidden"
            name="item_name"
            value="Helping Hands for South Sudan"
          />
          <input type="hidden" name="currency_code" value="USD" />
          <input type="hidden" name="return" value={DONATE_RETURN_URL} />
          <input type="hidden" name="cancel_return" value={DONATE_CANCEL_URL} />
          {total > 0 && <input type="hidden" name="amount" value={String(total)} />}
          <button
            type="submit"
            disabled={total === 0}
            className={`inline-flex items-center justify-center w-full font-display uppercase tracking-wider text-base px-6 py-4 border-2 transition-all ${
              total === 0
                ? "border-paper/40 text-paper/50 cursor-not-allowed"
                : "bg-paper text-ink border-ink shadow-[5px_5px_0_var(--ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_var(--ink)]"
            }`}
          >
            {total === 0
              ? "Tap a line item to start"
              : `Make it real · give $${total} →`}
          </button>
        </form>
        <p className="text-center text-[13px] text-paper/70 mt-3">
          {complete
            ? "That's a whole year for one kid. Thank you."
            : "Cover one line or the whole year. Every line is real."}
        </p>
      </div>
    </div>
  );
}
