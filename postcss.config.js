const path = require('path')

module.exports = {
  plugins: {
    'postcss-import': {
      path: [
        path.join('node_modules', 'tachyons', 'src'),
        path.join(__dirname, 'app', 'css')
      ]
    },
    'postcss-css-variables': {},
    'postcss-conditionals': {},
    'postcss-custom-media': {},
    'css-mqpacker': {},
    'perfectionist': {
      format: 'compact',
      trimTrailingZeros: false
    },
    'autoprefixer': {}
  }
};
