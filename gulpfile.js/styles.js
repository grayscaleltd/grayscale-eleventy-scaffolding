const config = require('../gulpconfig').styles;

const args = require('yargs').argv;
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const gulpNotify = require('gulp-notify');
const gulpPlumber = require('gulp-plumber');
const gulpPostCSS = require('gulp-postcss');
const gulpSass = require('gulp-sass');
const gulpSourcemaps = require('gulp-sourcemaps');
const gulpTouchCmd = require('gulp-touch-cmd');
const postcssCalc = require('postcss-calc');

gulpSass.compiler = require('sass');

function stylesDefault() {
  return gulp.src(config.src)
      .pipe(gulpPlumber({
        errorHandler: gulpNotify.onError('Error: <%= error.message %>'),
      }))
      .pipe(gulpIf(!(args.production), gulpSourcemaps.init()))
      .pipe(gulpSass({
        includePaths: config.includePaths,
        outputStyle: 'compressed',
      }))
      .pipe(gulpPostCSS([
        autoprefixer({
          grid: 'autoplace',
        }),
        cssnano({safe: true}),
        postcssCalc({
          precision: 2,
        }),
      ]))
      .pipe(gulpIf(!(args.production), gulpSourcemaps.write('./')))
      .pipe(gulp.dest(config.dest))
      .pipe(gulpTouchCmd());
}

exports.styles = gulp.parallel(stylesDefault);
