import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-ink bg-paper-deep mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo/logo-color.png"
                alt=""
                width={56}
                height={56}
                className="h-12 w-auto"
              />
              <div className="font-display uppercase tracking-tight text-lg leading-tight">
                Helping Hands<br />
                <span className="text-purple text-sm tracking-[0.2em]">
                  for South Sudan
                </span>
              </div>
            </div>
            <p className="text-ink-soft text-[15px] max-w-md">
              A volunteer-run 501(c)(3) funding primary and secondary education
              for refugee children across six partner schools in South Sudan
              and Uganda. Founded by Lost Boy Gabriel Nyok.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-[13px] text-ink-muted">
              <span className="inline-block px-2.5 py-1 border border-ink-muted">
                501(c)(3)
              </span>
              <span className="inline-block px-2.5 py-1 border border-ink-muted">
                EIN 82-5215402
              </span>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-display uppercase tracking-wider text-sm text-ink-muted mb-4">
              Visit
            </h3>
            <ul className="space-y-2 font-display uppercase tracking-wide text-[15px]">
              <li><Link className="hover:text-purple transition-colors" href="/our-story">Our Story</Link></li>
              <li><Link className="hover:text-purple transition-colors" href="/about-south-sudan">South Sudan</Link></li>
              <li><Link className="hover:text-purple transition-colors" href="/events">Events & Press</Link></li>
              <li><Link className="hover:text-purple transition-colors" href="/donate">Donate</Link></li>
              <li><Link className="hover:text-purple transition-colors" href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-display uppercase tracking-wider text-sm text-ink-muted mb-4">
              Get in touch
            </h3>
            <p className="text-[15px] text-ink-soft mb-3">
              <a
                href="mailto:helpinghandsforsouthsudan@gmail.com"
                className="underline decoration-2 underline-offset-4 decoration-purple hover:text-purple"
              >
                helpinghandsforsouthsudan@gmail.com
              </a>
            </p>
            <Link
              href="/donate"
              className="inline-flex items-center font-display uppercase tracking-wider text-sm bg-purple text-paper px-5 py-2.5 border-2 border-ink shadow-[3px_3px_0_var(--ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_var(--ink)] transition-all"
            >
              Donate now →
            </Link>
          </div>
        </div>

        <div className="dotted-rule my-10" />

        <div className="flex flex-col sm:flex-row justify-between gap-4 text-xs text-ink-muted">
          <p>© {new Date().getFullYear()} Helping Hands for South Sudan. All rights reserved.</p>
          <p className="font-hand text-base text-ink-soft">
            built with care, every kid counts
          </p>
        </div>
      </div>
    </footer>
  );
}
