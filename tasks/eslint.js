
'use strict';

var fs          = require('fs'),
    yargs       = require('yargs'),
    chalk       = require('chalk'),
    gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    gif         = require('gulp-if'),
    eslint      = require('gulp-eslint'),
    cache       = require('gulp-cached'),
    JSONminify  = require('jsonminify'),

    silent      = require('./args.js').silent,
    silentLog   = require('./reporters/eslint.silent.js'),
    verboseLog  = require('./reporters/eslint.verbose.js'),

    npmPkg      = JSON.parse(fs.readFileSync('./package.json', 'utf8')),
    config      = JSON.parse(JSONminify(fs.readFileSync('./tasks/config/eslint.config.json', 'utf8')));


gulp.task('eslint', function() {

  var argv = yargs.options(silent).argv;

  return gulp
    .src(npmPkg.paths.scripts.src)
    .pipe(cache('eslint'))
    .pipe(eslint(config))
    .pipe(gif(argv.silent,
      eslint.format(silentLog),
      eslint.format()))
    .pipe(eslint.results(function(results) {
      if(!results.warningCount && !results.errorCount) {
        gutil.log(chalk.black.bold('eslint: ') + chalk.green('Your code is clean!'));
      }
    }))
    .pipe(eslint.format(verboseLog, function(output) {
      fs.writeFileSync('./tasks/logs/eslint.log', output);
    }));

});
