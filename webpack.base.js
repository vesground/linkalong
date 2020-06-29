const webpack = require('webpack');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const GoogleFontsPlugin = require("google-fonts-webpack-plugin")
const merge = require('webpack-merge');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const terserPluginOptions = {
  parallel: true,
  terserOptions: {
    ecma: 6,
  },
};

// const googleFontsPluginOptions = {
//   fonts: [
//     { family: "Montserrat", variants: [ "400", "700" ] }
//   ]
// };

const isProduction = process.env.NODE_ENV === 'production';

let config = {
  mode: isProduction ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader'
          }
        }
      },
      {
        test: /\.js$/,
        exclude: file => /node_modules/.test(file),
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'images/[name].[hash:8].[ext]',
          },
        },
      },
      {
        test: /\.(ttf|woff(2)?)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        }
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    // new GoogleFontsPlugin(googleFontsPluginOptions)
  ],
};

if (isProduction) {
  config = merge(config, {
    optimization: {
      minimizer: [new OptimizeCSSAssetsPlugin(), new TerserPlugin(terserPluginOptions)],
    },
  });
}

module.exports = config;
