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
  const digits = String(n).split``;

  for (let i = 0; i < digits.length; i++) {
    const curr = digits[i];
    const next = digits[i + 1];
    
    if (i == digits.length - 1 || curr < next) {
      digits.splice(i, 1);
      
      return +digits.join``;
    }
  }
}

module.exports = {
  deleteDigit
};
