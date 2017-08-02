//load in the pkgs this file will use
var gulp = require ('gulp');
//var gutil = require ('gulp-util');
var sass = require ('gulp-sass');

//make a gulp task to copy a file to a folder
//in theory this task compiles styles.scss into styles.css in another folder
/*gulp.task('default', function() {
  gulp.src('sass/styles.scss')
  .pipe(sass({style: 'expanded'}))
    .on('error', gutil.log)
  .pipe(gulp.dest('public/css'))
});*/
//this code might work from https://www.npmjs.com/package/gulp-sass
'use strict';

gulp.task('sass', function () {
  return gulp.src('sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('sass/styles.scss', ['sass']);
});
