import type { Metadata } from "next";
import { Fjalla_One, Source_Sans_3, Caveat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const fjalla = Fjalla_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fjalla",
  display: "swap",
});

const source = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://helpsouthsudan.org"),
  title: {
    default: "Helping Hands for South Sudan — Education for refugee children",
    template: "%s · Helping Hands for South Sudan",
  },
  description:
    "Helping Hands for South Sudan is a 501(c)(3) nonprofit that funds primary and secondary education for refugee children across six partner schools in South Sudan and Uganda. Founded in 2018 by Gabriel Nyok.",
  keywords: [
    "South Sudan",
    "refugee education",
    "Lost Boys of Sudan",
    "nonprofit",
    "Gabriel Nyok",
    "Uganda schools",
    "Juba",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Helping Hands for South Sudan",
    description:
      "Improving the lives of refugee children through education. 99% of every donation reaches the kids.",
    siteName: "Helping Hands for South Sudan",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "A classroom of students in red uniforms at a Helping Hands partner school",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helping Hands for South Sudan",
    description: "Education for refugee children. Volunteer-run 501(c)(3).",
    images: ["/og.jpg"],
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Helping Hands for South Sudan",
  alternateName: "HHSS",
  url: "https://helpsouthsudan.org",
  logo: "https://helpsouthsudan.org/logo/logo-color.png",
  image: "https://helpsouthsudan.org/og.jpg",
  description:
    "All-volunteer 501(c)(3) nonprofit funding primary and secondary education for refugee children across six partner schools in South Sudan and Uganda.",
  email: "helpinghandsforsouthsudan@gmail.com",
  foundingDate: "2018-02-26",
  founder: {
    "@type": "Person",
    name: "Gabriel Akim Nyok",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "16575 Shannon Road",
    addressLocality: "Los Gatos",
    addressRegion: "CA",
    postalCode: "95032",
    addressCountry: "US",
  },
  taxID: "82-5215402",
  nonprofitStatus: "Nonprofit501c3",
  areaServed: ["South Sudan", "Uganda"],
  sameAs: [
    "https://www.facebook.com/helpinghands4southsudan/",
    "https://www.instagram.com/helpinghands4southsudan/",
    "https://www.youtube.com/@helpinghandsforsouthsudan",
  ],
  potentialAction: {
    "@type": "DonateAction",
    target: "https://helpsouthsudan.org/donate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fjalla.variable} ${source.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="bg-paper text-ink min-h-full flex flex-col">
        {/* if JS never runs, scroll-reveal content must still be visible */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important;filter:none !important;clip-path:none !important}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-purple focus:text-paper focus:px-4 focus:py-2 focus:border-2 focus:border-ink font-display uppercase tracking-wider text-sm"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
