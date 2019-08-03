/* eslint global-require: "off" */

const webpack = require('webpack');
const webpackConfig = require('./../webpack.config')({
  mode: process.env.NODE_ENV,
});

const compiler = webpack(webpackConfig);

console.log(webpackConfig.output.publicPath);

module.exports = app => {
  app.use(
    require('webpack-dev-middleware')(compiler, {
      // logLevel: 'warn',
      publicPath: webpackConfig.output.publicPath,
      // silent: true,
      // stats: true,
      noInfo: false,
    })
  );

  app.use(require('webpack-hot-middleware')(compiler));
};
