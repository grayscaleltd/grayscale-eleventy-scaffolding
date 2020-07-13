const config = require('../gulpconfig').browsersync;

const browserSync = require('browser-sync');
const server = browserSync.create();

async function reload() {
  return server.reload();
}

function serve(done) {
  server.init(config);

  done();
}

exports.reload = reload;
exports.browserSync = serve;
