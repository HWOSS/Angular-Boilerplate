
'use strict';

var fs          = require('fs'),
    gulp        = require('gulp'),
    vinylPaths  = require('vinyl-paths'),
    del         = require('del'),
    npmPkg      = JSON.parse(fs.readFileSync('./package.json', 'utf8'));


gulp.task('clean:style', function() {
  return gulp
    .src(npmPkg.paths.styles.dist, {read: false})
    .pipe(vinylPaths(del));

});


gulp.task('clean:script', function() {
  return gulp
    .src(npmPkg.paths.scripts.dist, {read: false})
    .pipe(vinylPaths(del));

});
