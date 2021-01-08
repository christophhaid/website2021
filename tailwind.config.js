module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  darkMode: 'css',
  theme: {
    extend: {},
  },
  variants: {

    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'hover',
      'responsive'
    ],
    borderColor: [
      'dark',
      'dark-focus',
      'dark-focus-within',
      'hover',
      'responsive'
    ],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive']
  },
  plugins: [require('tailwindcss-dark-mode')()]
}
