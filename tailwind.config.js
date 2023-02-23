/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html', 
  ],
  theme: {
    fontFamily:{
      'Montserrat':['Montserrat', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
