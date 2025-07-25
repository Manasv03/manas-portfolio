import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Work = ({isDarkMode,setIsDarkMode}) => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='work' className='w-full px-[12%] py-[20px] scroll-mt-20'>
        <motion.h4 
        initial={{opacity: 0, y:-20}}
        whileInView={{opacity: 1 , y:0}}
        transition={{duration: 0.5, delay:0.3}}
        className='text-center mb-2 text-lg font-Arvo text-darkText dark:text-lightText'>My Portfolio</motion.h4>
        <motion.h2 
        initial={{opacity: 0, y:-20}}
        whileInView={{opacity: 1 , y:0}}
        transition={{duration: 0.5, delay:0.5}}
        className='text-center text-5xl font-Arvo text-darkText dark:text-lightText'>My Work</motion.h2>

        <motion.p 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay:0.7}}
        className='text-center max-w-2xl mx-auto mt-9 mb-8 font-Arvo text-darkText dark:text-lightText'>
            I've built a modern MERN stack portfolio to showcase my skills and projects.
            Developed an Expense Tracker app in Kotlin to manage finances on the go.
            Also created a JavaScript-to-Python transpiler and a miniTorrent system using C++.
        </motion.p>

        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay:0.9}}
        className='grid grid-cols-auto gap-5 mt-[28px]'>
            {workData.map((project, index)=>(
                <motion.div 
                whileHover={{scale:1.05}}
                transition={{duration: 0.3}}
                key={index}
                className='aspect-square bg-no-repeat bg-center bg-cover rounded-lg relative border border-[#F9A8D4] cursor-pointer group dark:border-[#A855F7]'
                style={{backgroundImage: `url(${project.bgImage})`}}>
                    <div className='bg-lightPartial w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-700 group-hover:bottom-7 dark:bg-darkPartial'>
                        <div >
                            <h2 className='font-semibold font-Arvo text-darkText dark:text-lightText'>{project.title}</h2>
                            <p className='text-sm text-darkText dark:text-lightText'>{project.description}</p>
                        </div>

                        <div className='border rounded-full border-darkPartial w-9 aspect-square flex items-center justify-center shadow-[1px_1px_0_#F9A8D4] group-hover:bg-[#D6C3E4] transition dark:border-lightPartial dark:shadow-[1px_1px_0_#A855F7] dark:group-hover:bg-[#5A4B82]'>
                            <Image src={isDarkMode ? assets.send_icon_dark : assets.send_icon} alt='send' className='w-5' />
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>

        <motion.a 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay:1.1}}
        target='_blank' href="https://github.com/Manasv03" className='w-max flex items-center justify-center gap-2 font-Arvo text-darkText border-[0.5px] border-darkPartial rounded-full px-10 py-3 mx-auto my-3 mt-5 hover:bg-lightHover duration-700 dark:text-lightText dark:border-lightPartial dark:hover:bg-darkHover'>
            Show More <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4'/>
        </motion.a>
    </motion.div>
  )
}

export default Work