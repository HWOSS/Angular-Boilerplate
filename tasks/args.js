
'use strict';

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
      describe: 'asd',
      choices: ['a', 's', 'd'],
      demand: true,
      requiresArg: true
    }
  }
};
