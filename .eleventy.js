const markdownItImplecitFigure = require('markdown-it-implicit-figures');
const _ = require('lodash');

module.exports = (eleventyConfig) => {
  // Eleventy general
  // ---
  // Minify the html output
  // eleventyConfig.addTransform('htmlmin', require('./src/utils/minify-html.js'));

  // Pass some assets right through
  eleventyConfig.addPassthroughCopy('./src/templates/assets');

  // Not use gitignore
  eleventyConfig.setUseGitIgnore(false);

  // Enable data deep merge
  eleventyConfig.setDataDeepMerge(true);

  // Markdown
  // ---
  // Use Markdown it
  const markdownIt = require('markdown-it');
  const options = {
    html: true,
  };

  const markdownLib = markdownIt(options);

  // Set up implicit figures for md files
  markdownLib.use(markdownItImplecitFigure);

  // Set markdown library
  eleventyConfig.setLibrary('md', markdownLib);

  // Liquid
  // ---
  // Set up liquid
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    // strict_filters: true
  });

  // Custom filters
  // ---
  // Match by key value pair
  eleventyConfig.addFilter('where',
    (data, key, value) => _.filter(data, [key, value])
  );

  return {
    dir: {
      input: 'src/templates',
      output: 'dist',
      data: '_data'
    },
    templateFormats : ['html', 'md', 'njk'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true,
    env: process.env.ELEVENTY_ENV,
  };
};
