/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fcf8ff',
          100: '#f7ebff',
          200: '#edd4ff',
          300: '#dfafff',
          400: '#c87cff',
          500: '#a841ff',
          600: '#941fff',
          700: '#800be6',
          800: '#6b0dbf',
          900: '#520c8f', // Our deep royal base
          950: '#2b0059',
        },
        sand: {
          100: '#fdfbf7',
          200: '#f6f3eb',
          500: '#d7c7a5',
        },
        black: {
          50: '#0a0a0a',
          100: '#1a1a1a',
          200: '#2d2d2d',
          300: '#404040',
          400: '#525252',
          500: '#6b6b6b',
          600: '#858585',
          700: '#a3a3a3',
          800: '#c5c5c5',
          900: '#e5e5e5',
        },
        white: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'blob': "blob 7s infinite",
        'float': "float 6s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        }
      }
    },
  },
  plugins: [],
}
