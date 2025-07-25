import { Lato } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#EDE9FE',
        darkHover: '#4B3B6A',
        lightMain: '#F5F3FF',
        lightText: '#F5F5F5',
        lightPartial: '#E0DDF0',
        darkMain: '#241E38',
        darkText: '#3A2F4D',
        darkPartial: '#3B315B',
        // (lighttext testing)
        // color: #F5F5F5;
        // color: #D1D1D1;
        // color: #D6C3E4;
        // color: #F0DFAF;
      },
      fontFamily:{
        Lato: ['Lato', 'sans-serif'],
        Arvo: ['Arvo', 'serif'],
      },
      boxShadow:{
        'blackSha': '2px 2px 0 #F9A8D4',
        'whiteSha': '2px 2px 0 #C084FC'
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))',
      },  
    },
  },
  darkMode: 'selector',
  plugins: [],
};
