
'use strict';

var fs          = require('fs'),
    yargs       = require('yargs'),
    runSequence = require('run-sequence'),
    gulp        = require('gulp'),
    less        = require('gulp-less'),
    sourcemaps  = require('gulp-sourcemaps'),
    cssmin      = require('gulp-cssmin'),
    size        = require('gulp-size'),

    npmPkg      = JSON.parse(fs.readFileSync('./package.json'));


require('./tasks/clean');
require('./tasks/stylelint');


gulp.task('less', function() {

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
      runSequence(['stylelint', 'clean:style'], 'less:dev');
      gulp.watch(npmPkg.paths.styles.src, ['sass']);
      break;
    case 'uat':
      runSequence(['stylelint', 'clean:style'], 'less:dev');
      break;
    case 'prod':
      runSequence(['stylelint', 'clean:style'], 'less:prod');
      break;
    default:
  }

});


gulp.task('less:dev', function() {
  return gulp
    .src(npmPkg.paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(less({
      // TODO: Config
    }))
    // TODO: Any other tasks?
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(npmPkg.paths.styles.dist));

});


gulp.task('less:prod', function() {
  return gulp
    .src(npmPkg.paths.styles.src)
    .pipe(less({
      // TODO: Config
    }))
    // TODO: Any other tasks?
    .pipe(cssmin())
    .pipe(size())
    .pipe(gulp.dest(npmPkg.paths.styles.dist));

});
