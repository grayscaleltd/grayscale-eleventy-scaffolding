const src = './src/';
const dist = './src/site/';
const browsersupport = [
  'last 2 versions',
  'ie >= 9',
];

module.exports = {
  assets: {
    src: src + 'assets/**',
    dest: dist + 'assets',
  },

  scripts: {
    src: src + 'js/*.js',
    dest: dist + '_includes/js',
    browser: browsersupport,
  },

  // setup: {
  //   dep: [
  //     'https://wordpress.org/latest.zip',
  //     'https://github.com/studio24/wordpress-multi-env-config/archive/master.zip',
  //   ],
  //   dest: dist,
  // },

  styles: {
    src: src + 'scss/*.scss',
    dest: dist + '_includes/css',
    browser: browsersupport,
    includePaths: [
      'node_modules/node-normalize-scss',
    ],
  },

  utility: {
    clean: [
      '**/.DS_Store',
      '**/Thumbs.db',
    ],
  },
};
