'use strict';

const path               = require('path');
const webpack            = require('webpack');
const BabiliPlugin       = require('babili-webpack-plugin');
const workboxPlugin      = require('workbox-webpack-plugin');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const pkg = require('./package.json');

module.exports = {
  entry: {
    vendor: pkg.clientDependencies,
    bundle: path.join(__dirname, 'src', 'client', 'index.js')
  },
  output: {
    filename     : '[name].[hash:8].js',
    chunkFilename: '[name].bundle.[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use : ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use     : [
            {
              loader : 'css-loader',
              options: {
                modules: true,

                // importLoaders: 1,
                localIdentName: '[hash:base64:5]'
              }
            },
            'postcss-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new BabiliPlugin(),
    new CleanWebpackPlugin('dist'),
    new ExtractTextPlugin('[contenthash].css'),
    new workboxPlugin({
      globDirectory: 'dist',
      globPatterns : ['**/*.{html,js, css}'],
      swDest       : path.join('dist', 'sw.js'),
      clientsClaim : true,
      skipWaiting  : true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug   : false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names    : ['vendor'],
      filename : '[name].[hash:8].js',
      minChunks: Infinity
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};
