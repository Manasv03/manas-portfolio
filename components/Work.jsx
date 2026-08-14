"use client";
import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

const projects = [
  {
    id: 'workally',
    title: 'Workally',
    tagline: 'EMS · Full-Stack Web App',
    description: 'Full-stack Employee Management System featuring role-based portals, attendance tracking, and live analytics.',
    stack: ['React', 'Node.js', 'MongoDB', 'Express'],
    accentColor: '#4ADE80',
    screenshot: '/workally.vercel.app_.png',
    github: 'https://github.com/Manasv03/WorkAlly',
    demo: 'https://workally.vercel.app/',
  },
  {
    id: 'arpankalaa',
    title: 'ArpanKalaa',
    tagline: 'E-Commerce · MERN Stack',
    description: 'MERN e-commerce store with product catalog, cart, checkout flow, and inventory admin dashboard.',
    stack: ['Next.js', 'MongoDB', 'Express', 'Node.js'],
    accentColor: '#EC4899',
    screenshot: '/arpan-kalaa.vercel.app_.png',
    github: null,
    demo: 'https://arpan-kalaa.vercel.app/',
  },
  {
    id: 'propel',
    title: 'Propel',
    tagline: 'SaaS · AI Chat Product',
    description: 'AI chat SaaS platform with real-time response streaming, session history, and credit top-ups.',
    stack: ['Next.js', 'OpenAI API', 'MongoDB', 'Node.js'],
    accentColor: '#A855F7',
    screenshot: '/propel-genai.vercel.app_.png',
    github: 'https://github.com/Manasv03/Propel',
    demo: 'https://propel-genai.vercel.app/',
  },
];

const GitHubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ProjectCard = ({ project }) => {
  return (
    <div className="relative">
      {/* ── DESKTOP VIEW (md:block): Pop-out Hover Animation ── */}
      <div className="hidden md:block relative group">
        <div 
          className="relative w-full transition-all duration-300 ease-out group-hover:scale-105 group-hover:z-50 group-hover:shadow-2xl z-10"
          style={{ transformOrigin: 'center top' }}
        >
          <div className="relative w-full">
            {/* Screenshot */}
            <div 
              className="relative w-full aspect-video rounded-2xl overflow-hidden border transition-all duration-300 group-hover:rounded-b-none"
              style={{
                borderColor: `${project.accentColor}44`,
                boxShadow: `0 4px 20px ${project.accentColor}15`,
                background: '#0a0a0f',
              }}
            >
              <Image
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="33vw"
                priority
              />
              <div
                className="absolute top-0 left-0 right-0 h-[3px] z-10"
                style={{
                  background: `linear-gradient(to right, transparent, ${project.accentColor}, transparent)`,
                }}
              />
            </div>

            {/* Desktop Info Panel (Absolute Pop-out) */}
            <div
              className="absolute top-[98%] left-0 right-0 rounded-b-2xl border-x border-b p-4 shadow-2xl transition-all duration-200 ease-out z-20 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
              style={{
                background: 'rgba(10, 10, 15, 0.96)',
                backdropFilter: 'blur(12px)',
                borderColor: `${project.accentColor}44`,
                boxShadow: `0 16px 40px ${project.accentColor}25`,
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-base font-Arvo font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs font-Arvo mt-0.5 font-semibold" style={{ color: project.accentColor }}>
                    {project.tagline}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1 justify-end max-w-[50%]">
                  {project.stack.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-Arvo px-2 py-0.5 rounded-full border text-white/70"
                      style={{
                        borderColor: `${project.accentColor}44`,
                        background: `${project.accentColor}15`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-xs font-Arvo text-white/70 leading-relaxed mb-3 line-clamp-2">
                {project.description}
              </p>
              <div className="flex items-center gap-2.5 pt-1">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-Arvo px-3 py-1.5 rounded-full border border-white/20 text-white/80 bg-white/5 hover:bg-white/15 transition-all"
                  >
                    <GitHubIcon />
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-Arvo px-3.5 py-1.5 rounded-full font-bold text-black hover:brightness-110 transition-all"
                    style={{ background: project.accentColor }}
                  >
                    Live Site ↗
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Desktop Title at Rest */}
          <div className="pt-3 pb-1 flex items-center justify-between px-1 transition-opacity duration-200 group-hover:opacity-0">
            <div>
              <h3 className="text-base font-Arvo font-bold text-darkText dark:text-lightText leading-tight">
                {project.title}
              </h3>
              <p className="text-xs font-Arvo mt-0.5 text-gray-500 dark:text-gray-400">
                {project.tagline}
              </p>
            </div>
            <div 
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ 
                background: project.accentColor, 
                boxShadow: `0 0 8px ${project.accentColor}`,
                animation: 'pulse-dot 2s ease-in-out infinite',
              }}
            />
          </div>
        </div>
      </div>

      {/* ── MOBILE & TABLET VIEW (md:hidden): Clean In-Flow Card ── */}
      <div 
        className="block md:hidden w-full rounded-2xl overflow-hidden border bg-white/5 dark:bg-[#0a0a0f]"
        style={{
          borderColor: `${project.accentColor}33`,
          boxShadow: `0 4px 20px ${project.accentColor}12`,
        }}
      >
        {/* Screenshot */}
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={project.screenshot}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{
              background: `linear-gradient(to right, transparent, ${project.accentColor}, transparent)`,
            }}
          />
        </div>

        {/* Mobile Details in normal flow (No hover needed!) */}
        <div className="p-4 border-t" style={{ borderColor: `${project.accentColor}22` }}>
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-base font-Arvo font-bold text-darkText dark:text-lightText leading-tight">
                {project.title}
              </h3>
              <p className="text-xs font-Arvo mt-0.5 font-semibold" style={{ color: project.accentColor }}>
                {project.tagline}
              </p>
            </div>
            <div className="flex flex-wrap gap-1 justify-end max-w-[55%]">
              {project.stack.slice(0, 2).map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-Arvo px-2 py-0.5 rounded-full border text-darkText dark:text-white/70"
                  style={{
                    borderColor: `${project.accentColor}44`,
                    background: `${project.accentColor}15`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <p className="text-xs font-Arvo text-gray-600 dark:text-white/70 leading-relaxed mb-3">
            {project.description}
          </p>

          <div className="flex items-center gap-2.5 pt-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-Arvo px-3 py-1.5 rounded-full border border-gray-300 dark:border-white/20 text-darkText dark:text-white/80 bg-gray-100 dark:bg-white/5"
              >
                <GitHubIcon />
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-Arvo px-3.5 py-1.5 rounded-full font-bold text-black"
                style={{ background: project.accentColor }}
              >
                Live Site ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[5%] sm:px-[8%] md:px-[8%] py-16 md:py-20 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-base md:text-lg font-Arvo text-darkText dark:text-lightText"
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-Arvo text-darkText dark:text-lightText"
      >
        My Work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-xl mx-auto mt-3 md:mt-5 mb-10 md:mb-14 text-sm md:text-base font-Arvo text-darkText dark:text-lightText"
      >
        Three projects. Real code. Real problems solved.
      </motion.p>

      {/* Grid container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} isDarkMode={isDarkMode} />
        ))}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        target="_blank"
        href="https://github.com/Manasv03"
        className="w-max flex items-center justify-center gap-2 font-Arvo text-darkText border-[0.5px] border-darkPartial rounded-full px-8 md:px-10 py-3 mx-auto mt-12 md:mt-20 text-sm md:text-base hover:bg-lightHover duration-700 dark:text-lightText dark:border-lightPartial dark:hover:bg-darkHover"
      >
        More on GitHub ↗
      </motion.a>
    </motion.div>
  );
};

export default Work;

