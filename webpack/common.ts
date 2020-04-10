import webpack from 'webpack';
import path from 'path';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const srcPath = path.resolve('.', 'src');

const config: webpack.Configuration = {
  entry: './src/index',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '~': srcPath,
    },
  },
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /\/core-js|node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|svg|jpe?g|gif|ttf|woff2?|eot)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new Dotenv(),
  ],
};

export default config;
