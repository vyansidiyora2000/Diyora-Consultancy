/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f7eae4',
          200: '#e9d0c7',
          300: '#d8b0a4',
          400: '#c58c7c',
          500: '#b26a56',
          600: '#9e4b34',
          700: '#7c3a28',
          800: '#5b2b1e',
          900: '#3d1d14',
        },
      },
    },
  },
  plugins: [],
}
