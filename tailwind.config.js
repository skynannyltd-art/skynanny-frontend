/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs douces inspirées du logo
        primary: {
          DEFAULT: '#4A90B8', // Bleu doux du logo
          light: '#7AB3D4',
          dark: '#356B8C',
        },
        secondary: {
          DEFAULT: '#B8D4E8', // Bleu très clair
          light: '#E3F0F8',
          dark: '#8BBBDB',
        },
        accent: {
          DEFAULT: '#F5F9FC', // Bleu presque blanc
          warm: '#FFF8F3', // Crème très doux
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}