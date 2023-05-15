/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        custom: '#12C556',
        hoverbg: '#ffffff',
        gold: '#F4AB0A',
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
