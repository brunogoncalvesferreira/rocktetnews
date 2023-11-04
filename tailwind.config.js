/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      background: '#121214',
      text: '#e1e1e6',
      title: '#04d361',
      form: '#a8a8a8',
      button: '#8257e5',
    },

    fontFamily: {
      spartan: ['Spartan', 'sans-serif'],
      work: ['Work Sans', 'sans-serif'],
    },

    backgroundImage: {
      'read-news': 'url(/src/assets/read_news.svg)',
    },
  },
  plugins: [],
}
