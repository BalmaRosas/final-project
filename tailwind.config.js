/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      manelColor: "#10103C",
      ecru: "#fdfaf5",
      olive: "#6c783f",
      blue: colors.blue,
      red: colors.red,
      indigo: colors.indigo,
      purple: colors.purple,
      white: colors.white,
      green: colors.green,
      slate: colors.slate,
      teal: colors.teal,
      sky: colors.sky,
      gray: colors.gray,
      rose: colors.rose,
    },
    extend: {},
  },
  plugins: [],
}









