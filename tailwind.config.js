/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'white': '#F7F7F7',
        'black': '#222222',
        'yellow': '#E8C547',
        'red': '#D90000',
      },
    }
  },
  plugins: [ require('tailwind-scrollbar-hide')],
}

