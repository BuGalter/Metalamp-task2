const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const entryPoints = require('./src/helpers/entry-points');

const config = {
  context: path.resolve(__dirname, 'src'),

  entry: entryPoints,

  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new HtmlWebpackPlugin(
    {   template: './index.pug',
        filename: 'index.html',
        favicon: './components/head/favicon.ico',
        chunks: ['indexPage']
    }),
    new HtmlWebpackPlugin(
      {   template: './ui-kit/ui-kit.pug',
          filename: 'ui-kit.html',
          //favicon: './components/head/favicon.ico',
          chunks: ['uikitPage']
      }),
    new MiniCssExtractPlugin({filename: '[name].[hash].css'}),
    new CleanWebpackPlugin(),
 ],

  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: ['file-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: ['file-loader']
      },
    ]
  }
};

module.exports = config;