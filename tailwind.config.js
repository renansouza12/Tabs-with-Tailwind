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
    extend: {
     animation:{
      'moving': 'moving .5s ease'
     },
     keyframes:{
      moving:{
        '0%':{transform: 'translateX(50px)', opacity:'0'},
        '100%':{transform: 'translateX(0px)', opacity:'1'}
      }
     }
    },

  },
  plugins: [],
}
