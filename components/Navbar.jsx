import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { useState } from 'react';

const Navbar = ({isDarkMode,setIsDarkMode}) => {

  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuToggle = useRef();
  const openMenu = () => {
    handleMenuToggle.current.style.transform = 'translateX(-16rem)';
  }
  const closeMenu = () => {
    handleMenuToggle.current.style.transform = 'translateX(16rem)';
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(scrollY > 50) {
        setIsScrolled(true);
      }else{
        setIsScrolled(false);
      }
   })
  },[])

  return (
    <>
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScrolled ? "bg-lightMain bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkMain dark:bg-opacity-50 dark:backdrop-blur-lg dark:shadow-sm" : ""}`}>
        
          <a href="#top">
              <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="" className="w-28 cursor-pointer mr-14"/>
          </a>

          <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 text-darkText dark:text-lightText ${isScrolled ? "" : "bg-lightMain shadow-sm bg-opacity-70 dark:bg-darkMain dark:bg-opacity-70 dark:shadow-sm"}`}>
              <li><a className='font-Arvo' href="#top">Home</a></li>
              <li><a className='font-Arvo' href="#about">About Me</a></li>
              <li><a className='font-Arvo' href="#services">Services</a></li>
              <li><a className='font-Arvo' href="#work">My Work</a></li>
              <li><a className='font-Arvo' href="#contact">Contact</a></li>
          </ul>

          <div className='text-darkText flex items-center gap-4 dark:text-lightText'>

            <button onClick={() => setIsDarkMode(prev => !prev)}>
              <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className="w-6 cursor-pointer" />
            </button>

            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-darkPartial rounded-full ml-4 font-Arvo dark:border-lightPartial'>Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className="w-3" /></a>

            <button className='block md:hidden ml-3' onClick={openMenu}>
              <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className="w-6 cursor-pointer" />
            </button>

          </div>

          {/* Mobile Menu */}

          <ul ref={handleMenuToggle} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen text-darkText bg-lightMain transition duration-500 dark:text-lightText dark:bg-darkMain'>

            <div className='absolute top-6 right-6' onClick={closeMenu}>
              <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer'/>
            </div>

            <li><a className='font-Arvo' onClick={closeMenu} href="#top">Home</a></li>
            <li><a className='font-Arvo' onClick={closeMenu} href="#about">About Me</a></li>
            <li><a className='font-Arvo' onClick={closeMenu} href="#services">Services</a></li>
            <li><a className='font-Arvo' onClick={closeMenu} href="#work">My Work</a></li>
            <li><a className='font-Arvo' onClick={closeMenu} href="#contact">Contact</a></li>
          </ul>

        </nav>
    </>
  )
}

export default Navbar
