// Created webpack.config.js of Webpack 4
// created by wwk
const path = require('path');
// Required this plugin for clean the dist file.
const CleanWebpackPlugin = require('clean-webpack-plugin');
// Required this plugin for create index.html automatically.
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	plugins: [
		// Clean dist file before bundle files
		new CleanWebpackPlugin(['dist']),
		// Create index.html automatically, and set the title of page
		new HtmlWebpackPlugin({
			title: 'ProjectTitle'
		})
	],
	module: {
		rules: [
			{
				// Installed Babel-loader and @babel/plugin-proposal-class-properties
				test: /\.js$/,
				include: [
					path.resolve(__dirname, 'src')
				],
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-react'],
					plugins: ['@babel/plugin-proposal-class-properties']
				}
			},
			{
				// Installed file-loader for import files of image
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {}
					}
				]
			},
			{
				// Installed css-loader and style-loader for import css files
				test: /\.css$/,
				use: [
					// 注意两个loader的顺序不能放错
					{loader: 'style-loader'},
					{loader: 'css-loader'}
				]
			}
		]
	}
};
