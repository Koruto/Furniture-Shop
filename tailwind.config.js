/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    textColor: {
      primary: '#244D4D',
      secondary: '#F4F6F6',
      danger: '#e3342f',
    },
    extend: {
      fontFamily: {
        notoJP: ['Noto Serif JP', 'serif'],
        monts: ['Montserrat', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
