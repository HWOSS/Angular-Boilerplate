
'use strict';

var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    runSequence = require('run-sequence');


require('./tasks/webpack');
require('./tasks/stylelint');
require('./tasks/eslint');
require('./tasks/less');
require('./tasks/html');


gulp.task('dev', [], function() {
  runSequence('clean', ['eslint', 'stylelint', 'webpack:dev', 'less:dev', 'html:dev']);
});

gulp.task('uat', [], function() {
  runSequence('clean', ['eslint', 'stylelint', 'webpack:dev', 'less:dev', 'html:dev']);
});

gulp.task('prod', [], function() {
  runSequence('clean', ['eslint', 'stylelint', 'webpack:prod', 'less:prod', 'html:prod']);
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
