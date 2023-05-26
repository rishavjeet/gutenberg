/**
 * External dependencies
 */
const { join } = require( 'path' );

/**
 * Internal dependencies
 */
const { baseConfig } = require( './shared' );

module.exports = {
	...baseConfig,
	watchOptions: {
		aggregateTimeout: 200,
	},
	name: 'interactivity',
	entry: {
		runtime: {
			import: `./packages/interactivity`,
			library: {
				name: [ 'wp', 'interactivity' ],
				type: 'window',
			},
		},
	},
	output: {
		devtoolNamespace: 'wp',
		filename: './build/interactivity/[name].min.js',
		path: join( __dirname, '..', '..' ),
	},
	optimization: {
		...baseConfig.optimization,
		runtimeChunk: {
			name: 'vendors',
		},
		splitChunks: {
			cacheGroups: {
				vendors: {
					name: 'vendors',
					test: /[\\/]node_modules[\\/]/,
					minSize: 0,
					chunks: 'all',
				},
			},
		},
	},
	module: {
		rules: [
			{
				test: /\.(j|t)sx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: require.resolve( 'babel-loader' ),
						options: {
							cacheDirectory:
								process.env.BABEL_CACHE_DIRECTORY || true,
							babelrc: false,
							configFile: false,
							presets: [
								[
									'@babel/preset-react',
									{
										runtime: 'automatic',
										importSource: 'preact',
									},
								],
							],
						},
					},
				],
			},
		],
	},
};