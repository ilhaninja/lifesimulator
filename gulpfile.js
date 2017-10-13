var browserify, concat, connect, filter, gulp;

gulp = require('gulp');
filter = require('gulp-filter');
concat = require('gulp-concat');
connect = require('gulp-connect');
browserify = require('gulp-browserify');

gulp.task('build', function() {
  gulp
    .src('./game/**/*.js')
    .pipe(browserify({
      insertGlobals: true,
      debug: !gulp.env.production
    }))
    .pipe(concat('game.js'))
    .pipe(gulp.dest('./'))
    .pipe(connect.reload());
});

gulp.task('vendor', function() {
  gulp
    .src('./bower_components/phaser-official/build/phaser.js')
    .pipe(gulp.dest('./'));
});

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch('./game/**/*.js', ['build']);
});

gulp.task('default', function() {
  gulp.run('vendor', 'build', 'connect', 'watch');
});

