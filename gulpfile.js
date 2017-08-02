//load in the pkgs this file will use
var gulp    = require ('gulp')
  , sass    = require ('gulp-sass');

'use strict';

gulp.task('default', function () {
  gulp.watch('./sass/*.scss', ['sass'])
});
//make a gulp task to copy a file to a folder
gulp.task('sass', function() {
  return gulp.src('sass/styles.scss')
    .pipe(sass( { errLogToConsole: true } ))
    .pipe(gulp.dest('./public/css'))
})
