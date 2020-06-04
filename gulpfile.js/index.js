const config = require('../gulpconfig');

const gulp = require('gulp');

const {assets} = require('./assets');
const {clean} = require('./utility');
const {scripts} = require('./scripts');
const {styles} = require('./styles');

exports.assets = assets;
exports.scripts = scripts;
exports.styles = styles;

exports.build = gulp.series(
    clean,
    gulp.parallel(assets, scripts, styles),
);

exports.watch = gulp.parallel(
    function monitorFiles() {
      gulp.watch(config.assets.src, assets);
      gulp.watch(config.styles.src, styles);
      scripts();
    },
);
