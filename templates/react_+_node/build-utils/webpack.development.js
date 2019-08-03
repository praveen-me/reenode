module.exports = () => ({
  modules: {
    rules: [
      {
        test: /\.scss|\.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
});
