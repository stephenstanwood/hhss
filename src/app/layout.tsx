import type { Metadata } from "next";
import { Fjalla_One, Source_Sans_3, Caveat } from "next/font/google";
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
  openGraph: {
    type: "website",
    title: "Helping Hands for South Sudan",
    description:
      "Improving the lives of refugee children through education. 99% of every donation reaches the kids.",
    siteName: "Helping Hands for South Sudan",
    images: ["/logo/logo-color.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helping Hands for South Sudan",
    description: "Education for refugee children. Volunteer-run 501(c)(3).",
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
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
