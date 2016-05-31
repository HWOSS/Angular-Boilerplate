
'use strict';

var fs          = require('fs'),
    yargs       = require('yargs'),
    gulp        = require('gulp'),
    stylelint   = require('gulp-stylelint'),

    silent      = require('./args.js').silent,
    silentLog   = require('./reporters/stylelint.silent'),

    npmPkg      = JSON.parse(fs.readFileSync('./package.json')),
    rules       = JSON.parse(fs.readFileSync('./tasks/config/stylelint.config.json'));


gulp.task('stylelint', function() {

  var argv        = yargs.options(silent).argv,
      reporters   = [{formatter: 'verbose', save: 'csslint.log'}];

  if(argv.silent) {
    reporters.push({formatter: silentLog});
  } else {
    reporters.push({formatter: 'verbose', console: true});
  }

  return gulp.src([npmPkg.paths.styles.src, '!./src/less/snippets/**/*.less'])
    .pipe(stylelint({
      config: rules,
      failAfterError: false,
      reportOutputDir: 'tasks/logs',
      reporters: reporters
    }));

});
