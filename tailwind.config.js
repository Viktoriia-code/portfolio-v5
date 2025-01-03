/* @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "accent": colors.cyan[300],
        "basicText": colors.gray[400],
        "lightBasicText": colors.gray[300],
        "heading": colors.slate[100],
        "navText": colors.gray[500],
        "lightBg": 'rgba(35, 53, 84, 0.5)',
        "mainBg": '#030014',
      },
      boxShadow: {
        "accentShadow": "0 0 25px var(--main-color), 0 0 50px var(--main-color)",
      },
    },
  },
  plugins: [],
}
