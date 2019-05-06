const gulp = require('gulp');
const config = require('../gulpconfig').styles;

const plugins = require('gulp-load-plugins')();
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const args = require('yargs').argv;

plugins.sass.compiler = require('sass');

gulp.task('styles', () => {
  return gulp.src(config.src)
      .pipe(plugins.plumber({
        errorHandler: plugins.notify.onError('Error: <%= error.message %>'),
      }))
      .pipe(plugins.if(!(args.production), plugins.sourcemaps.init()))
      // Start of source map
      .pipe(plugins.sass({
        includePaths: config.includePaths,
        outputStyle: 'compressed',
      }))
      .pipe(plugins.postcss([
        autoprefixer({browsers: config.browser}),
        cssnano({safe: true}),
      ]))
      // end of source map
      .pipe(plugins.if(!(args.production), plugins.sourcemaps.write('./')))
      .pipe(gulp.dest(config.dest))
      .pipe(plugins.touchCmd());
});
