const webpack = require('webpack');
const merge = require('webpack-merge');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const baseConfig = require('./webpack.base.js');

const isProduction = process.env.NODE_ENV === 'production';

let config = merge(baseConfig, {
  entry: ['./src/entry-client.js'],
  plugins: [new VueSSRClientPlugin()],
  output: {
    path: path.resolve('./dist/'),
    filename: '[name].[hash:8].js',
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProduction,
              modules: {
                localIdentName: '[local]_[hash:base64:8]',
              },
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers'),
              },
            },
          },
        ],
      },
    ],
  },
});

if (!isProduction) {
  config = merge(config, {
    output: {
      filename: '[name].js',
      publicPath: 'http://localhost:9999/dist/',
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devtool: 'source-map',
    devServer: {
      writeToDisk: true,
      contentBase: path.resolve(__dirname, 'dist'),
      publicPath: 'http://localhost:9999/dist/',
      hot: true,
      inline: true,
      historyApiFallback: true,
      port: 9999,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  });
} else {
  config = merge(config, {
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[hash:8].css',
      }),
    ],
  });
}

module.exports = config;
