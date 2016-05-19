var path = require('path');

var src = path.resolve(__dirname, '../../src');
var dist = path.resolve(__dirname, '../../dist');

module.exports = {
	htmlSrc: [
		path.resolve(src, 'public/html') + '/**/*.html'
	],
	htmlDist: path.resolve(dist, 'public/html'),
	viewSrc: [
		path.resolve(src, 'views') + '/**/*.pug'
	],
	viewDist: path.resolve(dist, 'views'),
	cssSrc: [
		path.resolve(src, 'public/css') + '/**/*.css'
	],
	cssDist: path.resolve(dist, 'public/css'),
	scssSrc: [
		path.resolve(src, 'scss') + '/**/*.scss'
	],
	scssDist: path.resolve(dist, 'public/css'),
	jsSrc: [
		path.resolve(src, 'public/js') + '/**/*.js'
	],
	jsDist: path.resolve(dist, 'public/js'),
	reactSrc: [
		path.resolve(src, 'components/main.jsx')
	],
	reactDist: path.resolve(dist, 'public/scripts')
};