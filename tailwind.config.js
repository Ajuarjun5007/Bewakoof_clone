/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        headerbg:"#eeeeee",
        textcolor:"rgba(0,0,0,0.8)"
      },
      fontSize: {
        'basesize': '0.625rem', // 10px
      },
      width:{
        85:"85%"
      },
      fontFamily:{
        cmnstyle:"montserrat,sans-serif"
      }
    },
  },
  plugins: [],
}

