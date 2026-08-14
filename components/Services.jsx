import React from 'react'
import { motion } from 'motion/react'

const steps = [
  {
    num: '01',
    title: 'Design & Systems',
    verb: 'Tailwind v4 + shadcn/ui',
    description:
      'Responsive design systems using Tailwind CSS v4 and shadcn/ui primitives configured with OKLCH dynamic color tokens. Fluid UI micro-interactions powered by Framer Motion, GSAP, and Recharts analytics dashboards.',
    proof: 'ArpanKalaa — Design System & OKLCH Theme Tokens',
    link: 'https://arpan-kalaa.vercel.app/',
    color: '#EC4899',
    bgGlow: 'rgba(236,72,153,0.10)',
  },
  {
    num: '02',
    title: 'Core Architecture',
    verb: 'Next.js 15 & MERN',
    description:
      'Full-stack Next.js 15 (App Router with Turbopack) and Express MERN architectures supporting multi-tenant portals, Redux Toolkit state management, and automated PDF invoice generation via Puppeteer.',
    proof: 'WorkAlly — Enterprise Role-Based MERN Architecture',
    link: 'https://github.com/Manasv03/WorkAlly',
    color: '#4ADE80',
    bgGlow: 'rgba(74,222,128,0.10)',
  },
  {
    num: '03',
    title: 'API & Data Integration',
    verb: 'Prisma, Neon & AI',
    description:
      'PostgreSQL on Neon DB via Prisma ORM, Clerk Auth with Upstash Redis rate-limiting (50 req/min), Google Gemini 2.5 AI streaming, HMAC SHA256 Razorpay webhooks, and Inngest background queues.',
    proof: 'Propel — Gemini 2.5 AI & Razorpay Webhook Engine',
    link: 'https://github.com/Manasv03/Propel',
    color: '#A855F7',
    bgGlow: 'rgba(168,85,247,0.10)',
  },
  {
    num: '04',
    title: 'Build, Test & Deploy',
    verb: 'Vercel + GitHub Actions',
    description:
      'Automated GitHub Actions CI pipelines executing Node.js dependency caching, ESLint, and Vitest unit testing. Deployed on Vercel serverless with custom CSP security headers and Sentry error telemetry.',
    proof: 'ArpanKalaa — Production Vercel Deployment',
    link: 'https://arpan-kalaa.vercel.app/',
    color: '#3B82F6',
    bgGlow: 'rgba(59,130,246,0.10)',
  },
];

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id='services'
      className='w-full px-[5%] sm:px-[8%] md:px-[12%] py-16 md:py-20 scroll-mt-20'
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-base md:text-lg font-Arvo text-darkText dark:text-lightText'
      >
        My Process
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-3xl sm:text-4xl md:text-5xl font-Arvo text-darkText dark:text-lightText'
      >
        How I Build Things
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-xl mx-auto mt-3 md:mt-5 mb-10 md:mb-16 text-sm md:text-base font-Arvo text-darkText dark:text-lightText'
      >
        From the first sketch to a live URL — a repeatable process I follow on every project.
      </motion.p>

      {/* Steps Container */}
      <div className='relative max-w-3xl mx-auto'>

        {/* Vertical connector line (hidden on small mobile, visible sm+) */}
        <div className='absolute left-[20px] sm:left-[28px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-darkPartial to-transparent dark:via-lightPartial hidden sm:block' />

        <div className='flex flex-col gap-6 sm:gap-10'>
          {steps.map(({ num, title, verb, description, proof, link, color, bgGlow }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className='relative flex gap-4 sm:gap-6 md:gap-8 group'
            >
              {/* Step number circle */}
              <div
                className='relative z-10 flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-Arvo font-bold text-xs sm:text-base border-2 transition-all duration-300'
                style={{
                  borderColor: color,
                  color: color,
                  background: bgGlow,
                  boxShadow: `0 0 15px ${bgGlow}`,
                }}
              >
                {num}
              </div>

              {/* Card */}
              <div
                className='flex-1 border border-darkPartial rounded-xl sm:rounded-2xl p-4 sm:p-6 cursor-default hover:-translate-y-0.5 duration-300 dark:border-lightPartial dark:bg-[#0a0a0f]/60 bg-white/5 transition-all'
              >
                <div className='flex items-start justify-between flex-wrap gap-2 mb-2'>
                  <h3 className='text-base sm:text-xl font-Arvo font-semibold text-darkText dark:text-lightText'>
                    {title}
                  </h3>
                  <span
                    className='text-[10px] sm:text-xs font-Arvo px-2 py-0.5 rounded-full border'
                    style={{ color, borderColor: color, background: bgGlow }}
                  >
                    {verb}
                  </span>
                </div>

                <p className='text-xs sm:text-sm leading-relaxed text-darkText dark:text-lightText font-Arvo mb-3 sm:mb-4 opacity-85'>
                  {description}
                </p>

                <a
                  href={link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-1.5 text-xs font-Arvo border-b border-dashed transition-colors duration-300'
                  style={{ color, borderColor: `${color}66` }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className='opacity-70'>↗</span>
                  {proof}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
