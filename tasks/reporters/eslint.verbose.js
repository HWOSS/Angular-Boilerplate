/**
 *
 * Adapted from Sindre Sorhus's
 * Stylish reporter
 *
 */

'use strict';

var table = require('text-table');


module.exports = function(results) {

  var output    = '\n',
      total     = 0,
      errors    = 0,
      warnings  = 0;

  results.forEach(function(result) {
    var messages = result.messages;

    if(messages.length === 0) {
      return;
    }

    total += messages.length;
    output += result.filePath + '\n';

    output += table(
        messages.map(function(message) {
          var messageType;

          if(message.fatal || message.severity === 2) {
            messageType = 'error';
            errors++;
          } else {
            messageType = 'warning';
            warnings++;
          }

          return [
            '',
            message.line || 0,
            message.column || 0,
            messageType,
            message.message.replace(/\.$/, ''),
            message.ruleId || ''
          ];
        }), {
          align: ['', 'r', 'l'],
          stringLength: function(str) {
            return str.length;
          }
        }
      ).split('\n')
        .map(function(el) {
          return el.replace(/(\d+)\s+(\d+)/, function(m, p1, p2) {
            return p1 + ':' + p2;
          });
        })
        .join('\n') + '\n\n';
  });

  if(total > 0) {
    output += [
      total, ' problems', ' (', errors, ' errors', ', ', warnings, ' warnings', ')\n'
    ].join('');
  }

  return total > 0 ? output : '';

};
