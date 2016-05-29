
'use strict';

require('yargs').help('args');

module.exports = {
  env: {
    'e': {
      alias: ['env'],
      describe: 'choose your environment',
      choices: ['dev', 'uat', 'prod'],
      demand: true,
      requiresArg: true
    }
  },
  silent: {
    's': {
      alias: ['silent'],
      describe: 'silently log linting errors (no verbose console ouput)',
      boolean: true,
      demand: false,
      requiresArg: false
    }
  }
};
