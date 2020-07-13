const args = require('yargs').argv;
const exec = require('child_process').exec;
const notifier = require('node-notifier');

function eleventyDefault(cb) {
  const env = args.production ?
      'ELEVENTY_ENV=production' :
      'ELEVENTY_ENV=development';

  const command = `${env} eleventy --quiet`;

  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error: ${err}`);

      notifier.notify({
        title: 'Error while compiling JS',
        message: err,
      });
    }

    if (stdout) {
      console.log(`Eleventy: ${stdout}`);
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);

      notifier.notify({
        title: 'Error generating site',
        message: stderr,
      });
    }

    cb();
  });
}

exports.eleventy = eleventyDefault;
