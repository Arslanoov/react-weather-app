const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: "development",

  entry: path.resolve(__dirname, 'src', 'index.jsx'),

  resolve: {
    extensions: [".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Weather App',
      template: 'public/index.html'
    })
  ],

  devServer: {
    open: true,
    historyApiFallback: true
  }
};
