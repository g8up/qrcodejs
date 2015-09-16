var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var header = require('gulp-header');

var pkg = require('./package.json');
var banner = ['/**', ' * <%= pkg.name %> - <%= pkg.description %>', ' * @version v<%= pkg.version %>', ' * @author <%= pkg.author %>', ' * @link <%= pkg.homepage %>', ' */', ''].join('\n');

gulp.task('script', function () {
	gulp.src('qrcode.js')
		.pipe(uglify())
		.pipe(header(banner, {
			pkg: pkg
		}))
		.pipe(rename({
			extname: '.min.js'
		}))
		.pipe(gulp.dest('build'));
});

gulp.task('watch', function () {
	gulp.watch('qrcode.js', ['script']);
});

gulp.task('default', ['script']);