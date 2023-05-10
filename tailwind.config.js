/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
     
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(75%)' },
          '20%': { transform: 'translateX(0%)' },
          '80%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-125%)'}
        },
        in: {
          '0%': {transform: 'translateX(100%)'},
          '100%': {transform: 'translateX(0)'}
        },
        out: {
          '0%': {transform: 'translateX(0%)'},
          '100%': {transform: 'translateX(100%)'}
        }   
      },
      animation: {
        'slide-in': 'in 0.5s ease-in',
        'slide-out': 'out 0.5s ease-out',
      }
    },
  },
  plugins: [],
  darkMode: 'class'
};

