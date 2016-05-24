var gulp = require('gulp');

require('./tasks/eslint');
require('./tasks/webpack');
require('./tasks/less');

// gulp -e [dev | prod]
gulp.task('default', ['eslint', 'webpack', 'less']);
