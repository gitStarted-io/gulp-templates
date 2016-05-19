var gulp = require('gulp');
var sass = require('gulp-sass');
var paths = require('./paths');

gulp.task('build:scss', function() {
	return gulp.src(paths.scssSrc)
		.pipe(sass())
		.pipe(gulp.dest(paths.scssDist));
});

gulp.task('build:watch:scss', function() {
	gulp.watch(paths.scssSrc, ['build:scss']);
});