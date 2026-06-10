// Single source of truth for PayPal donate config. The hosted button
// (created by Stephen in the PayPal dashboard, Jun 2026) carries the
// presets: $42 / $100 / $500 + any amount, monthly + yearly recurring,
// return URL -> /thank-you. IDs here are public by design.

export const PAYPAL_BUSINESS_EMAIL = "helpinghandsforsouthsudan@gmail.com";
export const PAYPAL_HOSTED_BUTTON_ID = "JMEHX5TB42JN6";

export const PAYPAL_HOSTED_DONATE_URL = `https://www.paypal.com/donate?hosted_button_id=${PAYPAL_HOSTED_BUTTON_ID}`;

// Where the legacy amount-prefilled forms send donors afterward
export const DONATE_RETURN_URL = "https://helpsouthsudan.org/thank-you";
export const DONATE_CANCEL_URL = "https://helpsouthsudan.org/donate";
