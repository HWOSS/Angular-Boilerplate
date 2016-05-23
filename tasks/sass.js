var fs          = require('fs'),
    yargs       = require('yargs'),
    gulp        = require('gulp'),
    gif         = require('gulp-if'),
    sass        = require('gulp-sass'),
    sourcemaps  = require('gulp-sourcemaps'),
    cssmin      = require('gulp-cssmin'),
    stylelint   = require('gulp-stylelint'),
    size        = require('gulp-size'),

    npmPkg      = JSON.parse(fs.readFileSync('./package.json')),
    config      = JSON.parse(fs.readFileSync('./tasks/config/stylelint.config.json'));

gulp.task('sass', function() {

  'use strict';

  var args = yargs
    .options({
      'e': {
        alias: ['env'],
        describe: 'choose your environment',
        choices: ['dev', 'prod'],
        demand: true,
        requiresArg: true
      }
    }).argv;

  var ENV_DEV   = args.env === 'dev',
      ENV_PROD  = args.env === 'prod';

  if(ENV_DEV) {
    gulp.watch(npmPkg.paths.styles.src, ['sass']);
  }

  return gulp.src(npmPkg.paths.styles.src)
    .pipe(gif(ENV_DEV, sourcemaps.init()))
    .pipe(stylelint({
      config: config,
      failAfterError: false,
      reportOutputDir: 'logs',
      reporters: [
        {formatter: 'verbose', console: true},
        {formatter: 'verbose', save: 'csslint.log'}
      ]
    }))
    .pipe(sass()
      .on('error', sass.logError))
    /**
     *
     * TODO: PostCSS?
     *
     */
    .pipe(gif(ENV_DEV, sourcemaps.write('./maps')))
    .pipe(gif(ENV_PROD, cssmin()))
    .pipe(gif(ENV_PROD, size()))
    .pipe(gif((ENV_DEV || ENV_PROD), gulp.dest(npmPkg.paths.styles.dist)));

});
