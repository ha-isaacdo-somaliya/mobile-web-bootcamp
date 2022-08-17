/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
 theme:{
  screens:{
    'sm':'640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  },
    theme: {
      extend: {
        screens: {
          'lg': '992px',
          // => @media (min-width: 992px) { ... }
        },
      },
    },
    theme: {
      extend: {
        screens: {
          '3xl': '1600px',
        },
      },
    },
    variants: {},
    plugins: [],
 } 
}

