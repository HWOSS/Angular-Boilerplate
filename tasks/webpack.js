var fs          = require('fs')
  , yargs       = require('yargs')
  , gulp        = require('gulp')
  , named       = require('vinyl-named')
  , webpack     = require('webpack-stream')

  , npmPkg      = JSON.parse(fs.readFileSync('./package.json', 'utf8'))
  , config      = require('./config/webpack.config.js')
  ;

gulp.task('webpack', function() {

  var args = yargs
      .options({
        'e': {
          alias: ['env'],
          describe: 'choose your environment',
          choices: ['dev', 'prod'],
          demand: true,
          requiresArg: true
        }
      }).argv

    , ENV_DEV     = args.env === 'dev'
    , ENV_PROD    = args.env === 'prod'
    ;
  
  if(ENV_DEV) {
    // var compiler = webpack();
    //
    // new WebpackDS(compiler, {
    //   // server and middleware options
    // }).listen(8080, "localhost", function(err) {
    //   if(err) throw new gutil.PluginError("webpack-dev-server", err);
    //     // Server listening
    //   gutil.log("[webpack-dev-server]", "http://localhost:8080");
    //
    //     // keep the server alive or continue?
    //     // callback();
    //     //
    // });
  }
  
  if(ENV_PROD) {
    return gulp.src(npmPkg.paths.scripts.entry)
      .pipe(named())
      .pipe(webpack(config))
      .pipe(gulp.dest(npmPkg.paths.scripts.dist))
      ;
  }
  
});