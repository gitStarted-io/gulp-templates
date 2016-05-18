var gulp = require('gulp');
var requireDir = require('require-dir');

requireDir('build');

gulp.task('build:all', ['build:html', 'build:views'/*, 'build:css', 'build:js'*/]);

gulp.task('build:watch:all', ['build:watch:html', 'build:watch:views'/*, 'build:css', 'build:js'*/]);
