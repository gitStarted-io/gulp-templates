var gulp = require('gulp');
var uglify = require('gulp-uglify');
var paths = require('./paths');

gulp.task('build:js', function() {
	return gulp.src(paths.jsSrc)
		.pipe(uglify())
		.pipe(gulp.dest(paths.jsDist));
});

gulp.task('build:watch:js', function() {
	gulp.watch(paths.jsSrc, ['build:js']);
});