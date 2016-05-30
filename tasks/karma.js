
'use strict';

var gulp      = require('gulp'),
    KServer   = require('karma').Server;


gulp.task('karma', function(done) {
  return new KServer({
    configFile: __dirname + '/config/karma.config.js',
    singleRun: true
  }, function() {
    done();
  }).start();

});
