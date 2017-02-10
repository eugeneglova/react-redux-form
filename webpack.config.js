module.exports = {
	entry: './js/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						query: {
							presets: [
								'stage-2',
								'react'
							]
						}
					}
				]
			}
		]
	}
};
