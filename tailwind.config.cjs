/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      
      'ms': {min: '930px'},
      'sm': {max: '500px'},
      'md2': {max: '730px'},
      'ms2': {min: '730px'}
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
