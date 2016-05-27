
'use strict';

var gulp        = require('gulp');


require('./tasks/webpack');
require('./tasks/less');
require('./tasks/html');


// gulp -e [dev | uat | prod]
gulp.task('default', ['webpack', 'less', 'html']);
