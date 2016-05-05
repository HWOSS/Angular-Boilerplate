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
		  "plugins": [
		    "stylelint-declaration-use-variable",
		    "stylelint-statement-max-nesting-depth"
		  ],
		  "rules": {
		    "block-no-empty": null,
		    "color-no-invalid-hex": true,
		    "declaration-colon-space-after": "always",
		    "declaration-colon-space-before": "never",
		    "declaration-use-variable": "color",
		    "function-comma-space-after": "always",
		    "function-url-quotes": "double",
		    "media-feature-name-no-vendor-prefix": true,
		    "property-no-vendor-prefix": true,
		    "value-no-vendor-prefix": true,
		    "statement-max-nesting-depth": [3, { countAtRules: false }],
		    "indentation": ["tab", {
		      "except": ["value"]
		    }],
		    "max-empty-lines": 2,
		    "unit-whitelist": ["em", "rem", "%", "s", "px"],
		  }
		}
    }));
});