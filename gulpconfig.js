const src = './src/';
const dist = './src/site/';

module.exports = {
  assets: {
    src: src + 'assets/**',
    dest: dist + 'assets',
  },

  scripts: {
    src: src + 'js/*.js',
    dest: dist + '_includes/js',
  },

  styles: {
    includePaths: [
      'node_modules/normalize.css',
    ],
    src: src + '/scss/**/*.scss',
    dest: dist + '_includes/css',
  },

  utility: {
    clean: [
      '**/.DS_Store',
      '**/Thumbs.db',
      '**/*.map',
    ],
  },
};
