var webpack   = require('webpack')
  ;

module.exports = {
  devtool: 'source-map',

  // NOTE: https://webpack.github.io/docs/list-of-plugins.html
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.HotModuleReplacementPlugin(),

    // NOTE: https://github.com/mishoo/UglifyJS2#usage
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['$super', '$', 'exports', 'require']
      }
    })
  ]
  // module : {
  //   loaders : [
  //     {
  //       test : /\.js$/,
  //       include : SRC_DIR,
  //       loader : 'babel',
  //       query: {
  //         presets: ['es2015', 'react']
  //       }
  //     }
  //   ]
  // }
};
