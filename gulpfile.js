const gulp = require('gulp')
      inlineCss = require('gulp-inline-css');

gulp.task('default', function() {
    return gulp.src('./ready-to-send/*.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('./ready-to-send/'));
});

