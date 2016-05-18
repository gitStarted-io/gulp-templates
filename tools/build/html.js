var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var paths = require('./paths.js');

// Paths
gulp.task('build:html', function() {
	return gulp.src(paths.htmlSrc)
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest(paths.htmlDist));
});

gulp.task('build:watch:html', function() {
	gulp.watch(paths.htmlSrc, ['build:html']);
});