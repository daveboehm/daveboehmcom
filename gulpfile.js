var path = require('path');
var gulp = require('gulp');
var less = require('gulp-less');
var webserver = require('gulp-webserver');
 
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: false,
      port: 8080
    }));
});

gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('default', ['less', 'webserver' ]);