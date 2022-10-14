/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      '2xl': 32,
      'xl': 24,
      'lg': 20,
      'md': 18,
      'sm': 16,
      'xs': 14,
    },
    colors: {
      transparent: 'transparent',
      gray: {
        300: '#5B536A',
        400: '#968CA4',
        500: '#DED7EA',
      },
      pink:{
        500: '#C4A6EE',
        600: '#D9BEFF',
      },
      purple:{
        300: '#140F1A',
        400: '#221A2C',
      }
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },                                                                                         
  plugins: [],
}
