module.exports = function(config) {
  // minify the html output
  // config.addTransform("htmlmin", require("./src/utils/minify-html.js"));

  // set up liquid
  config.setLiquidOptions({
    dynamicPartials: true,
    // strict_filters: true
  });

  // pass some assets right through
  config.addPassthroughCopy("./src/site/assets");

  // not use gitignore
  config.setUseGitIgnore(false);

  return {
    dir: {
      input: "src/site",
      output: "dist",
      data: `_data`
    },
    templateFormats : ["html", "liquid", "md"],
    passthroughFileCopy: true,
    env: process.env.ELEVENTY_ENV,
  };
};
