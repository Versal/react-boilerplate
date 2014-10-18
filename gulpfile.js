var gulp       = require('gulp'),
    react      = require('gulp-react'),
    concat     = require('gulp-concat'),
    stylus     = require('gulp-stylus'),
    nib        = require('nib'),
    browserify = require('gulp-browserify');


gulp.task('browserify', function() {
  gulp.src('./scripts/gadget.js')
    .pipe(browserify({
      transform: ['reactify']
    }))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('styl', function() {
  gulp.src('./css/gadget.styl')
    .pipe(stylus({use: [nib()]}))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./'));
});

gulp.task('default', function() {
  gulp.run('browserify', 'styl');
});

gulp.task('dev', function() {
  gulp.run('default');
  gulp.watch( './scripts/**/*.js', [ 'browserify']);
  gulp.watch('**/*.styl', ['styl']);
});
