var gulp = require('gulp');
var runSequence = require('run-sequence');
var builder = require('./tools/builder');
var cleaner = require('./tools/cleaner');
var mover = require('./tools/mover');

gulp.task('default', function(callback) {
	runSequence('clean:all',
		['build:all', 'move:all'],
		['build:watch:all', 'move:watch:all'],
		callback
	);
});