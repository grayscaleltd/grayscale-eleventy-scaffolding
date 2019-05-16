# Grayscale Eleventy Scaffolding

## Version 1.0.1

## System Requirement

To run this workflow, you should have the following installed globally. If you are on Mac, consider using [Homebrew](https://brew.sh/) to prevent permission issues.

* [Node.js](https://nodejs.org/en/download/)
* [npm](https://docs.npmjs.com/getting-started/installing-node)
* [gulp-cli](https://github.com/gulpjs/gulp-cli)

The package comes with linter files to maintain code style and you are encouraged to have the below linters installed.

* [ESLint](https://eslint.org/)
* [Sass Lint](https://github.com/sasstools/sass-lint)

## Setup

1. Run `npm install` in the terminal to install the dev dependencies
2. Run `npm run init` in the terminal to initialise build process
3. Edit base configurations in `/src/site/_data/siteconfig.js`
4. Set up environment based config files in `/src/site/_data`

## Development

* Run `npm run build` in the terminal to create a compiled copy of the site at `/dist`
* Run `npm run serve` in the terminal for a development instance
