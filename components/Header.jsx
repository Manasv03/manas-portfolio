import { assets, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const techStack = [
  { label: 'React / Next.js', color: '#61DAFB' },
  { label: 'Node.js', color: '#68A063' },
  { label: 'Express.js', color: '#d4d4d4' },
  { label: 'MongoDB', color: '#4DB33D' },
  { label: 'JavaScript', color: '#F7DF1E' },
  { label: 'Python', color: '#3776AB' },
  { label: 'C++', color: '#00599C' },
];

const Header = ({ isDarkMode }) => {
  return (
    <div id="top" className='w-11/12 max-w-4xl mx-auto min-h-screen flex flex-col items-center justify-center gap-5 pt-24 pb-16'>

      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt='Manas Verma'
          className='rounded-full w-[180px]'
          style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
        />
      </motion.div>

      {/* Greeting */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex items-center gap-2 text-xl md:text-2xl font-Arvo text-darkText dark:text-lightText'
      >
        Hi, I'm Manas Verma
        <Image src={assets.hand_icon} alt='' className='w-6' />
      </motion.h3>

      {/* Primary headline — single extended line, Syne font, animated underlines */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-[22px] sm:text-[30px] md:text-[38px] lg:text-[44px] text-center lg:whitespace-nowrap leading-[1.25] tracking-tight text-darkText dark:text-lightText'
        style={{ fontFamily: "var(--font-syne), 'Inter', sans-serif", fontWeight: 800 }}
      >
        Design and{' '}
        <span className='relative inline-block'>
          build products
          <motion.svg
            className='absolute -bottom-1 left-0 w-full'
            height='7' viewBox='0 0 200 7' preserveAspectRatio='none'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.0 }}
          >
            <motion.path
              d='M2,4 C40,1 80,6 120,3 C160,0 185,5 198,3'
              stroke='currentColor' strokeWidth='2.5' fill='none' strokeLinecap='round'
              style={{ opacity: 0.35 }}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 0.7, delay: 1.1, ease: 'easeInOut' }}
            />
          </motion.svg>
        </span>
        {' '}that deliver{' '}
        <span className='relative inline-block'>
          real impact.
          <motion.svg
            className='absolute -bottom-1 left-0 w-full'
            height='9' viewBox='0 0 200 9' preserveAspectRatio='none'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.3 }}
          >
            <motion.path
              d='M2,4 C50,2 120,6 198,3'
              stroke='currentColor' strokeWidth='2' fill='none' strokeLinecap='round'
              style={{ opacity: 0.35 }}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 1.4, ease: 'easeInOut' }}
            />
            <motion.path
              d='M2,7 C50,6 120,8 198,6'
              stroke='currentColor' strokeWidth='1.2' fill='none' strokeLinecap='round'
              style={{ opacity: 0.2 }}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 1.55, ease: 'easeInOut' }}
            />
          </motion.svg>
        </span>
      </motion.h1>

      {/* One-liner sub-heading */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='text-center text-darkText text-base dark:text-lightPartial font-Arvo'
      >
        Full-stack developer specializing in the MERN stack — from idea to deployed product.
      </motion.p>

      {/* Tech stack pills */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className='flex flex-wrap justify-center gap-2 max-w-2xl'
      >
        {techStack.map(({ label, color }, i) => (
          <motion.span
            key={label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.08, y: -2 }}
            transition={{ duration: 0.3, delay: 0.9 + i * 0.05 }}
            className='px-3 py-1 rounded-full text-sm font-Arvo border border-darkPartial dark:border-lightPartial text-darkText dark:text-lightText cursor-default hover:bg-lightHover dark:hover:bg-darkHover transition-colors duration-300'
            style={{ boxShadow: `0 0 8px ${color}30` }}
          >
            {label}
          </motion.span>
        ))}
      </motion.div>

      {/* Tools row */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className='flex flex-col items-center gap-3'
      >
        <p className='text-sm font-Arvo text-darkText dark:text-lightPartial tracking-wide'>Tools I Use</p>
        <ul className='flex items-center gap-3 sm:gap-5'>
          {toolsData.map((tool, index) => (
            <motion.li
              whileHover={{ scale: 1.1, y: -2 }}
              className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-darkPartial rounded-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-blackSha dark:border-lightPartial dark:hover:bg-darkHover dark:hover:shadow-whiteSha'
              key={index}
            >
              <Image src={tool} alt='tool' className='w-5 sm:w-7' />
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* CTAs */}
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-2'>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="#contact"
          className='px-10 py-3 border border-lightPartial rounded-full bg-darkPartial text-lightText flex items-center gap-2 dark:bg-lightPartial dark:text-darkText'
        >
          Contact Me <Image src={isDarkMode ? assets.right_arrow : assets.right_arrow_white} alt='' className='w-4' />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          href="/ManasVerma_Resume.pdf" download
          className='px-10 py-3 border rounded-full border-darkPartial flex items-center gap-2 dark:border-lightPartial dark:text-lightText'
        >
          My Resume <Image src={isDarkMode ? assets.download_icon_dark : assets.download_icon} alt='' className='w-4' />
        </motion.a>
      </div>

    </div>
  );
};

export default Header;