/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    textColor: {
      primary: '#244D4D',
      secondary: '#ffed4a',
      danger: '#e3342f',
    },
    extend: {
      fontFamily: {
        notoJP: ['Noto Serif JP', 'serif'],
        monts: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
