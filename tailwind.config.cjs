/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{css,js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}
