/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          light: '#112240',
          DEFAULT: '#0A192F',
          dark: '#020C1B',
        },
        slate: {
          light: '#CCD6F6',
          DEFAULT: '#8892B0',
          grey: '#64748B',
        },
      },
      fontFamily: {
        academic: ['Inter', 'serif'],
      },
    },
  },
  plugins: [],
}
