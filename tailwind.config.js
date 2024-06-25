/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily:{
'sans': ['Roboto', ]
    },
    extend: {
      backgroundImage:{
        "home": "url('/imagem/bg.png')"
      }
    },
  },
  plugins: [],
}

