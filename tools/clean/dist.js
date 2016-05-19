var gulp = require('gulp');
var del = require('del');
var paths = require('./paths');

gulp.task('clean:dist', function() {
	console.log(paths.dist);
	return del.sync(paths.dist);
});