
'use strict';

// var fs          = require('fs'),
//     npmPkg      = JSON.parse(fs.readFileSync('./package.json'));


module.exports = function(config) {

  var files = [
    // '../../node_modules/angular/angular.js',
    // '../../src-angular/app/config/bootstrap.js'
    '../../dist/scripts/bootstrap.js'
    // '../../test/**.*_test.js'
  ];

  // Object.keys(npmPkg.dependencies).forEach(function(dependency) {
    // files.push(require.resolve(dependency));
  // });

  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: files,
    preprocessors: {
      // '../../**/!(jasmine).js': ['webpack']
    },
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher'
      // 'karma-webpack'
    ]
    // webpackMiddleware: {
    //   noInfo: true
    // }
  });

};
