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
        navy: {
          DEFAULT: '#0a1628',
          mid: '#112240',
          light: '#1a3057',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e8c97a',
          pale: '#f5e8c4',
        },
        cream: '#faf7f2',
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}