/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
  extend: {
    fontFamily: {
      'league-gothic': ['League Gothic', 'sans-serif'],
    },
    colors: {
      'customRed': '#e44b37', 
    },
    animation: {
      'infinite-scroll': 'infinite-scroll 25s linear infinite',
    },
    keyframes: {
      'infinite-scroll': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
      }
    }
  },
};
export const plugins = [];


