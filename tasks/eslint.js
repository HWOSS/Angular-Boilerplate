var fs        = require('fs')
  , gulp      = require('gulp')
  , eslint    = require('gulp-eslint')

  , npmPkg    = JSON.parse(fs.readFileSync('./package.json'))
  ;

gulp.task('eslint', function() {
  return gulp.src(npmPkg.paths.scripts.src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    ;

});