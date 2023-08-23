/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#dc0a2d',
        bug: '#A7B723',
        dark: '#75574C',
        dragon: '#7037FF',
        electric: '#F9CF30',
        fairy: '#E69EAC',
        fighting: '#C12239',
        fire: '#F57D31',
        flying: '#A891EC',
        ghost: '#70559B',
        normal: '#AAA67F',
        grass: '#74CB48',
        ground: '#DEC16B',
        ice: '#9AD6DF',
        poison: '#A43E9E',
        psychic: '#FB5584',
        rock: '#B69E31',
        steel: '#B7B9D0',
        water: '#6493EB',
      },
      backgroundImage: {
        'fundoPokemon': "url('./assets/images/FundoPokemon(1).png')",
      }
    },
    fontFamily: {
      'mono': ['ui-monospace', 'SFMono-Regular', 'sans-serif']
    }
  },
  plugins : [require('flowbite/plugin')],
  safelist: [
    {pattern: /(bg|text|border)-(primary|bug|dark|dragon|electric|fairy|fighting|fire|flying|ghost|normal|grass|ground|ice|poison|psychic|rock|steel|water)/}
  ]
}

