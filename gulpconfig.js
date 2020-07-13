const src = './src/';
const dist = './src/templates/';

module.exports = {
  assets: {
    src: src + 'assets/**',
    dest: dist + 'assets',
  },

  browsersync: {
    // files: [
    //   dist + '**/*',
    //   '!**/*.map',
    // ],
    server: './dist/',
    open: false,
    port: 8080,
    // reloadDelay: 2000,
  },

  scripts: {
    src: src + 'js/*.js',
    dest: dist + '_includes/js',
  },

  styles: {
    includePaths: [
      'node_modules/normalize.css',
    ],
    src: src + 'scss/**/*.scss',
    dest: dist + '_includes/css',
  },

  eleventy: {
    src: src + 'templates/**/*',
  },

  utility: {
    clean: [
      '**/.DS_Store',
      '**/Thumbs.db',
      dist + '**/*.map',
    ],
  },
};
