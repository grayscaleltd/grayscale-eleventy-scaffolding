const config = require('../gulpconfig').scripts;

const args = require('yargs').argv;
const glob = require('glob');
const gulp = require('gulp');
const path = require('path');
const webpack = require('webpack');
// Vue
// ---
// const VueLoaderPlugin = require('vue-loader/lib/plugin');

function scriptsDefault(cb) {
  webpack({
    mode: (args.production) ? 'production' : 'development',
    devtool: (args.production) ? '' : 'source-map',
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
      },
      // Vue
      // ---
      // {
      //   test: /\.vue$/,
      //   loader: 'vue-loader',
      // },
      // {
      //   test: /\.css$/,
      //   use: [
      //     'vue-style-loader',
      //     'css-loader',
      //   ],
      // },
      ],
    },
    // Vue
    // ---
    // plugins: [
    //   new VueLoaderPlugin(),
    // ],
    // resolve: {
    //   alias: {
    //     'vue$': 'vue/dist/vue.esm.js',
    //   },
    // },
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
    watch: (!args.production),
  }, (err, stats) => {
    if (stats.hasErrors()) {
      console.log(stats.toJson());
    }

    cb();
  });
}

exports.scripts = gulp.parallel(scriptsDefault);
