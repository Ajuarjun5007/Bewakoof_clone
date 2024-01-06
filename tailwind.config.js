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
  
        'md': '1000px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  screens: {
    'sm': '640px',

    'md': '768px',

    'lg': '1000px',

    'xl': '1170px',

    // '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
  plugins: [
    function ({addUtilities}){
      const newUtilites = {
        ".no-scrollbar::-webkit-scrollbar":{
          display:"none",
        },
        '.no-scrollbar':{
          '-ms-overflow-style':'none',
          "scrollbar-width":"none",
        },
      };

      addUtilities(newUtilites);
    }

  ],
}

