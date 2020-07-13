const env = process.env.ELEVENTY_ENV;
const envConfig = require(`./${env}/envconfig`);

const baseConfig = {
  'name': 'Grayscale Eleventy Scaffolding',
  'description': 'Basic workflow for developing Eleventy-based website at Grayscale',
  'textDomain': 'grayscale',
  'environment': env,
};

module.exports = {
  ...baseConfig,
  ...envConfig,
};
