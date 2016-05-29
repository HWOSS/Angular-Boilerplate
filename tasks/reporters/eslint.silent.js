
'use strict';

var chalk = require('chalk'),
    gutil = require('gulp-util');


module.exports = function(results) {

  if(results.warningCount && results.errorCount) {
    gutil.log(chalk.black.bold('eslint: ') +
      chalk.red('TODO: ADD SILENT ESLINT OUTPUT!'));
  }

};
