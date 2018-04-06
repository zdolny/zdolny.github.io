var gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync').create(),
  autoprefixer = require('gulp-autoprefixer');

gulp.task('build', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});

gulp.task('watch', ['build'], function() {
  browserSync.init({
    server: './'
  });
  gulp.watch('scss/**/*.scss', ['build']);
  gulp.watch('*.html', browserSync.reload);
});

gulp.task('default', function() {
  gulp.start('build');
});