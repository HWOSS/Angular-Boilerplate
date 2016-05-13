var fs          = require('fs')
  , gulp 		    = require('gulp')
  , stylelint   = require('gulp-stylelint')

  , npmPkg      = JSON.parse(fs.readFileSync('./package.json'))
  , config      = JSON.parse(fs.readFileSync('./tasks/config/stylelint.config.json'))
  ;

gulp.task('lint-css', function() {

  return gulp
    .src(npmPkg.paths.styles.src)
    .pipe(stylelint({
      config: config,
      failAfterError: false,
      reportOutputDir: 'logs',
      reporters: [
        {formatter: 'verbose', console: true},
        {formatter: 'verbose', save: 'csslint.log'}
      ]
    }));
});