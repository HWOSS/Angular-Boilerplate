
'use strict';

var gulp        = require('gulp'),
    runSequence = require('run-sequence');

require('./tasks/eslint');
require('./tasks/webpack');
require('./tasks/sass');

// gulp -e [dev | uat | prod]
gulp.task('default', runSequence(['eslint', 'webpack', 'sass']));
