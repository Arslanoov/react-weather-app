const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require('dotenv');
const path = require('path');

module.exports = () => {
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    mode: "development",

    entry: path.resolve(__dirname, 'src', 'index.tsx'),

    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".scss", ".sass"],
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },

        {
          test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
                name: '[name]-[sha1:hash:7].[ext]'
              }
            }
          ]
        },

        // Loading fonts
        {
          test: /\.(ttf|otf|eot|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'fonts',
                name: '[name].[ext]'
              }
            }
          ]
        },

        // Loading CSS
        {
          test: /\.(css)$/,
          use: [ MiniCssExtractPlugin.loader, 'css-loader']
        },

        // Loading SASS/SCSS
        {
          test: /\.(s[ca]ss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',

            {
              loader: 'sass-resources-loader',
              options: {
                resources: ['./src/core/variables.scss']
              }
            }
          ]
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: 'Weather App',
        template: 'public/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'main-[hash:8].css'
      }),
      new webpack.DefinePlugin(envKeys)
    ],

    devServer: {
      open: true,
      historyApiFallback: true
    }
  }
};
