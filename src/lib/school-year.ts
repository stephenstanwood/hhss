// The real line-item budget for one student-year at the Juba schools.
// Single source of truth for the donate-page receipt and the homepage
// year builder. Do not adjust amounts without Gabriel's current budget.

export type SchoolYearItem = {
  key: string;
  label: string;
  short: string;
  amount: number;
};

export const SCHOOL_YEAR_ITEMS: SchoolYearItem[] = [
  { key: "tuition", label: "Tuition (1 year)", short: "Tuition", amount: 250 },
  { key: "uniform", label: "School uniform", short: "Uniform", amount: 35 },
  { key: "books", label: "Books + notebooks (1 yr)", short: "Books", amount: 45 },
  { key: "meals", label: "Daily meals", short: "Meals", amount: 100 },
  { key: "transport", label: "Transportation", short: "Transport", amount: 30 },
  { key: "supplies", label: "Supplies", short: "Supplies", amount: 25 },
  { key: "exam", label: "National exam fee", short: "Exam fee", amount: 15 },
];

export const SCHOOL_YEAR_TOTAL = SCHOOL_YEAR_ITEMS.reduce(
  (acc, i) => acc + i.amount,
  0
);
