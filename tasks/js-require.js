//
// var gulp          = require('gulp')
//   , argv          = require('yargs').argv
//   , _if           = require('gulp-if')
//   , amdOptimize   = require('amd-optimize')
//   , concat        = require('gulp-concat')
//   , uglify        = require('gulp-uglify')
//   , size          = require('gulp-size')
//   ;
//
// // gulp bundle -e 'src/app/config/main' -m 'app' -d 'dist/app'
// // gulp bundle -e 'src/component/config/main' -m 'component' -d 'dist/component'
//
// gulp.task('bundle', function() {
//
//   var opts = {
//     entry:  argv.e || argv.entry  || 'src/app/config/main',
//     module: argv.m || argv.module || 'app',
//     dist:   argv.d || argv.dist   || 'dist/app',
//     ugly:   argv.u || argv.ugly   || false
//   };
//
//   var config = {
//     name: opts.module,
//     baseUrl: './',
//     paths: {
//       angular:    'node_modules/angular/angular.min',
//       uiRouter:   'node_modules/angular-ui-router/release/angular-ui-router.min',
//       ngAnimate:  'node_modules/angular-animate/angular-animate.min',
//       ngMessages: 'node_modules/angular-messages/angular-messages.min',
//       ngTouch:    'node_modules/angular-touch/angular-touch.min',
//
//       context: opts.module
//     },
//     shim: {
//       'angular':    { 'exports': 'angular'},
//       'uiRouter':   ['angular'],
//       'ngAnimate':  ['angular'],
//       'ngMessages': ['angular'],
//       'ngTouch':    ['angular']
//     },
//     priority: ['angular'],
//     deps:     []
//   };
//
//   return gulp.src('src/**/*.js')
//     .pipe(amdOptimize(opts.entry, config))
//     .pipe(concat('bundle.js'))
//     .pipe(_if(opts.ugly ,uglify()))
//     .pipe(size())
//     .pipe(gulp.dest(opts.dist));
//
// });