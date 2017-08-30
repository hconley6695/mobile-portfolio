var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	cleanCSS = require('gulp-clean-css'),
	htmlmin = require('gulp-htmlmin'),
	imagemin = require('gulp-imagemin'),
	ghPages = require('gulp-gh-pages');



gulp.task('scripts', function() {

	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js/'));

	gulp.src('views/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/views/js/'));
});

gulp.task('styles', function() {
	gulp.src('css/*.css')
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist/css/'));

	gulp.src('views/css/*.css')
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist/views/css/'));

});

gulp.task('minify-html', function() {
    gulp.src('*.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('dist'));

    gulp.src('views/*.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('dist/views/'));
});


gulp.task('minify-images', function () {
	gulp.src('img/*.png')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'));

	gulp.src('img/*.jpg')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'));

    gulp.src('views/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/views/images'));
});

gulp. task('watch', function() {

	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('css/*.css', ['styles']);
});

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});


gulp.task('default', ['scripts', 'styles', 'minify-images', 'minify-html', 'watch']);