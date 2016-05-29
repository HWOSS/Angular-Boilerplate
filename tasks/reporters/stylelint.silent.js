
'use strict';

var chalk = require('chalk'),
    gutil = require('gulp-util');


module.exports = function(errors) {

  var files                   = 0,
      warnings                = 0,
      deprecations            = 0,
      invalidOptionWarnings   = 0;

  errors.forEach(function(err) {
    if(err.errored) {
      files++;
      warnings += err.warnings.length;
      deprecations += err.deprecations.length;
      invalidOptionWarnings += err.invalidOptionWarnings.length;
    }
  });

  if(files) {
    gutil.log(chalk.black.bold('Stylelint: ') +
      chalk.red(files + ' files contain issues; ') +
      chalk.black('a total of ') +
      chalk.red(warnings + ' warnings; ') +
      chalk.yellow(deprecations + ' deprecations; ') +
      chalk.grey(invalidOptionWarnings + ' invalid option warnings.'));
  } else {
    gutil.log(chalk.black.bold('Stylelint: ') +
      chalk.green('Your code is clean!'));
  }

};
