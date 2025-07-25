import { Lato, Arvo } from "next/font/google";
import "./globals.css";
import BackgroundRings from "@/components/Backgroundrings";

const lato = Lato({
  weight: ["100", "400", "700"],
  subsets: ["latin"],
});

const arvo = Arvo({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Manas- Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${lato.className} ${arvo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkMain dark:text-lighttext`}
      >
        <BackgroundRings />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
