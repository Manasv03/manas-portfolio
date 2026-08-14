import { Lato, Arvo, Syne } from "next/font/google";
import "./globals.css";
import BackgroundRings from "@/components/Backgroundrings";
import ParticleField from "@/components/ParticleField";

const lato = Lato({
  weight: ["100", "400", "700"],
  subsets: ["latin"],
});

const arvo = Arvo({
  weight: ["400"],
  subsets: ["latin"],
});

const syne = Syne({
  weight: ["700", "800"],
  subsets: ["latin"],
  variable: '--font-syne',
});

export const metadata = {
  title: "Manas- Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${lato.className} ${arvo.className} ${syne.variable} antialiased leading-8 overflow-x-hidden dark:bg-darkMain dark:text-lighttext`}
      >
        {/* Particle field sits at z-[1], behind the rings at z-0 visually
            (rings have fixed + z-0, particles have fixed + z-1 but much lower opacity,
             so the rings' purple glow dominates). */}
        <ParticleField />
        <BackgroundRings />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
