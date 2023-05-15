/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-conic': 'conic-gradient(from var(--gradient-angle), theme("colors.clr3"), theme("colors.clr4"), theme("colors.clr5"), theme("colors.clr4"), theme("colors.clr3"))',
      },
      colors: {
        'clr1': '#212534',
        'clr2': '#191c29',
        'clr3': '#5ddcff',
        'clr4': '#3c67e3',
        'clr5': '#4e00c2',
      },
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
        },
        rotation: {
          '0%': { '--gradient-angle': '0deg' },
          '100%': { '--gradient-angle': '360deg' },
        },

      },
      animation: {
        'slide-in': 'in 0.5s ease-in',
        'slide-out': 'out 0.5s ease-out',
        'move-around':'rotation 5s linear infinite'
      }
    },
  },
  plugins: [
    // plugin(function ({ addComponents }) {
    //   const components = {
    //     '@property --gradient-angle': {
    //       syntax: '<angle>',
    //       'initial-value': '0deg',
    //       inherits: false,
    //     },
    //   };

    //   addComponents(components);
    // }),
  ],
  darkMode: 'class'
};

