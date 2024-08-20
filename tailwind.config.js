/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        cRose: "#BE123C",
        cBlue: "#34a4cd",
        cCard: "#132F4C",
        cYellow: "rgb(245,197,24)",
      },
    },
    screens: {
      sm: "425px",
      md: "768px",
      lg: "976px",
      xl: "1220px",
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
