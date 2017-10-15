const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
	resolve: {
		modules: [
			path.resolve('./src'),
			path.resolve('node_modules')
		]
	},
  devServer: {
    contentBase: 'dist',
    hot: true,
    inline: true
  }
};
