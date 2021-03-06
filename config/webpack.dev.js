/* eslint-disable new-cap */
const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
  entry: {
    app: './src/index.js',
    font: './src/font.js',
    sw: './src/sw.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    hot: true,
    contentBase: './dist',
  },
  devtool: 'cheap-module-eval-source-map',
});
