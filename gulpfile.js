var path = require('path');
var gulp = require('gulp');
var less = require('gulp-less');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');

livereload({ start: true })

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: false,
      port: 8080
    }))
    .pipe(livereload());
});

gulp.task('dev', () => {
    return gulp.src('./less/**/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(concat('daveboehm.css'))
        .pipe(gulp.dest('./css'))
});

gulp.task('default', ['dev', 'webserver']);