//load in the pkgs this file will use
var gulp = require ('gulp');
var gulp-sass = require ('gulp-sass');

//make a gulp task to copy a file to a folder
//in theory this task compiles styles.scss into styles.css in another folder
gulp.task('copy', function() {
  gulp.src('sass/styles.scss').pipe(gulp.dest('public/css/styles.css'))
});
