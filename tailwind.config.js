const colors = require('tailwindcss/colors')
const { fontSize } = require('tailwindcss/defaultTheme')

const config = {
  darkMode: 'media',
  plugins: [
    require('@tailwindcss/typography'),
  ],
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    colors,
    fontSize: {},
  },
}

Object.entries(fontSize).forEach(([key, value]) => {
  config.theme.fontSize[key] = value[0]
})

module.exports = config
