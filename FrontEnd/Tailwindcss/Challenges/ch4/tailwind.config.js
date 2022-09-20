/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screen:{
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1228px',
      '2xl': '1536px'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      inter: ['Inter' ,'sans-serif']
    },
  },
  plugins: [],
}
