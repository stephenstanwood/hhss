type Props = {
  items: string[];
  className?: string;
  separator?: string;
};

export function Marquee({ items, className = "", separator = "✦" }: Props) {
  const doubled = [...items, ...items];
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-6 px-6 font-display uppercase tracking-[0.15em] text-2xl md:text-4xl whitespace-nowrap"
          >
            <span>{item}</span>
            <span className="text-red text-3xl">{separator}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
