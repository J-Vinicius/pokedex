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
        'fundoPokemon': "url('./assets/images/FundoPokemon(2).png')",
        'bugT': "url('./assets/tipos/bug.png')",
        'darkT': "url('./assets/tipos/dark.png')",
        'dragonT': "url('./assets/tipos/dragon.png')",
        'electricT': "url('./assets/tipos/electric.png')",
        'fairyT': "url('./assets/tipos/fairy.png')",
        'fightingT': "url('./assets/tipos/fighting.png')",
        'fireT': "url('./assets/tipos/fire.png')",
        'flyingT': "url('./assets/tipos/flying.png')",
        'ghostT': "url('./assets/tipos/ghost.png')",
        'grassT': "url('./assets/tipos/grass.png')",
        'groundT': "url('./assets/tipos/ground.png')",
        'iceT': "url('./assets/tipos/ice.png')",
        'normalT': "url('./assets/tipos/normal.png')",
        'poisonT': "url('./assets/tipos/poison.png')",
        'psychicT': "url('./assets/tipos/psychic.png')",
        'rockT': "url('./assets/tipos/rock.png')",
        'steelT': "url('./assets/tipos/steel.png')",
        'waterT': "url('./assets/tipos/water.png')"
      },
      width:{
        'p1': '1%', 'p2': '2%', 'p3': '3%', 'p4': '4%', 'p5': '5%', 'p6': '6%', 'p7': '7%', 'p8': '8%', 'p9': '9%', 'p10': '10%', 'p11': '11%', 'p12': '12%', 'p13': '13%','p14': '14%','p15': '15%', 'p16': '16%', 'p17': '17%', 'p18': '18%', 'p19': '19%', 'p20': '20%', 'p21': '21%', 'p22': '22%', 'p23': '23%', 'p24': '24%', 'p25': '25%', 'p26': '26%', 'p27': '27%', 'p28': '28%', 'p29': '29%', 'p30': '30%', 'p31': '31%', 'p32': '32%', 'p33': '33%', 'p34': '34%', 'p35': '35%', 'p36': '36%', 'p37': '37%', 'p38': '38%', 'p39': '39%', 'p40': '40%', 'p41': '41%', 'p42': '42%', 'p43': '43%', 'p44': '44%', 'p45': '45%', 'p46': '46%', 'p47': '47%', 'p48': '48%', 'p49': '49%', 'p50': '50%', 'p51': '51%', 'p52': '52%', 'p53': '53%', 'p54': '54%', 'p55': '55%', 'p56': '56%', 'p57': '57%', 'p58': '58%', 'p59': '59%', 'p60': '60%', 'p61': '61%', 'p62': '62%', 'p63': '63%', 'p64': '64%', 'p65': '65%', 'p66': '66%', 'p67': '67%', 'p68': '68%', 'p69': '69%', 'p70': '70%', 'p71': '71%', 'p72': '72%',
        'p73': '73%', 'p74': '74%', 'p75': '75%', 'p76': '76%', 'p77': '77%', 'p78': '78%', 'p79': '79%', 'p80': '80%', 'p81': '81%', 'p82': '82%', 'p83': '83%', 'p84': '84%', 'p85': '85%', 'p86': '86%', 'p87': '87%', 'p88': '88%', 'p89': '89%', 'p90': '90%', 'p91': '91%', 'p92': '92%', 'p93': '93%', 'p94': '94%', 'p95': '95%', 'p96': '96%', 'p97': '97%', 'p98': '98%', 'p99': '99%', 'p100': '100%'
      }
    },
    fontFamily: {
      'mono': ['ui-monospace', 'SFMono-Regular', 'sans-serif']
    }
  },
  plugins : [require('flowbite/plugin')],
  safelist: [
    {pattern: /(bg|text|border)-(primary|bug|dark|dragon|electric|fairy|fighting|fire|flying|ghost|normal|grass|ground|ice|poison|psychic|rock|steel|water)/},
    {pattern: /(w)-p(0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|40|41|42|43|44|45|46|47|48|49|50|51|52|53|54|55|56|57|58|59|60|61|62|63|64|65|66|67|68|69|70|71|72|73|74|75|76|77|78|79|80|81|82|83|84|85|86|87|88|89|90|91|92|93|94|95|96|97|98|99|100)/}
  ]
}

