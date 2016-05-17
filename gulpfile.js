var gulp = require('gulp');

require('./tasks/js-webpack');
require('./tasks/sass');
require('./tasks/webpack-dev-server');

gulp.task('default', ['eslint', 'sass']);

gulp.task('server', ['webpack-dev-server']);
