/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          700: '#00000080',
          600: '#121212',
          500: 'rgba(0,0,0,.7)',
          400: '#404040',
          300: 'hsla(0,0%,100%,.6)',
          200: '#282828',
          100: '#b3b3b3'
        }
      }
    },
  },
  plugins: [],
}
