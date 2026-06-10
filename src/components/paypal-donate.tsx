type Props = {
  amount?: number;
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
};

import {
  PAYPAL_BUSINESS_EMAIL,
  DONATE_RETURN_URL,
  DONATE_CANCEL_URL,
} from "@/lib/paypal";

const BUSINESS_EMAIL = PAYPAL_BUSINESS_EMAIL;

export function PayPalDonate({
  amount,
  label,
  variant = "primary",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center font-display uppercase tracking-wider text-base px-6 py-4 border-2 border-ink transition-all w-full";
  const styles =
    variant === "primary"
      ? "bg-purple text-paper shadow-[5px_5px_0_var(--ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_var(--ink)]"
      : "bg-paper text-ink shadow-[3px_3px_0_var(--ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_var(--ink)]";

  return (
    <form
      action="https://www.paypal.com/donate"
      method="post"
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <input type="hidden" name="business" value={BUSINESS_EMAIL} />
      <input type="hidden" name="cmd" value="_donations" />
      <input type="hidden" name="item_name" value="Helping Hands for South Sudan" />
      <input type="hidden" name="currency_code" value="USD" />
      <input type="hidden" name="return" value={DONATE_RETURN_URL} />
      <input type="hidden" name="cancel_return" value={DONATE_CANCEL_URL} />
      {amount !== undefined && (
        <input type="hidden" name="amount" value={amount.toString()} />
      )}
      <button type="submit" className={`${base} ${styles}`}>
        {label}
      </button>
    </form>
  );
}
