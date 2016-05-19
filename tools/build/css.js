var gulp = require('gulp');
// var cssmin = require('gulp-cssmin'); //check this
var paths = require('./paths');

gulp.task('build:css', function() {
	return gulp.src(paths.cssSrc)
		.pipe(gulp.dest(paths.cssDist));
});

gulp.task('build:watch:css', function() {
	gulp.watch(paths.cssSrc, ['build:css']);
});