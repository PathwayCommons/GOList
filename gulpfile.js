var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    livereload = require('gulp-livereload'),
		babel = require("gulp-babel");

gulp.task('javascript', function() {
  // Single entry point to browserify
	gulp.src('src/js/app.js')
		.pipe(browserify({
		  	debug: true
			}))
		.pipe(babel())
		.pipe(gulp.dest('./build/js'))
		.pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('src/js/*.js', ['javascript']);
});

gulp.task('default', ['javascript', 'watch'], function() {});
