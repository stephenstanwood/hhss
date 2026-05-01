"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV = [
  { href: "/our-story", label: "Our Story" },
  { href: "/about-south-sudan", label: "South Sudan" },
  { href: "/events", label: "Events & Press" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo/logo-color.png"
              alt="Helping Hands for South Sudan"
              width={56}
              height={56}
              className="h-10 md:h-12 w-auto"
              priority
            />
            <div className="hidden sm:block leading-tight">
              <div className="font-display tracking-tight text-base md:text-lg uppercase text-ink">
                Helping Hands
              </div>
              <div className="font-display text-xs md:text-sm tracking-[0.2em] text-purple uppercase">
                for South Sudan
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display uppercase tracking-wider text-sm px-3 py-2 text-ink hover:text-purple transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="ml-2 inline-flex items-center font-display uppercase tracking-wider text-sm bg-purple text-paper px-5 py-2.5 border-2 border-ink shadow-[3px_3px_0_var(--ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_var(--ink)] transition-all"
            >
              Donate
            </Link>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden p-2 -mr-2"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block w-7 h-[2.5px] bg-ink mb-1.5" />
            <span className="block w-7 h-[2.5px] bg-ink mb-1.5" />
            <span className="block w-7 h-[2.5px] bg-ink" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t-2 border-ink bg-paper">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display uppercase tracking-wider text-base py-2 text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center font-display uppercase tracking-wider text-sm bg-purple text-paper px-5 py-3 border-2 border-ink"
            >
              Donate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
