const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const NpmInstallPlugin = require('npm-install-webpack-plugin')

module.exports = {
  entry: './src/Example/vue/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      }  
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: { 'vue': 'vue/dist/vue.js' }
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new NpmInstallPlugin()
  ],
  devServer: {
    // historyApiFallback: true,
    // disableHostCheck: true,
    // noInfo: true,
    historyApiFallback: true,
    stats: "minimal",
    proxy: {
      "/api/**": {
        target: "http://localhost:3000",
        secure: true
        // pathRewrite: {
        //   '^/api': ''
        //   }
      }
    }
  },
  devtool: '#eval-source-map'
}