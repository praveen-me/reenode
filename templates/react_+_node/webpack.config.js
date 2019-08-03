const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const mode = process.env.NODE_ENV;

// const config = {
//   mode: 'development',
//   entry: './client/index.js',
//   target: 'web',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'public'),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js?$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   plugins: [new webpack.ProgressPlugin()],
// };

// module.exports = merge(config, {
//   module: {
//     rules: [
//       {
//         test: /\.scss|\.css$/,
//         use: ['style-loader', 'css-loader', 'sass-loader'],
//       },
//     ],
//   },
// });

// console.log(path.resolve(__dirname, './server/public'));

module.exports = ({ mode }) =>
  merge({
    mode,
    entry:
      mode === 'development'
        ? [
            'webpack-hot-middleware/client?path=/__webpack_hmr',
            './client/index.js',
          ]
        : './client/index.js',
    target: 'web',
    // externals: [nodeExternals()], // Need this to avoid error when working with Express
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
    output: {
      publicPath: '/',
      path: path.resolve(__dirname, './public/js'),
      filename: 'bundle.js',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.ProgressPlugin(),
    ],
  });
