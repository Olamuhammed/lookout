const path = require('path')
const webpack = require('webpack')
const BrotliPlugin = require('brotli-webpack-plugin')

module.exports = {
  entry: './app/app.js',
  output: {
    filename: 'lookout.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    modules: [
      path.resolve(__dirname, 'app'),
      path.resolve(__dirname, 'node_modules')
    ]
  },
  optimization: {
    splitChunks:{
      cacheGroups:{
        commons:{
        test: /[\\/]node_modules[\\/]/,
        name:'vendors',
        chunks:'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['stage-0', 'react'],
            plugins: ['transform-async-to-generator']
          }
        }
      },
      {
        test: /\.css/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } }
        ]
      }
    ]
  },
  devServer: {
    hot: true,
    port: 8080,
    clientLogLevel: 'none'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new BrotliPlugin({
      asset: '[path].br[query]',
      test:/\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
}
