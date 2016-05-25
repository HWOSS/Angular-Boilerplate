
'use strict';

var fs          = require('fs'),
    gulp        = require('gulp'),
    eslint      = require('gulp-eslint'),
    cache       = require('gulp-cached'),
    JSONminify  = require('jsonminify'),

    npmPkg      = JSON.parse(fs.readFileSync('./package.json', 'utf8')),
    config      = JSON.parse(JSONminify(fs.readFileSync('./tasks/config/eslint.config.json', 'utf8')));


gulp.task('eslint', function() {
  return gulp
    .src(npmPkg.paths.scripts.src)
    .pipe(cache('eslint'))
    .pipe(eslint(config))
    .pipe(eslint.format())
    .pipe(eslint.format('unix', function(output) {
      fs.writeFileSync('./tasks/logs/eslint.log', output);
    }));

});
