/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: 'news-',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './dist/*.html'
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#5429CC'
      },
      fontFamily: {
        poppins: 'Poppins'
      }
    }
  },
  plugins: []
}
