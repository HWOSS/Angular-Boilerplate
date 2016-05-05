var fs          = require('fs')
  , npmPkg      = JSON.parse(fs.readFileSync('./package.json'))
  , gulp 				= require('gulp')

  , jscs        = require('gulp-jscs')
  ;

gulp.task('js-code-style', function() {
  return gulp.src(npmPkg.paths.scripts)
    .pipe(jscs())
    .pipe(jscs.reporter());
});