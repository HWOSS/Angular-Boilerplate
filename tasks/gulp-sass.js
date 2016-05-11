var fs          = require('fs')
  , gulp 		    = require('gulp')
  , sass        = require('gulp-sass')
  , sourcemaps  = require('gulp-sourcemaps')

  , npmPkg      = JSON.parse(fs.readFileSync('./package.json'))
  ;

gulp.task('sass', function () {
  return gulp.src(npmPkg.paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(npmPkg.paths.styles.dist));
});

gulp.task('sass:watch', function () {
  gulp.watch(npmPkg.paths.styles.src, ['sass']);
});
