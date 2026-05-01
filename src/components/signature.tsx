// Handwritten "Gabriel" signature mark in SVG.
// Doesn't need to be photographic — looks like an ink-pen flourish that lands
// at the end of a quote pull. Stroke-dashoffset animation runs once on mount.

type Props = {
  className?: string;
  stroke?: string;
  width?: number;
  height?: number;
  animate?: boolean;
};

export function GabrielSignature({
  className = "",
  stroke = "currentColor",
  width = 220,
  height = 80,
  animate = false,
}: Props) {
  return (
    <svg
      viewBox="0 0 220 80"
      width={width}
      height={height}
      className={className}
      aria-label="Gabriel's signature"
      role="img"
    >
      <g
        fill="none"
        stroke={stroke}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* G */}
        <path d="M 30 30 C 22 28, 14 35, 14 46 C 14 56, 22 62, 30 60 C 36 58, 38 52, 36 48 L 28 48" />
        {/* a */}
        <path d="M 44 50 C 42 44, 50 42, 52 47 C 53 52, 51 58, 47 58 C 44 58, 42 56, 44 50 Z M 53 47 L 53 58" />
        {/* b */}
        <path d="M 62 28 L 62 60 M 62 50 C 64 44, 72 44, 73 50 C 74 56, 68 60, 64 58" />
        {/* r */}
        <path d="M 80 50 L 80 60 M 80 51 C 82 47, 86 46, 88 47" />
        {/* i */}
        <path d="M 95 48 L 95 60" />
        <circle cx="95" cy="44" r="0.8" fill={stroke} />
        {/* e */}
        <path d="M 102 53 C 104 49, 110 49, 111 53 C 111 56, 108 56, 102 56 C 102 60, 108 60, 112 58" />
        {/* l */}
        <path d="M 120 28 C 120 38, 119 50, 121 60" />
        {/* underline flourish */}
        <path
          d="M 14 70 C 60 66, 110 70, 156 66 Q 175 64, 200 72"
          opacity="0.5"
        />
        {/* trailing arrow flourish */}
        <path d="M 200 72 L 207 68 M 200 72 L 207 76" />
      </g>
      {animate && (
        <style>{`
          svg path { stroke-dasharray: 600; stroke-dashoffset: 600; animation: sig-draw 1.6s ease-out forwards; }
          @keyframes sig-draw { to { stroke-dashoffset: 0; } }
        `}</style>
      )}
    </svg>
  );
}
