var fs          = require('fs')
  , npmPkg      = JSON.parse(fs.readFileSync('./package.json'))
  , gulp 		= require('gulp')
  , gulpStylelint = require('gulp-stylelint');


gulp.task('lint-css', function lintCssTask() {

  return gulp
    .src(npmPkg.paths.styles)
    .pipe(gulpStylelint({
      reporters: [
        {formatter: 'string', console: true}
      ],
      config: {
		  "rules": {
		    "block-no-empty": null,
		    "color-no-invalid-hex": true,
		    "declaration-colon-space-after": "always",
		    "indentation": ["tab", {
		      "except": ["value"]
		    }],
		    "max-empty-lines": 2,
		    "unit-whitelist": ["em", "rem", "%", "s"]
		  }
		}
    }));
});