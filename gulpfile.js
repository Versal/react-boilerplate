var gulp       = require('gulp'),
    coffee     = require('gulp-coffee'),
    react      = require('gulp-react'),
    browserify = require('gulp-browserify'),
    gutil      = require('gulp-util'),

    concat     = require('gulp-concat'),
    uglify     = require('gulp-uglify');

    mocha      = require('gulp-mocha'),

    stylus     = require('gulp-stylus'),
    nib        = require('nib'),

// Take all coffee react files and coffee-reactify them into the js-build directory,
//   keeping directory structure for the browserify build step
gulp.task('coffee-reactify', function() {
  gulp.src('./scripts/views/*.coffee')
      .pipe(coffee({bare:true, header: false}).on('error', gutil.log))
      .pipe(react())
      .pipe(gulp.dest('./js-build/views'));

  gulp.src('./scripts/util/*.coffee')
      .pipe(coffee({bare:true, header: false}).on('error', gutil.log))
      .pipe(react())
      .pipe(gulp.dest('./js-build/util'));

  gulp.src('./scripts/models/*.coffee')
      .pipe(coffee({bare:true, header: false}).on('error', gutil.log))
      .pipe(react())
      .pipe(gulp.dest('./js-build/models'));

  gulp.src('./scripts/*.coffee')
      .pipe(coffee({bare:true, header: false}).on('error', gutil.log))
      .pipe(react())
      .pipe(gulp.dest('./js-build/'));
});

gulp.task('browserify', ['coffee-reactify'], function() {
  gulp.src('./js-build/gadget.js')
      .pipe(browserify({
        debug: false
      }).on('error', gutil.log))
      .pipe(concat('index.js'))
      .pipe(gulp.dest('./'));
});

gulp.task('styl', function() {
  gulp.src('./stylus/gadget.styl')
      .pipe(stylus({use: [nib()]}))
      .pipe(concat('bundle.css'))
      .pipe(gulp.dest('./'))
});

gulp.task('test', function() {
  gulp.src(['./scripts/models/app_model.coffee', './scripts/models/learner_model.coffee'])
      .pipe(coffee({bare:true, header:false}))
      .pipe(gulp.dest('./scripts/models'));
  gulp.src('./test/*.js')
      .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('browserify-min', function() {
  gulp.src('./js-build/gadget.js')
      .pipe(browserify({debug: false}).on('error', gutil.log))
      .pipe(uglify())
      .pipe(concat('index.js'))
      .pipe(gulp.dest('./'));
});

gulp.task('min', ['coffee-reactify', 'browserify-min', 'styl']);

gulp.task('default', function() {
  gulp.run('coffee-reactify', 'browserify', 'styl');
});

gulp.task('dev', function() {
  gulp.run('default');

  gulp.watch( './scripts/**/*.coffee', ['coffee-reactify', 'browserify']);
  gulp.watch('**/*.styl', ['styl']);

});
