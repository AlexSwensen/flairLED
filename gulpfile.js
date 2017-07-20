const gulp = require('gulp');
const eslint = require('gulp-eslint');
const gulpStylelint = require('gulp-stylelint');

gulp.task('default', ['lint']);

gulp.task('lint', ['lint:js', 'lint:styles']);

gulp.task('lint:js', function () {
  return gulp.src(['src/**/*.js', 'e2e/**/*.js'])
    .pipe(eslint({
      configFile: './.eslintrc.js',
      quiet: false
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});


gulp.task('lint:styles', function () {
  return gulp.src('src/**/*.scss')
    .pipe(gulpStylelint({
      reporters: [
        {
          formatter: 'string',
          console: true
        }
      ]
    }));
});
