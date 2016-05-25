
'use strict';

var fs          = require('fs'),
    yargs       = require('yargs'),
    runSequence = require('run-sequence'),
    gulp        = require('gulp'),
    livereload  = require('gulp-livereload'),
    named       = require('vinyl-named'),
    webpack     = require('webpack-stream'),

    npmPkg      = JSON.parse(fs.readFileSync('./package.json', 'utf8')),
    wpDev       = require('./config/webpack.dev.config.js'),
    wpProd      = require('./config/webpack.prod.config.js');


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
      runSequence(['eslint', 'clean:script'], 'webpack:prod');
      break;
    default:
  }

});


gulp.task('webpack:dev', function() {
  return gulp
    .src(npmPkg.paths.scripts.entry)
    .pipe(named())
    .pipe(webpack(wpDev))
    .pipe(gulp.dest(npmPkg.paths.scripts.dist))
    .pipe(livereload());

});


gulp.task('webpack:uat', function() {
  return gulp
    .src(npmPkg.paths.scripts.entry)
    .pipe(named())
    .pipe(webpack(wpDev))
    .pipe(gulp.dest(npmPkg.paths.scripts.dist));

});


gulp.task('webpack:prod', function() {
  return gulp
    .src(npmPkg.paths.scripts.entry)
    .pipe(named())
    .pipe(webpack(wpProd))
    .pipe(gulp.dest(npmPkg.paths.scripts.dist));

});
