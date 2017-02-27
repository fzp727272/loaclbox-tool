var webpack = require('webpack');
//var fs = require('fs');
var WebpackDevServer = require('webpack-dev-server');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var extractCSS = new ExtractTextPlugin("./bulid/css/dashboard.css");


module.exports = {
	entry: {

		main: './entry.js',
		jquery: ["jquery"]
	},
	output: {
		path: __dirname,
		filename: './bulid/js/[name].js'
	},
	devtool: 'source-map',
	devServer: {
		watch: true,
		keepalive: true,
		//在webpack.config.js中编辑
		historyApiFallback: true,
		hot: true,
		progress: true,
		contentBase: './bulid',
		inline: true,
		port: 6060,
		colors: true,
		host: '10.88.48.22'
	},
	module: {

		loaders: [
			/*编译js、jsx*/

			/*less编译器*/
			{
				test: /\.(less|css)$/,
				loader: extractCSS.extract(['css', 'less']),
				loaders: ['style', 'css', 'autoprefixer', 'less', ],
			}, {
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader?limit=10000&mimetype=application/font-woff"
			}, {
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "file-loader"
			} ,{
				test: /\.(png|jpg)$/,
				loader: 'url?limit=1200&name=[hash].[ext]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
			}, {
				test: /\.hbs$/,
				loader: 'handlebars-loader',
			}
		]
	},


	plugins: [
		new CommonsChunkPlugin({
			name: ["jquery"],

			minChunks: 2

		}),
		new HtmlWebpackPlugin({
			title: 'haha',
			filename: 'bulid/index.html',

			inject: true
		}),
		/*css文件打包*/
		extractCSS,
		//	new webpack.HotModuleReplacementPlugin(),
		/* 引入jquery*/
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery"
		}),
		//new ExtractTextPlugin();
		/*热更新*/
		new webpack.HotModuleReplacementPlugin(),
	],
}