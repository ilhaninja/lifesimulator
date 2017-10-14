var browserify, concat, connect, filter, gulp, plumber, logger, clean;

gulp = require('gulp');
clean = require('gulp-clean');
plumber = require('gulp-plumber');
filter = require('gulp-filter');
logger = require('gulp-logger');
concat = require('gulp-concat');
connect = require('gulp-connect');
browserify = require('gulp-browserify');

gulp.task('clean', function() {
  gulp
    .src(['./game.js', './phaser.js'], {read: false})
    .pipe(clean());
});

gulp.task('build', function() {
  gulp
    .src('./game/**/*.js')
    .pipe(plumber())
    .pipe(logger({showChange: true, colors: true}))
    .pipe(browserify({
      insertGlobals: true,
      debug: !gulp.env.production
    }))
    .on('error', function(error) {
      console.log(error.toString());
      this.emit('end');
    })
    .pipe(concat('game.js'))
    .pipe(gulp.dest('./'))
    .pipe(connect.reload());
});

gulp.task('vendor', function() {
  gulp
    .src([
      './bower_components/phaser-official/build/phaser.js',
      './node_modules/@orange-games/phaser-input/build/phaser-input.js',
    ])
    .pipe(gulp.dest('./'));
});

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch('./game/**/*.js', ['clean', 'vendor', 'build']);
});

gulp.task('default', function() {
  gulp.run('clean', 'vendor', 'build', 'connect', 'watch');
});

