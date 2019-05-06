const gulp = require('gulp');
const config = require('../gulpconfig').utility;

const del = require('del');

gulp.task('utility-clean', () => {
  return del(config.clean);
});
