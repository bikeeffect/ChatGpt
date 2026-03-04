/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        trueGray: {
          700: '#404040',
          800: '#262626',
        },
      },
    },
  },
  plugins: [],
}
