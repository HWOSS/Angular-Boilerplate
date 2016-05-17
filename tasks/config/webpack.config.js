// var webpack   = require('webpack')
//   , path      = require('path')
//
//   , SRC_DIR   = path.resolve(__dirname, 'src')
//   , BUILD_DIR = path.resolve(__dirname, 'dist')
//
//   ;
//
// module.exports = {
//   entry: SRC_DIR + '/main.js',
//   devtool: 'source-map',
//   output: {
//     path: BUILD_DIR,
//     publicPath: '/dist/',
//     filename: 'index.js'
//   },
//   devServer: {
//     inline: true,
//     port: 3333
//   },
//   module : {
//     loaders : [
//       {
//         test : /\.js$/,
//         include : SRC_DIR,
//         loader : 'babel',
//         query: {
//           presets: ['es2015', 'react']
//         }
//       }
//     ]
//   }
// };