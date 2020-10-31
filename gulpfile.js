const gulp = require('gulp')

const less = require('gulp-less');
const path = require('path');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();


gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
}); 


function watch(){
    browserSync.init({
      server: {
        baseDir: './',
      }
    });
    gulp.watch('./less/**/*.less', less);
    gulp.watch('./*.html').on('change', browserSync.reload)
  }

  exports.img = () => (
    gulp.src('bigimg/*')
        .pipe(imagemin())
        .pipe(gulp.dest('smallimg'))
);

exports.watch = watch;

