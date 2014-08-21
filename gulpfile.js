var gulp       = require('gulp'),
    react      = require('gulp-react'),
    concat     = require('gulp-concat'),
    browserify = require('gulp-browserify');


gulp.task('browserify', function() {
  gulp.src('./scripts/gadget.js')
    .pipe(browserify({
      transform: ['reactify']
    }))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('default', function() {
  gulp.run('browserify');
});

gulp.task('dev', function() {
  gulp.run('default');

  gulp.watch( './scripts/**/*.js', [ 'browserify']);
  gulp.watch('**/*.styl', ['styl']);
});
