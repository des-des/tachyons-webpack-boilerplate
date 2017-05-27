const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { getPlugins } = require('tachyons-build-css')

const postCssPlugins = getPlugins({
  minify: process.env.NODE_ENV === 'production',
  // atImport: {
  //   path: [ ... ] we need both pulls in for this to work..
  // }
})

module.exports = {
  context: path.resolve(__dirname, 'app'),

  entry: {
    javascript: './js/app.js'
  },

  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => postCssPlugins
              }
            }
          ]
        })
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin("styles.css")
  ]
}
