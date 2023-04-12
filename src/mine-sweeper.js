const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const pluck = (y, x) => matrix[y] ? matrix[y][x] || 0 : 0;
  const offsets = [-1, 0, 1];
  const coords = offsets.map(y => offsets.map(x => [y, x])).flat();

  let res = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row[j] = coords.map(([y, x]) => (!x && !y) ? 0 : pluck(i + y, j + x)).filter(e => e).length;
    }
    res[i] = row;
  }

  return res;
}

module.exports = {
  minesweeper
};
