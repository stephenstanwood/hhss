// Torn-paper section divider. The jagged path is the bottom edge of the
// section above (`from`), ripped over the section below (`to`). Points are
// hardcoded — irregular on purpose, deterministic so SSR matches client.

type Props = {
  from: string;
  to: string;
  className?: string;
};

const TEAR =
  "M0 0 L1200 0 L1200 7 L1168 13 L1135 6 L1103 15 L1078 9 L1042 17 L1011 8 " +
  "L976 14 L948 5 L913 16 L880 9 L851 18 L816 7 L788 13 L752 6 L723 15 " +
  "L692 8 L658 17 L630 10 L595 16 L562 6 L534 14 L499 8 L470 17 L438 9 " +
  "L406 15 L377 5 L342 13 L313 7 L281 16 L252 9 L219 15 L188 6 L156 14 " +
  "L127 8 L94 16 L63 10 L31 14 L0 6 Z";

export function TornEdge({ from, to, className = "" }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`h-4 md:h-6 ${className}`}
      style={{ backgroundColor: to }}
    >
      <svg
        viewBox="0 0 1200 24"
        preserveAspectRatio="none"
        className="block w-full h-full"
      >
        {/* soft under-shadow so the tear reads as lifted paper */}
        <path d={TEAR} fill="rgba(0,0,0,0.12)" transform="translate(0 3)" />
        <path d={TEAR} fill={from} />
      </svg>
    </div>
  );
}
