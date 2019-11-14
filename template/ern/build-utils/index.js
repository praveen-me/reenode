/* eslint global-require: "off" */

const webpack = require('webpack');

const { NODE_ENV, preset } = process.env;

const webpackConfig = require('./../webpack.config')({
  mode: NODE_ENV,
  preset,
});

const compiler = webpack(webpackConfig);

module.exports = app => {
  app.use(
    require('webpack-dev-middleware')(compiler, {
      logLevel: 'warn',
      publicPath: webpackConfig.output.publicPath,
      silent: true,
      stats: true,
    })
  );

  app.use(require('webpack-hot-middleware')(compiler));
};
