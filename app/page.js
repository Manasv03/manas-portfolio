"use client"
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Mascot from "@/components/Mascot";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Work from "@/components/Work";
import { useEffect, useState } from "react";

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode]);

  return (
    <>
      {/* Nav — z-50 (above mascot z-40, mobile menu z-[9999]) */}
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Mascot — z-40, hidden on touch/mobile, hidden when menu open */}
      <Mascot isMenuOpen={isMenuOpen} />

      {/* Sections — new order: Home → My Work → Services → Contact */}
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
