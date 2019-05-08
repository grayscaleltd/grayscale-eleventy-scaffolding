const siteConfig = require('../siteconfig.js');

const envConfig = {
  'url': 'http://localhost:8888',
};

module.exports = Object.assign(siteConfig, envConfig);
