import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const About = ({isDarkMode,setIsDarkMode}) => {
  return (
        
    <motion.div id='about' className='w-full px-[12%] py-[20px] scroll-mt-20'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    >
      {/* <div className='relative z-10'></div> */}
        
        <motion.h4 
        initial={{opacity: 0, y:-20}}
        whileInView={{opacity: 1 , y:0}}
        transition={{duration: 0.5, delay:0.3}}
        className='text-center mb-2 text-lg font-Arvo text-darkText dark:text-lightText'>Introduction</motion.h4>
        <motion.h2 
        initial={{opacity: 0, y:-20}}
        whileInView={{opacity: 1 , y:0}}
        transition={{duration: 0.5, delay:0.5}}
        className='text-center text-5xl font-Arvo text-darkText dark:text-lightText'>About Me</motion.h2>

        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-[40px]'>
            
            <motion.div 
            initial={{opacity: 0, scale:0.9}}
            whileInView={{opacity: 1 , scale:1}}
            transition={{duration: 0.6}}
            className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user' className='w-full rounded-3xl border border-[#F9A8D4] bg-lightMain shadow-[0_0_60px_inset] shadow-[#F9A8D4] 
                dark:border-[#A855F7] dark:bg-darkMain dark:shadow-[0_0_60px_inset] dark:shadow-[#A855F7]' />
            </motion.div>

            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay:0.8}}
            className='flex-1'>
              <p className='mb-10 max-w-4xl font-Arvo text-darkText dark:text-lightText'>
                I'm Manas Verma, I’m a passionate Software Developer in my 4th year of B.Tech at Graphic Era Hill University.
                I specialize in building full-stack web apps, mobile apps, and system tools using MERN, Kotlin, Python, and C++.
                I enjoy turning ideas into clean UI with Figma and developing scalable backends with MongoDB.
                Currently, I’m focused on enhancing my deployment and API integration skills for real-world projects.
              </p>

              <motion.ul 
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 0.8, delay: 1}}
              className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList.map(({icon, iconDark, title, description},index) => (
                  <motion.li
                  whileHover={{scale: 1.05}}
                  className='border-[0.5px] border-darkPartial rounded-xl p-4 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-700 hover:shadow-blackSha
                  dark:border-lightPartial dark:hover:bg-darkHover dark:hover:-translate-y-1 dark:hover:shadow-whiteSha' 
                  key={index}>
                    <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-1'/>
                    <h3 className='my-2 font-semibold text-darkText dark:text-lightText'>{title}</h3>
                    <p className=' text-sm text-darkText dark:text-lightText'>{description}</p>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.h4 
              initial={{opacity: 0, y:20}}
              whileInView={{opacity: 1 , y:0}}
              transition={{duration: 0.5, delay:1.3}}
              className='text-darkText my-3 font-Arvo dark:text-lightText'>Tools I Use</motion.h4>

              <motion.ul 
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 0.6, delay:1.5}}
              className='flex items-center gap-3 sm:gap-5'>
                {toolsData.map((tool, index)=>(
                  <motion.li 
                  whileHover={{scale: 1.1}}
                  className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-darkPartial rounded-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-700 hover:shadow-blackSha
                  dark:border-lightPartial dark:hover:bg-darkHover dark:hover:-translate-y-1 dark:hover:shadow-whiteSha' 
                  key={index}>
                    <Image src={tool} alt='tool' className='w-5 sm:w-7'/>
                  </motion.li>
                ))}
              </motion.ul>

            </motion.div>
        </motion.div>
    </motion.div>    
  )
}

export default About
