const config = require('../gulpconfig');

const gulp = require('gulp');

const {assets} = require('./assets');
const {reload, browserSync} = require('./browsersync');
const {clean} = require('./utility');
const {eleventy} = require('./eleventy');
const {scripts} = require('./scripts');
const {styles} = require('./styles');

exports.assets = assets;
exports.eleventy = eleventy;
exports.scripts = scripts;
exports.styles = styles;

exports.build = gulp.series(
    clean,
    gulp.parallel(assets, scripts, styles),
);

exports.watch = gulp.parallel(
    browserSync,
    function monitorFiles() {
      gulp.watch(config.assets.src, assets);
      gulp.watch(config.eleventy.src, gulp.series(eleventy, reload));
      scripts();
      gulp.watch(config.styles.src, styles);
    },
);
