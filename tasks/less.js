
'use strict';

var fs          = require('fs'),
    gulp        = require('gulp'),
    less        = require('gulp-less'),
    sourcemaps  = require('gulp-sourcemaps'),
    cssmin      = require('gulp-cssmin'),
    size        = require('gulp-size'),

    npmPkg      = JSON.parse(fs.readFileSync('./package.json'));


gulp.task('less:dev', function() {
  return gulp
    .src(npmPkg.paths.styles.default)
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
    .src(npmPkg.paths.styles.default)
    .pipe(less({
      // TODO: Config
    }))
    // TODO: Any other tasks?
    .pipe(cssmin())
    .pipe(size())
    .pipe(gulp.dest(npmPkg.paths.styles.dist));

});
