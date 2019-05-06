const gulp = require('gulp');
const config = require('../gulpconfig').scripts;

const plugins = require('gulp-load-plugins')();
const args = require('yargs').argv;

gulp.task('scripts', () => {
  return gulp.src(config.src)
      .pipe(plugins.plumber({
        errorHandler: plugins.notify.onError('Error: <%= error.message %>'),
      }))
      .pipe(plugins.if(!(args.production), plugins.sourcemaps.init()))
      // Start of source map
      .pipe(plugins.babel({
        presets: [
          ['@babel/preset-env', {
            targets: {
              'browsers': config.browser,
            },
          }],
        ],
      }))
      .pipe(plugins.concat('application.js'))
      .pipe(plugins.uglify())
      // End of source map
      .pipe(plugins.if(!(args.production), plugins.sourcemaps.write('./')))
      .pipe(gulp.dest(config.dest));
});
