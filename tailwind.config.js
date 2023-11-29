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
        textcolor:"rgba(0,0,0,0.8)",
        btmclr:"rgba(0, 0, 0, 0.3)",
        hoveryellow:"#fdd835",
      },
      fontSize: {
        'basesize': '0.625rem', // 10px
      },
      width:{
        85:"85%",
      },
      fontFamily:{
        cmnstyle:"montserrat,sans-serif"
      },
      screens: {

        'sm': '360px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}

