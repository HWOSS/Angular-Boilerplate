
'use strict';

var fs          = require('fs'),
    yargs       = require('yargs'),
    runSequence = require('run-sequence'),
    gulp        = require('gulp'),
    livereload  = require('gulp-livereload'),
    named       = require('vinyl-named'),
    webpack     = require('webpack'),
    wpStream    = require('webpack-stream'),

    npmPkg      = JSON.parse(fs.readFileSync('./package.json', 'utf8'));


require('./clean');
require('./eslint');


gulp.task('webpack', function() {

  var args = yargs.options({
    'e': {
      alias: ['env'],
      describe: 'choose your environment',
      choices: ['dev', 'uat', 'prod'],
      demand: true,
      requiresArg: true
    }
  }).argv;

  switch(args.env) {
    case 'dev':
      runSequence('clean:script', ['eslint', 'webpack:dev']);
      gulp.watch(npmPkg.paths.scripts.src, ['webpack']);
      break;
    case 'uat':
      runSequence(['eslint', 'clean:script'], 'webpack:dev');
      break;
    case 'prod':
      runSequence(['clean:script'], 'webpack:prod');
      break;
    default:
  }

});


gulp.task('webpack:dev', function() {
  return gulp
    .src(npmPkg.paths.scripts.entry)
    .pipe(named())
    .pipe(wpStream({
      stats: {
        colors: true
      }
    }))
    .pipe(gulp.dest(npmPkg.paths.scripts.dist))
    .pipe(livereload());

});


gulp.task('webpack:uat', function() {
  return gulp
    .src(npmPkg.paths.scripts.entry)
    .pipe(named())
    .pipe(wpStream({
      stats: {
        colors: true
      }
    }))
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
