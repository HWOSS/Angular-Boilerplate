
'use strict';

var fs          = require('fs'),
    gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    sourcemaps  = require('gulp-sourcemaps'),
    cssmin      = require('gulp-cssmin'),
    size        = require('gulp-size'),

    npmPkg      = JSON.parse(fs.readFileSync('./package.json'));


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
