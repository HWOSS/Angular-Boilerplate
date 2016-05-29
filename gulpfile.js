
'use strict';

var gulp        = require('gulp'),
    runSequence = require('run-sequence');


require('./tasks/webpack');
require('./tasks/less');
require('./tasks/html');


// gulp [dev | uat | prod] [-s | --silent]

gulp.task('dev', [], function() {
  runSequence('clean', ['eslint', 'stylelint', 'webpack:dev', 'less:dev', 'html:dev']);
});

gulp.task('uat', [], function() {
  runSequence('clean', ['eslint', 'stylelint', 'webpack:dev', 'less:dev', 'html:dev']);
});

gulp.task('prod', [], function() {
  runSequence('clean', ['eslint', 'stylelint', 'webpack:prod', 'less:prod', 'html:prod']);
});
