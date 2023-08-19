/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DC0A2D',
        bug: '#A7B723',
        dark: '#75574C'
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

