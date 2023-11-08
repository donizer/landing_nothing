/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-grey': '#292929',
      },
      screens: {
        md: '744px',
        xl: '1260px',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'Arial', 'sans-serif'],
        'space-mono': ['Space Mono', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'lady-with-phone': 'url(images/lady-with-phone.png)',
      },
      gridTemplateColumns: {
        mobile: '0 repeat(2, 1fr) 0',
        tablet: 'minmax(48px, auto) repeat(6, minmax(80px, 1fr)) minmax(48px, auto)',
        desktop: 'minmax(96px, auto) repeat(12, 63px) minmax(96px, auto)',
      },
    },
  },
  plugins: [],
};
