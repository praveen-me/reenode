// const webpack = require('webpack');
const path = require('path');

console.log('here');

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
      {
        test: /\.scss|\.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    index: '/',
  },
};

module.exports = config;
