const gulp = require('gulp');
const config = require('../gulpconfig').assets;

const plugins = require('gulp-load-plugins')();

gulp.task('assets', () => {
  return gulp.src(config.src)
      .pipe(plugins.changed(config.dest))
      .pipe(plugins.imagemin())
      .pipe(gulp.dest(config.dest));
});
