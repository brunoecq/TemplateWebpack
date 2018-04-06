const path = require('path');
const webpack = require('webpack');
const extracttextplugin = require("extract-text-webpack-plugin");
const cleanwebpackplugin = require('clean-webpack-plugin');
const fontMagician = require('postcss-font-magician');

module.exports = {
	entry: {
		home: path.resolve(__dirname, 'src/my.js'),
	},
	output: 
	{
    	path: path.resolve(__dirname, 'dist'),
    	filename: 'bundle.js',
    	publicPath: path.resolve(__dirname, 'dist')
  	},
  	module: {
	    rules: [
	      { 
	      	test: /\.js$/, 
	      	use: {
	      		loader: 'babel-loader',
	      		options: {
	      			presets: ['es2015']
	      		}
	      	}
	      },
	      { 
	      	test: /\.css$/, 
	      	use: extracttextplugin.extract({
	      		use: [
	      			{
	      				loader: 'css-loader',
	      				options: {
	      					//modules: true,
	      					importLoaders: 1
	      				}
	      			},
	      			'postcss-loader'
	      		]
	      	})
	      }
	    ]
	},
	plugins: [
		new extracttextplugin('bundle.css'),
	    //new webpack.optimize.UglifyJsPlugin(),
	    //new HtmlWebpackPlugin({template: './src/index.html'})
	    new webpack.DllReferencePlugin({
	    	manifest: require('./dll-manifest.json')
	    }),
	    new cleanwebpackplugin(['dist'],{root: __dirname}),
	],
	mode: 'production'
}