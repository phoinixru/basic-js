const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  let month;
  try {
    isNaN(+date);
    month = date.getMonth() + 1;
  } catch (e) {
    throw new Error("Invalid date!");
  }

  const season = Math.floor((month % 12) / 3);
  return ['winter', 'spring', 'summer', 'autumn'][season];
}

module.exports = {
  getSeason
};
