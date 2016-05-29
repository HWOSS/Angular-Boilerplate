
'use strict';

var fs          = require('fs'),
    yargs       = require('yargs'),
    runSequence = require('run-sequence'),
    gulp        = require('gulp'),
    livereload  = require('gulp-livereload'),

    env         = require('./args.js').env,
    npmPkg      = JSON.parse(fs.readFileSync('./package.json', 'utf8'));


require('./clean');
require('./eslint');


gulp.task('html:dev', function() {
  return gulp
    .src(npmPkg.paths.markup.src)
    .pipe(gulp.dest(npmPkg.paths.markup.dist))
    .pipe(livereload());

});
