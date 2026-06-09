import Link from "next/link";

export default function NotFound() {
  return (
    <section className="border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        <div className="stamp text-xs mb-8 inline-flex">Page not found</div>
        <h1 className="font-display uppercase tracking-tight leading-[0.85] text-7xl md:text-9xl text-ink mb-6">
          <span className="text-purple">404.</span>
          <br />
          <span className="scribble">No desk here.</span>
        </h1>
        <p className="text-lg md:text-xl text-ink-soft max-w-xl mx-auto leading-relaxed mb-10">
          This page doesn&apos;t exist, or it moved. The kids are still in
          class, though.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center font-display uppercase tracking-wider text-base bg-purple text-paper px-7 py-4 border-2 border-ink shadow-[5px_5px_0_var(--ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_var(--ink)] transition-all"
          >
            Back home
          </Link>
          <Link
            href="/donate"
            className="inline-flex items-center font-display uppercase tracking-wider text-base text-ink px-2 py-4 underline decoration-2 underline-offset-8 decoration-red hover:text-purple"
          >
            Or just donate →
          </Link>
        </div>
      </div>
    </section>
  );
}
