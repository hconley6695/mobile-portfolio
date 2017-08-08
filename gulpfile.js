var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	cleanCSS = require('gulp-clean-css'),
	rename = require('gulp-rename');

gulp.task('scripts', function() {

	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('dist/js/'));

	gulp.src('views/js/*.js')
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('dist/views/js/'));
})

gulp.task('styles', function() {
	gulp.src('css/*.css')
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist/css/'));

	gulp.src('views/css/*.css')
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist/views/css/'));

})

gulp. task('watch', function() {

	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('css/*.css', ['styles']);
})


gulp.task('default', ['scripts', 'styles', 'watch']);