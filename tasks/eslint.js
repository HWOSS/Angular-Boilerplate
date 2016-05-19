var fs          = require('fs')
  , yargs       = require('yargs')
  , gulp        = require('gulp')
  , eslint      = require('gulp-eslint')
  , JSONminify  = require('jsonminify')

  , npmPkg      = JSON.parse(fs.readFileSync('./package.json', 'utf8'))
  , config      = JSON.parse(JSONminify(fs.readFileSync('./tasks/config/eslint.config.json', 'utf8')))
  ;

gulp.task('eslint', function() {

  var args = yargs
      .options({
        'e': {
          alias: ['env'],
          describe: 'choose your environment',
          choices: ['dev', 'prod'],
          requiresArg: true
        }
      }).argv

    , ENV_DEV     = args.env === 'dev'
    ;

  if(ENV_DEV)
    gulp.watch(npmPkg.paths.styles.src, ['eslint']);
  
  return gulp.src(npmPkg.paths.scripts.src)
    .pipe(eslint(config))
    .pipe(eslint.format())
    .pipe(eslint.format('unix', function(output) {
      fs.writeFileSync('./logs/eslint.log', output);
    }));

});