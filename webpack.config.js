const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: "development",

  entry: path.resolve(__dirname, 'src', 'index.js'),

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
