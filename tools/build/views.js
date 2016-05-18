var gulp = require('gulp');
var paths = require('./paths.js');

gulp.task('build:views', function() {
	return gulp.src(paths.viewSrc)
		.pipe(gulp.dest(paths.viewDist));
});

gulp.task('build:watch:views', function() {
	gulp.watch(paths.viewSrc, ['build:views']);
});