
'use strict';

var fs          = require('fs'),
    yargs       = require('yargs'),
    runSequence = require('run-sequence'),
    gulp        = require('gulp'),
    livereload  = require('gulp-livereload'),

    npmPkg      = JSON.parse(fs.readFileSync('./package.json', 'utf8'));


require('./clean');
require('./eslint');


gulp.task('html', function() {

  var args = yargs.options({
    'e': {
      alias: ['env'],
      describe: 'choose your environment',
      choices: ['dev', 'uat', 'prod'],
      demand: true,
      requiresArg: true
    }
  }).argv;

  switch(args.env) {
    case 'dev':
      runSequence('clean:html', 'html:dev');
      gulp.watch(npmPkg.paths.markup.src, ['html']);
      break;
    case 'uat':
      runSequence('clean:html', 'html:dev');
      break;
    case 'prod':
      runSequence('clean:html', 'html:dev');
      break;
    default:
  }

});


gulp.task('html:dev', function() {
  return gulp
    .src(npmPkg.paths.markup.src)
    .pipe(gulp.dest(npmPkg.paths.markup.dist))
    .pipe(livereload());

});
