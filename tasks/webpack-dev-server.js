var fs          = require('fs')
  , webpack     = require('webpack')
  , WebpackDS   = require('webpack-dev-server')
  , gulp 		    = require('gulp')
  , gutil       = require('gulp-util')

  , npmPkg      = JSON.parse(fs.readFileSync('./package.json'))
  ;

gulp.task("webpack-dev-server", function() {

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
});