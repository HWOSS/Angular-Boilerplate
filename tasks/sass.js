
'use strict';

var fs          = require('fs'),
    yargs       = require('yargs'),
    runSequence = require('run-sequence'),
    gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    sourcemaps  = require('gulp-sourcemaps'),
    cssmin      = require('gulp-cssmin'),
    size        = require('gulp-size'),

    npmPkg      = JSON.parse(fs.readFileSync('./package.json'));


require('./clean');
require('./stylelint');


gulp.task('sass', function() {

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
      runSequence(['stylelint', 'clean:style'], 'sass:dev');
      gulp.watch(npmPkg.paths.styles.src, ['sass']);
      break;
    case 'uat':
      runSequence(['stylelint', 'clean:style'], 'sass:dev');
      break;
    case 'prod':
      runSequence(['stylelint', 'clean:style'], 'sass:prod');
      break;
    default:
  }

});


gulp.task('sass:dev', function() {
  return gulp
    .src(npmPkg.paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass()
      .on('error', sass.logError))
    // TODO: PostCSS
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(npmPkg.paths.styles.dist));

});


gulp.task('sass:prod', function() {
  return gulp
    .src(npmPkg.paths.styles.src)
    .pipe(sass()
      .on('error', sass.logError))
    // TODO: PostCSS
    .pipe(cssmin())
    .pipe(size())
    .pipe(gulp.dest(npmPkg.paths.styles.dist));

});
