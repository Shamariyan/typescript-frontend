const path = require('path');
module.exports = {
	entry: './src/index.tsx',
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(tsx)$/,
				use: 'babel-loader',
			},
		],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};
