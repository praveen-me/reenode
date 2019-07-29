const webpack = require('webpack');
const path = require('path');

const config = {
	mode: 'development',
	entry: './client/index.js',
	target: "web",
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: "babel-loader"
			}
		]
	}
}

module.exports = config