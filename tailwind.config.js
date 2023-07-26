/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'xs': '256px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        blob: `url('/blob.png')`,
      },
      colors: {
        bground: '#fffff',
        bglight: '#3d3a3d',
        base: '#2a1b3d',
        lightbase: '#44318d',
        highlight: '#d83f87',
        neutral: '#8ea1a5',
        hoverbg: '#ffffff',
        gold: '#F4AB0A',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'), 
    require('tailwind-animatecss')
  ],
}
