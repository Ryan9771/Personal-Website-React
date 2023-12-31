/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        '280': '280px',
        '290': '290px',
        '300': '300px',
      },
      minHeight: {
        '35': '35rem',
        '36': '36rem',
        '40': '40rem',
      },
      colors: {
        'primary': '#FEFDE8',
        'secondary': '#003049',
        'header': '#7e0306',
        'link': '#2d2f83',
        'orangy': 'rgb(162, 66, 11)',
        'lblue': '#3f43b2',
        'dark-blue-1': '#222B49',
        'dark-blue-2': '#0B1532',
        'within-button-color': '#A7A7A7',
        'imperial-black': '#141414',
        'imperial-blue': '#0159A5',
        'imperial-gray': '#EBEBEB',
      },
      screens: {
        'mdl': '1007px',
     },
     flex: {
      '2': '2',
      '3': '3',
      '4': '4',
     },
     backgroundImage: {
      'discord': "url('./src/assets/images/discord_bot/discord_1.png')",
      'calculator': "url('/Images/Calculator/calcHome.png')",
      'tictactoe' : "url('/Images/TicTacToe/tictactoeHome.png')",
      'wordle': "url('/Images/Wordle/game.png')",
      'foobar': "url('/Images/GoogleFoobar/solutions.png')",
      'ds': "url('/Images/DataStructures/structures.png')", 
     },
     borderWidth: {
      '3': '3px',
     },
     width: {
      '37': '149px',
     },
     borderRadius: {
      '4xl': '2.5rem',
     },
    },
  },
  plugins: [],
}

