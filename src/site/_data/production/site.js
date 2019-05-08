const siteConfig = require('../siteconfig.js');

const envConfig = {
  'url': 'https://site.production',
};

module.exports = Object.assign(siteConfig, envConfig);

