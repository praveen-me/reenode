const webpack = require('webpack');
const path = require('path');

const config = {
  mode: 'development',
  entry: './client/index.js',
  target: 'web',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = config;
