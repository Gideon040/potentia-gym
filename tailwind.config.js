/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Potentia Gym Brand Colors
        'gym-navy': '#002444',
        'gym-navy-light': '#003D8F',
        'gym-navy-dark': '#1A2E47',
        'gym-gold': '#E1AC46',
        'gym-gold-light': '#FFCE71',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
      },
    },
  },
  plugins: [],
}