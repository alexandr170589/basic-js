const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const array = n.toString().split('');
  let maxdigit = parseInt( [...array].slice(1).join('') );
  
  array.forEach((elem, i) => {
    const copyArray = [...array];
    copyArray.splice(i,1);
    const number = parseInt( copyArray.join('') );
    if(number > maxdigit) maxdigit = number;
  }) 

  return maxdigit;
}

module.exports = {
  deleteDigit
};
