import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        churrasco: {
          50: '#fdf6f0',
          100: '#f8e7d6',
          200: '#f2cfa8',
          300: '#e9a96b',
          400: '#e07d2b',
          500: '#c95d1a',
          600: '#a13f13',
          700: '#7a2d10',
          800: '#4d1a07',
          900: '#2a0d03',
        },
        laranja: '#ff4500',
        marrom: '#7a2d10',
        bege: '#f8e7d6',
      }
    },
  },
  plugins: [],
}

export default config 