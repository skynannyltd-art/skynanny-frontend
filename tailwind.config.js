/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4A90B8',
          light: '#7AB3D4',
          dark: '#356B8C',
        },
        secondary: {
          DEFAULT: '#B8D4E8',
          light: '#E3F0F8',
        },
        accent: {
          DEFAULT: '#F5F9FC',
          warm: '#FFF8F3',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}