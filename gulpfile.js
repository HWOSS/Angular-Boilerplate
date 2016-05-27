
'use strict';

var gulp        = require('gulp'),
    runSequence = require('run-sequence');


require('./tasks/webpack');
require('./tasks/less');
require('./tasks/html');


// gulp -e [dev | uat | prod]
gulp.task('default', runSequence(['webpack', 'less', 'html']));
