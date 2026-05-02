import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Helping Hands for South Sudan. Speaking inquiries, donations, partnerships, or just questions; we read every message.",
};

export default function Contact() {
  return (
    <>
      <section className="border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <div className="font-display uppercase tracking-[0.3em] text-sm text-purple mb-6">
                Contact
              </div>
              <h1 className="font-display uppercase tracking-tight leading-[0.85] text-[14vw] md:text-[10vw] lg:text-[8.5vw] text-ink">
                Say <span className="text-purple">hi.</span><br />
                <span className="scribble">we read everything.</span>
              </h1>
              <p className="mt-8 text-lg md:text-xl text-ink-soft max-w-xl leading-relaxed">
                Speaking inquiries, donations, partnerships, school referrals,
                or just a question, drop us a line and we'll write back.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-paper border-2 border-ink p-6 md:p-8 shadow-[8px_8px_0_var(--ink)]">
                <div className="font-display uppercase tracking-[0.2em] text-xs text-red mb-3">
                  Direct
                </div>
                <a
                  href="mailto:helpinghandsforsouthsudan@gmail.com"
                  className="font-display uppercase tracking-tight text-base md:text-lg leading-tight break-all hover:text-purple block"
                >
                  helpinghandsforsouthsudan@gmail.com
                </a>

                <div className="dotted-rule my-5" />

                <div className="font-display uppercase tracking-[0.2em] text-xs text-red mb-2">
                  Mail
                </div>
                <p className="text-[15px] leading-relaxed">
                  Helping Hands for South Sudan<br />
                  16575 Shannon Road<br />
                  Los Gatos, CA 95032
                </p>

                <div className="dotted-rule my-5" />

                <div className="font-display uppercase tracking-[0.2em] text-xs text-red mb-3">
                  Follow along
                </div>
                <div className="flex flex-col gap-2 text-[15px]">
                  <a
                    href="https://www.facebook.com/helpinghands4southsudan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple"
                  >
                    facebook.com/helpinghands4southsudan
                  </a>
                  <a
                    href="https://www.instagram.com/helpinghands4southsudan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple"
                  >
                    instagram.com/helpinghands4southsudan
                  </a>
                </div>

                <div className="dotted-rule my-5" />

                <div className="font-display uppercase tracking-[0.2em] text-xs text-red mb-2">
                  Tax info
                </div>
                <div className="text-[15px] space-y-1">
                  <div>501(c)(3) public charity</div>
                  <div className="font-mono">EIN 82-5215402</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-16 md:py-24 border-b-2 border-ink">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-display uppercase tracking-[0.2em] text-xs text-red mb-3">
            Send a message
          </div>
          <h2 className="font-display uppercase tracking-tight text-4xl md:text-6xl mb-10">
            Drop us a line.
          </h2>
          <ContactForm />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-paper-deep">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-hand text-2xl md:text-3xl text-ink mb-5">
            ...or, you know,
          </p>
          <Link
            href="/donate"
            className="inline-flex items-center font-display uppercase tracking-wider text-base bg-purple text-paper px-8 py-4 border-2 border-ink shadow-[5px_5px_0_var(--ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_var(--ink)] transition-all"
          >
            Just donate →
          </Link>
        </div>
      </section>
    </>
  );
}
