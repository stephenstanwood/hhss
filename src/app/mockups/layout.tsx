import type { Metadata } from "next";
import {
  Playfair_Display,
  DM_Serif_Display,
  IBM_Plex_Mono,
  Inter,
  Bebas_Neue,
  Crimson_Pro,
  Space_Grotesk,
} from "next/font/google";

export const metadata: Metadata = {
  title: "Mockups — 10 directions",
  robots: { index: false, follow: false },
};

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--mock-playfair" });
const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--mock-dm-serif" });
const ibmMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--mock-mono" });
const inter = Inter({ subsets: ["latin"], variable: "--mock-inter" });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--mock-bebas" });
const crimson = Crimson_Pro({ subsets: ["latin"], variable: "--mock-crimson" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--mock-space" });

export default function MockupsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${playfair.variable} ${dmSerif.variable} ${ibmMono.variable} ${inter.variable} ${bebas.variable} ${crimson.variable} ${space.variable}`}
    >
      {children}
    </div>
  );
}
