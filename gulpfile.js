var browserify, concat, connect, filter, gulp;

gulp = require('gulp');
plumber = require('gulp-plumber');
filter = require('gulp-filter');
logger = require('gulp-logger');
concat = require('gulp-concat');
connect = require('gulp-connect');
browserify = require('gulp-browserify');

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

