var fs          = require('fs')
  , gulp 				= require('gulp')

  , npmPkg      = JSON.parse(fs.readFileSync('./package.json'))
  ;

/**
 *
 * Tasks required for the project
 *
 */
require('./tasks/eslint');
require('./tasks/gulp-sass');
require('./tasks/webpack-dev-server');


/**
 *
 * Development tasks
 * Run when changes are detected
 *
 */
gulp.task('watch-js', ['eslint']);

gulp.task('dev', ['watch-js', 'sass'], function() {
  var jsSrc     = [npmPkg.paths.scripts.src]
    , styleSrc  = [npmPkg.paths.styles.src]
    ;

  gulp.watch(jsSrc, ['watch-js']);
  gulp.watch(styleSrc, ['sass'])
});


/**
 *
 * Production tasks
 *
 */
gulp.task('prod', []);


/**
 * webpack:prod
 * webpack-dev-server
 * eslint
 *
 * less:dev/prod
 * sass:dev/prod
 *
 */
