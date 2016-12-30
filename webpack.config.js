var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './src/static/js/app.js',
  output: {
    path: path.resolve(__dirname, './src/static/dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }
}
