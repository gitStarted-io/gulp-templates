var gulp = require('gulp');
var requireDir = require('require-dir');

requireDir('clean');

gulp.task('clean:all', ['clean:dist']);