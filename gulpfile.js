var gulp = require('gulp');
var runSequence = require('run-sequence');
var builder = require('./tools/builder');
var cleaner = require('./tools/cleaner');

gulp.task('default', function(callback) {
	runSequence('clean:all',
		['build:watch:all'/*, 'move:all'*/],
		callback
	);
});