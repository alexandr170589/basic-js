const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let prev = str[0];
  let result = '';

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === prev) {
      count++;
    } else {
      result += count === 1 ? prev : count + prev;
      prev = str[i];
      count = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
