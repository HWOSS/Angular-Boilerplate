var fs          = require('fs')
  , argv        = require('yargs').argv
  , gulp        = require('gulp')
  , gulpif      = require('gulp-if')
  , eslint      = require('gulp-eslint')
  , JSONminify  = require('jsonminify')

  , npmPkg      = JSON.parse(fs.readFileSync('./package.json'))
  , config      = JSON.parse(JSONminify(fs.readFileSync('./tasks/config/eslint.config.json', 'utf8')))
  ;

gulp.task('js-webpack', function() {
  // return gulp.src(npmPkg.paths.scripts.src)
  //   .pipe(eslint(config))
  //   .pipe(eslint.format())
  //   .pipe(eslint.format('unix', function(output) {
  //     fs.writeFileSync('./logs/eslint.log', output);
  //   }));

});