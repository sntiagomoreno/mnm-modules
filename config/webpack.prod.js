const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
	mode: 'production',
	devServer: {
		contentBase: path.join(__dirname, '../dist/'),
		compress: true,
		clientLogLevel: 'error',
		stats: 'errors-only'
	},
	devtool: 'cheap-eval-source-map',
  resolve: {
    alias: {
      '@': resolve('src'),
    }
  },
	module: {
		rules: [
			{
				test: /\.html$/,
				loader: "html-loader"
			},
			{
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              moduels: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              importLoaders: 1, 
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: (loader) => [
                require('autoprefixer')
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
              sourceMap: true
            }
          }

        ]
      },
		]
	},
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Museo de Memoria Histórica',
      template: path.join(__dirname, '../src/index.html'),
    })
  ]
}