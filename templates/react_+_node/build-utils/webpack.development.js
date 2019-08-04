const webpack = require('webpack');

module.exports = {
  module: {
    rules: [
      // for a list of loaders, see https://webpack.js.org/loaders/#styling
      {
        test: /\.scss|\.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
