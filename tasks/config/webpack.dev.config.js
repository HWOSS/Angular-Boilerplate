
'use strict';

var fs        = require('fs'),
    webpack   = require('webpack'),
    npmPkg    = JSON.parse(fs.readFileSync('./package.json', 'utf8'));


/**
 *
 * TODO: Get Webpack dev server working as expected
 *
 *
 */

module.exports = {
  context: npmPkg.paths.context,
  entry: npmPkg.paths.entry.script,
  output: {
    publicPath: '/dist/',
    path: '/dist/',
    filename: 'bootstrap.js'
  },
  devServer: {
    inline: true,
    hot: true,
    port: 8080
  },
  devtool: 'source-map',
  debug: true,
  stats: {
    colors: true
  },
  // NOTE: https://webpack.github.io/docs/list-of-plugins.html
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
  // module: {
  //   loaders: [
  //     {
  //       test: /\.html$/,
  //       loader: 'file?name=[name].[ext]'
  //     }
      // {
      //   test: /\.js$/,
      //   include: npmPkg.paths.scripts.src,
      //   loader: 'babel',
      //   query: {
      //     presets: ['es2015', 'react']
      //   }
      // }
    // ]
  // }
};
