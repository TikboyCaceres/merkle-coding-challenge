const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const rules = [
	{
		test: /\.(ts|tsx)$/,
		exclude: /node_modules/,
		options: {
			compilerOptions: {
				"noEmit": false
			}
		},
		loader: 'ts-loader'
	},
	{
		test: /\.css$/i,
		use: ["style-loader", "css-loader"],
	},
	{
		test: /\.s[ac]ss$/i,
		use: [
			"style-loader",
			"css-loader",
			"sass-loader",
		],
	},
	{
		test: /\.(png|jpe?g|gif|svg|webp)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	},
];

const config = {
	entry: "./src/index.tsx",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "build"),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "public", "index.html"),
		}),
	],
	module: {
		rules
	},
	resolve:
	{
		extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "build"),
		},
		port: 3000,
	}
}

module.exports = [config];
