import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Services = ({isDarkMode,setIsDarkMode}) => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.5}}
    id='services' className='w-full px-[12%] py-[20px] scroll-mt-20'>

        <motion.h4 
        initial={{opacity: 0, y:-20}}
        whileInView={{opacity: 1 , y:0}}
        transition={{duration: 0.5, delay:0.3}}
        className='text-center mb-2 text-lg font-Arvo text-darkText dark:text-lightText'>What I Offer</motion.h4>
        <motion.h2 
        initial={{opacity: 0, y:-20}}
        whileInView={{opacity: 1 , y:0}}
        transition={{duration: 0.5, delay:0.5}}
        className='text-center text-5xl font-Arvo text-darkText dark:text-lightText'>My Services</motion.h2>

        <motion.p 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay:0.7}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Arvo text-darkText dark:text-lightText'>
            I develop modern web apps with the MERN stack and deploy them for real-world use.
            Build Android apps in Kotlin, like smart expense trackers.
            Integrate third-party services through API integration to add real-time features.
            Create tools in Python and C++, from transpilers to peer-to-peer file sharing.    
        </motion.p>

        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay:0.9}}
        className='grid grid-cols-auto gap-6 my-10'>
            {serviceData.map(({icon, title, description, link}, index)=>(
                <motion.div 
                whileHover={{scale: 1.05}}
                key={index} className='font-Arvo border border-darkPartial rounded-lg px-8 py-12 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-700 hover:shadow-blackSha flex flex-col dark:border-lightPartial dark:hover:bg-darkHover dark:hover:-translate-y-1 dark:hover:shadow-whiteSha'>
                    <Image src={icon} alt='' className='w-10'/>
                    <h3 className='text-lg my-4 text-darkText dark:text-lightText'>{title}</h3>
                    <p className='text-sm text-darkText dark:text-lightText leading-5'>
                        {description}
                    </p>
                    <a target='_blank' href={link} className='flex items-center gap-2 text-sm mt-5 text-darkText hover:underline font-Arvo dark:text-lightText'>
                        Read More <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow} alt='' className='w-4'/>
                    </a>
                </motion.div>
            ))}
        </motion.div>

    </motion.div>
  )
}

export default Services
