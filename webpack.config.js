require("@babel/register")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const src = path.resolve(__dirname, "src")
const dist = path.resolve(__dirname, "dist")

module.exports = {
	mode: "development",
	entry: src + "/index.jsx",
	output: {
		path: dist,
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},
	resolve: {
		extensions: [".js", ".jsx"]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: src + '/index.html',
			filename: 'index.html'
		})
	]
}
