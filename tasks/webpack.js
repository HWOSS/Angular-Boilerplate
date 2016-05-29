
'use strict';

var fs          = require('fs'),
    gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    livereload  = require('gulp-livereload'),
    named       = require('vinyl-named'),
    webpack     = require('webpack'),
    wpStream    = require('webpack-stream'),

    npmPkg      = JSON.parse(fs.readFileSync('./package.json', 'utf8')),
    webpackDev  = require(npmPkg.paths.webpack.dev);


gulp.task('webpack:dev', function() {
  return gulp
    .src(npmPkg.paths.scripts.entry)
    .pipe(named())
    .pipe(wpStream(webpackDev)
      .on('error', function(err) {
        gutil.log('WEBPACK ERROR', err);
      }))
    .pipe(gulp.dest(npmPkg.paths.scripts.dist))
    .pipe(livereload());

});


gulp.task('webpack:uat', function() {
  return gulp
    .src(npmPkg.paths.scripts.entry)
    .pipe(named())
    .pipe(wpStream(webpackDev))
    .pipe(gulp.dest(npmPkg.paths.scripts.dist));

});


gulp.task('webpack:prod', function() {
  return gulp
    .src(npmPkg.paths.scripts.entry)
    .pipe(named())
    .pipe(wpStream({
      stats: {
        colors: true
      },
      // NOTE: https://webpack.github.io/docs/list-of-plugins.html
      plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        // NOTE: https://github.com/mishoo/UglifyJS2#usage
        new webpack.optimize.UglifyJsPlugin({
          mangle: {
            except: ['$super', '$', 'exports', 'require']
          }
        })
      ]
    }))
    .pipe(gulp.dest(npmPkg.paths.scripts.dist));

});
