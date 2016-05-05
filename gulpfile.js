var fs          = require('fs')
  , npmPkg      = JSON.parse(fs.readFileSync('./package.json'))
  , dir         = require('require-dir')
  , gulp 				= require('gulp')

  , tasks       = dir('./tasks')
  ;


gulp.task('default', ['js-code-style'], function() {

});

gulp.task('watch', ['default'], function() {
  var watchFiles = [
    npmPkg.paths.scripts
  ];

  gulp.watch(watchFiles, ['default']);
});