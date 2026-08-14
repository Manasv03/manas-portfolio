import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode, isMenuOpen, setIsMenuOpen }) => {

  const [isScrolled, setIsScrolled] = React.useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop & Scrolled Nav — z-50 so it sits above mascot (z-40) */}
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScrolled ? "bg-lightMain bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkMain dark:bg-opacity-50 dark:backdrop-blur-lg dark:shadow-sm" : ""}`}>

        <a href="#top">
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="" className="w-28 cursor-pointer mr-14" />
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 text-darkText dark:text-lightText ${isScrolled ? "" : "bg-lightMain shadow-sm bg-opacity-70 dark:bg-darkMain dark:bg-opacity-70 dark:shadow-sm"}`}>
          <li><a className='font-Arvo' href="#top">Home</a></li>
          <li><a className='font-Arvo' href="#work">My Work</a></li>
          <li><a className='font-Arvo' href="#services">Services</a></li>
          <li><a className='font-Arvo' href="#contact">Contact</a></li>
        </ul>

        <div className='text-darkText flex items-center gap-4 dark:text-lightText'>

          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className="w-6 cursor-pointer" />
          </button>

          <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-darkPartial rounded-full ml-4 font-Arvo dark:border-lightPartial'>
            Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className="w-3" />
          </a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className="w-6 cursor-pointer" />
          </button>

        </div>

        {/* Mobile Menu — z-[9999] so it sits above the mascot (z-40) and nav (z-50) */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 h-screen text-darkText bg-lightMain transition-transform duration-500 dark:text-lightText dark:bg-darkMain ${isMenuOpen ? 'translate-x-0' : 'translate-x-64'}`}
          style={{ zIndex: 9999 }}
        >
          <div className='absolute top-6 right-6 cursor-pointer' onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5' />
          </div>

          <li><a className='font-Arvo' onClick={closeMenu} href="#top">Home</a></li>
          <li><a className='font-Arvo' onClick={closeMenu} href="#work">My Work</a></li>
          <li><a className='font-Arvo' onClick={closeMenu} href="#services">Services</a></li>
          <li><a className='font-Arvo' onClick={closeMenu} href="#contact">Contact</a></li>
        </ul>

        {/* Mobile menu backdrop */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 md:hidden"
            style={{ zIndex: 9998 }}
            onClick={closeMenu}
          />
        )}

      </nav>
    </>
  );
};

export default Navbar;
