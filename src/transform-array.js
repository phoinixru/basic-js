const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const NULL = Symbol('null');
  const isNotNull = el => el !== NULL;

  return arr.reduce((acc, el, i, arr) => {
    if (i == acc.length) {
      switch (el) {
        case '--discard-next':
          acc.push(NULL, NULL);
          break;
        case '--discard-prev':
          acc[acc.length - 1] = NULL;
          acc.push(NULL);
          break;
        case '--double-next':
          acc.push(arr[i + 1] || NULL);
          break;
        case '--double-prev':
          acc.push(acc[i - 1] || NULL);
          break;
        default:
          acc.push(el);
      }
    }

    return acc;
  }, [])
    .filter(isNotNull);
}

module.exports = {
  transform
};
