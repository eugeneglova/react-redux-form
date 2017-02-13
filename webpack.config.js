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
								'es2015',
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
