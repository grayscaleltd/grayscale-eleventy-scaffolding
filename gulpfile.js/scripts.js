const config = require('../gulpconfig').scripts;

const chalk = require('chalk');
const args = require('yargs').argv;
const glob = require('glob');
const gulp = require('gulp');
const path = require('path');
const webpack = require('webpack');

function scriptsDefault(cb) {
  webpack({
    mode: (args.production) ? 'production' : 'development',
    devtool: (args.production) ? false : 'eval-source-map',
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
      }],
    },
    context: path.resolve(__dirname, '../'),
    entry: () => {
      const entries = {};

      if (glob.sync(config.src).length) {
        entries[`${config.dest}/application`] =
            glob.sync(config.src);
      }

      return entries;
    },
    output: {
      path: path.resolve(__dirname, '../'),
      filename: '[name].js',
    },
    watch: (process.argv.includes('watch')),
  }, (err, stats) => {
    const statOptions = {
      preset: 'minimal',
      builtAt: true,
      colors: true,
      modules: false,
      timings: true,
    };

    console.error(`[${chalk.blue('webpack')}]`);
    console.error(stats.toString(statOptions));

    cb();
  });
}

exports.scripts = gulp.parallel(scriptsDefault);