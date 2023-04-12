const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const all = Object.fromEntries([...new Set(`${s1}${s2}`)].map(c => [c, 0]))
  const count = str => str
    .split``
    .reduce((acc, char) => (acc[char]++, acc), { ...all });
  const sum = (a, b) => a + b;

  const firstChars = count(s1);
  const secondChars = count(s2);

  return Object.keys(firstChars)
    .map(char => Math.min(firstChars[char], secondChars[char]))
    .reduce(sum);
}

module.exports = {
  getCommonCharacterCount
};
