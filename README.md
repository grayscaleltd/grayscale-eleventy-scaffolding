# How to use this scaffolding?

## System Requirement

To run this workflow, you should have the following installed globally. If you are on Mac, consider using [Homebrew](https://brew.sh/) to prevent permission issues.

* [Node.js](https://nodejs.org/en/download/)
* [npm](https://docs.npmjs.com/getting-started/installing-node)
* [gulp-cli](https://github.com/gulpjs/gulp-cli)

The package comes with linter files to maintain code style and you are encouraged to have the below linters installed.

* [ESLint](https://eslint.org/)
* [Style Lint](https://stylelint.io/)

## File formats

Even though all files are run through with the [Nunjucks](https://mozilla.github.io/nunjucks/) template engine, different file formats should be applied to files to indicate their purpose.

* Layout files should have the `.html` suffix
* Component files should have the `.njk` suffix

## Setup

1. Run `npm install` in the terminal to install the dev dependencies
2. Run `npm run init` in the terminal to initialise build process
3. Edit base configurations in `/src/site/_data/siteConfig.js`
4. Set up environment based config files in `/src/site/_data`

## Development

* Run `npm run build` in the terminal to create a compiled copy of the site at `/dist`
* Run `npm run serve` in the terminal for a development instance
