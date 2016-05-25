
'use strict';

var fs          = require('fs'),
    gulp        = require('gulp'),
    stylelint   = require('gulp-stylelint'),

    npmPkg      = JSON.parse(fs.readFileSync('./package.json')),
    rules       = JSON.parse(fs.readFileSync('./tasks/config/stylelint.config.json'));


gulp.task('stylelint', function() {
  // TODO: Handle differently depending on environment var?
  return gulp.src(npmPkg.paths.styles.src)
    .pipe(stylelint({
      config: rules,
      failAfterError: false,
      reportOutputDir: 'logs',
      reporters: [
        {formatter: 'verbose', console: true},
        {formatter: 'verbose', save: 'csslint.log'}
      ]
    }));

});
