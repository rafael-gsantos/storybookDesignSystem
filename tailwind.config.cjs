/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      'h1': '64px',
      'h2': '48px',
      'h3': '32px',
      'h4': '24px',
      'h5': '18px',
      'h6': '14px',
      'xl':'24px',
      'lg': '20px',
      'md': '16px',
      'sm': '12px',
      'xs': '10px',
    },
    colors: {
      transparent: 'transparent',
      gray: {
        300: '#5B536A',
        400: '#968CA4',
        500: '#DED7EA',
      },
      pink:{
        300: '#C4A6EE',
        400: '#D9BEFF',
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
