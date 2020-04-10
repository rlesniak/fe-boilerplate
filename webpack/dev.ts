import webpack, { Configuration } from 'webpack';
import path from 'path';
import 'webpack-dev-server';
import merge from 'webpack-merge';
import dotenv from 'dotenv';
import common from './common';

const { parsed: dotenvParsed } = dotenv.config();

const config: Configuration = merge.smart(common, {
  entry: ['react-hot-loader/patch', './src/index'],
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3000,
    proxy: {
      '/api': {
        changeOrigin: true,
        target: dotenvParsed?.API_URL,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          'css-modules-typescript-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.resolve('./src', 'styles')],
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});

export default config;
