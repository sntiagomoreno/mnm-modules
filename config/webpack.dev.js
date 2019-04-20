const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
	mode: 'development',
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
                require('autoprefixer'),
                require('postcss-easing-gradients')
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
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'dist/img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'dist/media/[name].[hash:7].[ext]'
        }
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