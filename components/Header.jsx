import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from 'motion/react'

const Header = ({isDarkMode,setIsDarkMode}) => {
  return (
   //min-h-screen pt-[120px] 
      <div className='w-11/12 max-w-5xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            
          <motion.div 
          initial={{scale: 0}}
          whileInView={{scale: 1}}
          transition={{duration: 0.8, type: 'spring', stiffness:100}}
          >
            <Image src={assets.profile_img} alt='' className='rounded-full w-[180px] '/>
          </motion.div>

          <motion.h3 
          initial={{y: -20, opacity:0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.6, delay:0.3}}
          className='flex items-center gap-2 text-xl md:text-2xl font-Arvo text-darkText dark:text-lightText'>
            Hi, I'm Manas Verma 
            <Image src={assets.hand_icon} alt='' className='w-6'/>
          </motion.h3>

          <motion.h1 
          initial={{y: -30, opacity:0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.8, delay:0.5}}
          className='text-3xl sm:text-6xl font-Arvo lg:text-[44px] text-darkText dark:text-lightText'> 
            A passionate software developer based in India.
          </motion.h1>
          {/* text-lg sm:text-xl text-darkText max-w-3xl px-4 */}
          <motion.p 
          initial={{opacity:0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay:0.7}}
          className='max-w-4xl max-auto text-darkText text-lg dark:text-lightPartial'> 
            Hi, I'm a software developer passionate about creating impactful digital experiences.
            From websites to mobile apps, I love bringing ideas to life with code.
          </motion.p>

          <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a 
            initial={{y: 30, opacity:0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay:1}}
            href="#contact" className='px-10 py-3 border border-lightPartial rounded-full bg-darkPartial text-lightText flex items-center gap-2 dark:bg-lightPartial dark:text-darkText'>Contact Me <Image src={isDarkMode ? assets.right_arrow : assets.right_arrow_white} alt='' className='w-4'/></motion.a>
            <motion.a 
            initial={{y: 30, opacity:0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay:1.2}}
            href="/ManasVerma_Resume.pdf" download className='px-10 py-3 border rounded-full border-darkPartial flex items-center gap-2 dark:border-lightPartial dark:text-lightText'>My Resume <Image src={isDarkMode ? assets.download_icon_dark : assets.download_icon} alt='' className='w-4'/></motion.a>
          </div>
      </div>       
  )
}

export default Header