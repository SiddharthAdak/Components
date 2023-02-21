/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': {max: '930px'},
      'sm': {max: '500px'},
    },
    fontFamily: {
      'display': ['Poppins', 'sans-serif']
    },
    extend: {
      colors:{
        purple: '#4e46dc',
      }
    },
  },
  plugins: [],
}
