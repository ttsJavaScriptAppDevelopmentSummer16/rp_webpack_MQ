var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"
    })
  ],

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015','react']
        }
      }
    ]
  },

  postcss: [
    require('autoprefixer')
  ],

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      }
    ]
  },

  devServer: {
   contentBase: "./public",
   colors: true,
   historyApiFallback: true,
   inline: true
 }
}
