/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './dist/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins'
      }
    }
  },
  plugins: []
}