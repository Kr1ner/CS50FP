/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home-background':"url('./src/assets/background.svg')"
      },fontFamily:{
        main:['Helvetica-Rounded'],
        secondary:['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

