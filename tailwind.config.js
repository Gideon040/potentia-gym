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
        syne: ['var(--font-syne)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        aeonik: ['var(--font-aeonik-trial)', 'var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 15px rgba(225, 172, 70, 0.3), 0 0 30px rgba(225, 172, 70, 0.15)',
            filter: 'drop-shadow(0 0 8px rgba(225, 172, 70, 0.2))'
          },
          '50%': { 
            boxShadow: '0 0 25px rgba(225, 172, 70, 0.45), 0 0 45px rgba(225, 172, 70, 0.25)',
            filter: 'drop-shadow(0 0 12px rgba(225, 172, 70, 0.35))'
          },
        }
      }
    },
  },
  plugins: [],
}