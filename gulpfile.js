const gulp = require('gulp');
const config = require('./gulpconfig');

const chalk = require('chalk');

// import all tasks
require('require-dir')('./tasks');

// -----

// Watch for changes in assets, scripts, and styles
gulp.task('watch', () => {
  gulp.watch(config.assets.src, gulp.parallel('assets')),
  gulp.watch(config.styles.src, gulp.parallel('styles')),
  gulp.watch(config.scripts.src, gulp.parallel('scripts')),

  console.log(chalk.green('--------------------'));
  console.log(chalk.green('Watch is ready...'));
  console.log(chalk.green('--------------------'));
});

// Build a working copy
gulp.task('build', gulp.series(
    'utility-clean',
    gulp.parallel('assets', 'styles', 'scripts' ),
));

// Serve copy for development
gulp.task('serve', gulp.series('build', 'watch'));
