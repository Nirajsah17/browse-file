const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    'filesystem.build.js': [path.resolve(__dirname, 'main.js')]
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css' // Updated filename
    })
  ],
  optimization: {},
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
    ]
  },
  devServer: {
    hot: false,
    compress: false,
    static: {
      directory: path.join(__dirname, '')
    },
    port: 9000
  },
  resolve: {
    alias: {
      '@data': path.resolve(__dirname, 'src/lib')
    }
  }
};
