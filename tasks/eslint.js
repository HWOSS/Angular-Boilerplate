var fs          = require('fs')
  , gulp        = require('gulp')
  , eslint      = require('gulp-eslint')
  , JSONminify  = require('jsonminify')

  , npmPkg      = JSON.parse(fs.readFileSync('./package.json'))
  , config      = JSON.parse(JSONminify(fs.readFileSync('./tasks/config/eslint.config.json', 'utf8')))
  ;

gulp.task('eslint', function() {
  return gulp
    .src(npmPkg.paths.scripts.src)
    .pipe(eslint(config))
    .pipe(eslint.format())
    .pipe(eslint.format('unix', function(output) {
      fs.writeFileSync('./logs/eslint.log', output);
    }));

});