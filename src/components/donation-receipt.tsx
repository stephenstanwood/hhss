// "Receipt" panel for the donate page. Tactile, monospaced, looks like a
// thermal-printed school store receipt. Highlights what each tier actually
// pays for and totals out to a real year of school.

const ITEMS = [
  { qty: 1, label: "Tuition (1 year)", amount: 250 },
  { qty: 1, label: "School uniform", amount: 35 },
  { qty: 1, label: "Books + notebooks (1 yr)", amount: 45 },
  { qty: 1, label: "Daily meals", amount: 100 },
  { qty: 1, label: "Transportation", amount: 30 },
  { qty: 1, label: "Supplies", amount: 25 },
  { qty: 1, label: "National exam fee", amount: 15 },
];

const SUBTOTAL = ITEMS.reduce((acc, i) => acc + i.amount, 0);

export function DonationReceipt() {
  return (
    <div className="relative max-w-md mx-auto">
      {/* tape */}
      <div
        className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-5 bg-gold/60 border-x border-dashed border-ink/30 z-10"
        style={{ transform: "translateX(-50%) rotate(-2deg)" }}
        aria-hidden="true"
      />
      <div
        className="bg-paper border-2 border-ink shadow-[8px_8px_0_var(--ink)] p-7 pt-9 font-mono text-[13px] text-ink"
        style={{ transform: "rotate(-1deg)" }}
      >
        <div className="text-center font-display uppercase tracking-[0.25em] text-[11px] mb-1">
          HHSS · School Year Receipt
        </div>
        <div className="text-center text-[11px] text-ink-muted mb-5">
          One Student · East Africa · 2026
        </div>

        <div className="border-y-2 border-dashed border-ink/40 py-4 space-y-2">
          {ITEMS.map((item) => (
            <div key={item.label} className="flex items-baseline justify-between gap-3">
              <div className="flex-1 truncate">
                <span className="text-ink-muted">{item.qty}× </span>
                {item.label}
              </div>
              <div className="tabular-nums">${item.amount.toFixed(2)}</div>
            </div>
          ))}
        </div>

        <div className="pt-4 space-y-1.5">
          <div className="flex items-baseline justify-between">
            <div className="text-ink-muted">Subtotal</div>
            <div className="tabular-nums">${SUBTOTAL.toFixed(2)}</div>
          </div>
          <div className="flex items-baseline justify-between">
            <div className="text-ink-muted">Overhead (~1%)</div>
            <div className="tabular-nums">$5.00</div>
          </div>
          <div className="flex items-baseline justify-between text-base pt-2 border-t border-ink/40 mt-2">
            <div className="font-display uppercase tracking-[0.15em] text-[12px]">
              Total
            </div>
            <div className="font-display tabular-nums text-2xl text-purple">
              ${(SUBTOTAL + 5).toFixed(0)}.00
            </div>
          </div>
        </div>

        <div className="mt-5 text-[11px] text-ink-muted text-center leading-relaxed">
          THANK YOU — ASANTE — APUOTH<br />
          501(c)(3) · EIN 82-5215402<br />
          tax-deductible
        </div>

        <div className="mt-4 flex justify-center">
          <div className="font-mono text-[10px] tracking-[0.2em] text-ink-muted">
            ░ ▌▐ ░▌▐ ░ ▌▌▐ ░ ▐ ░▐ ░▌
          </div>
        </div>
      </div>

      {/* torn bottom edge */}
      <div
        className="h-3 bg-paper relative"
        style={{
          transform: "rotate(-1deg)",
          marginTop: "-2px",
          backgroundImage:
            "linear-gradient(135deg, transparent 33%, var(--paper) 33%), linear-gradient(225deg, transparent 33%, var(--paper) 33%)",
          backgroundSize: "10px 10px",
          backgroundPosition: "0 0, 0 0",
          borderBottom: "0",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
