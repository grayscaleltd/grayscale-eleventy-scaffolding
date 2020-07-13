const config = require('../gulpconfig').assets;

const gulp = require('gulp');
const gulpChanged = require('gulp-changed');
const gulpIf = require('gulp-if');
const gulpImagemin = require('gulp-imagemin');

function assetsDefault() {
  return gulp.src(config.src)
      .pipe(gulpChanged(config.dest))
      .pipe(gulpIf((file) => { // prevent changing SVGs
        file.extname !== '.svg';
      }, gulpImagemin()))
      .pipe(gulp.dest(config.dest));
}

exports.assets = gulp.parallel(assetsDefault);
