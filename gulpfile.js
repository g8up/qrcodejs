var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('script', function () {
	gulp.src('qrcode.js')
		.pipe(uglify())
		.pipe(rename({
			extname: '.min.js'
		}))
		.pipe(gulp.dest('build'));
});

gulp.task('watch', function () {
	gulp.watch('qrcode.js', ['script']);
});

gulp.task('default', ['script']);