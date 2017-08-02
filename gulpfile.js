//load in the pkgs this file will use
var gulp    = require ('gulp')
  , sass    = require ('gulp-sass')
  , connect = require ('gulp-connect');

'use strict';
//the command gulp default or just gulp now watches all files in folder sass with type .scss extension
//and when they change it calls the 'sass' task which recompiles the files into one .css file in the public folder
gulp.task('default', function () {
  gulp.watch('./sass/*.scss', ['sass'])
  gulp.watch('./views/*.handlebars', ['handlebars'])
});
//make a gulp task to copy a file to a folder
gulp.task('sass', function() {
  return gulp.src('sass/styles.scss')
    .pipe(sass( { errLogToConsole: true } ))
    .pipe(gulp.dest('./public/css'))
})
//connect, html, default, and live are all to perform livereloads
gulp.task('connect', function() {
  connect.server({
    root: 'views/layouts',
    livereload: true
  });
});

gulp.task('handlebars', function () {
  gulp.src('./views/*.handlebars')
    .pipe(connect.reload());
});

gulp.task('live', ['connect', 'default']);
