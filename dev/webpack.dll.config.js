const path = require('path');
var webpack = require('webpack');
const extracttextplugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		dll: [
			'react',
			'react-dom'
		]
	},
	output: 
	{
    	path: path.resolve(__dirname, 'dist'),
    	filename: '[name].js',
    	library: '[name]'
  	},
	plugins: [
	    new webpack.DllPlugin({
	    	name: '[name]',
	    	path: path.join(__dirname,'[name]-manifest.json')
	    })
	],
	mode: 'production'
}