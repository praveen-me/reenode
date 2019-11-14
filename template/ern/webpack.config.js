/* eslint global-require: "off" */

const merge = require('webpack-merge');
const path = require('path');

const modeConfig = myMode => require(`./build-utils/webpack.${myMode}`);
const presetConfig = preset =>
  require(`./build-utils/presets/webpack.preset.${preset}`);

module.exports = ({ mode, preset } = { mode: 'production', preset: '' }) =>
  merge(
    {
      mode,
      entry:
        mode === 'development'
          ? [
              'webpack-hot-middleware/client?path=/__webpack_hmr',
              './client/index.js',
            ]
          : './client/index.js',
      target: 'web',
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.(eot|otf|ttf|woff|woff2)$/,
            use: 'file-loader',
          },
          {
            test: /\.svg$/,
            use: [
              {
                loader: 'svg-url-loader',
                options: {
                  // Inline files smaller than 10 kB
                  limit: 10 * 1024,
                  noquotes: true,
                },
              },
            ],
          },
          {
            test: /\.(jpg|png|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  // Inline files smaller than 10 kB
                  limit: 10 * 1024,
                },
              },
              {
                loader: 'image-webpack-loader',
                options: {
                  mozjpeg: {
                    enabled: false,
                    // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
                    // Try enabling it in your environment by switching the config to:
                    // enabled: true,
                    // progressive: true,
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                  optipng: {
                    optimizationLevel: 7,
                  },
                  pngquant: {
                    quality: '65-90',
                    speed: 4,
                  },
                },
              },
            ],
          },
          {
            test: /\.(mp4|webm)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: 10000,
              },
            },
          },
        ],
      },
      output: {
        publicPath: '/',
        path: path.resolve(__dirname, './build/'),
        filename: 'bundle.js',
      },
    },
    modeConfig(mode),
    preset ? presetConfig(preset) : {}
  );
