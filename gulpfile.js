
'use strict';

var fs          = require('fs'),
    gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    runSequence = require('run-sequence'),

    npmPkg      = JSON.parse(fs.readFileSync('./package.json', 'utf8'));


require('./tasks/webpack');
require('./tasks/stylelint');
require('./tasks/eslint');
require('./tasks/less');
require('./tasks/html');
require('./tasks/karma');


gulp.task('dev', [], function() {
  runSequence('clean', ['eslint', 'stylelint', 'webpack:dev', 'less:dev', 'html:dev'], 'karma');

  gulp.watch(npmPkg.paths.scripts.src, function() {
    runSequence(['eslint', 'webpack:dev'], 'karma');
  });

  gulp.watch(npmPkg.paths.styles.src, function() {
    runSequence(['stylelint', 'less:dev']);
  });

  gulp.watch(npmPkg.paths.markup.src, function() {
    runSequence('html:dev');
  });
});

gulp.task('uat', [], function() {
  runSequence('clean', ['eslint', 'stylelint', 'webpack:dev', 'less:dev', 'html:dev'], 'karma');
});

gulp.task('prod', [], function() {
  runSequence('clean', ['eslint', 'stylelint', 'webpack:prod', 'less:prod', 'html:prod'], 'karma');
});


gulp.task('default', [], function() {
  var tasks = Object.keys(gulp.tasks).sort();

  gutil.log(gutil.colors.yellow('The following tasks are available:'));

  tasks.forEach(function(t) {
    if(t === 'default') {
      return;
    }
    gutil.log(gutil.colors.yellow('• gulp ' + t));
  });

  /**
   *
   * TODO: Add log of available flags - preferably mapping through `./tasks/args.js`
   *
   */
});
