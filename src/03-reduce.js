/**sumArray
 * Calculates the sum of all numbers in an array.
 * @param {number[]} arr - The array of numbers.
 * @returns {number} The sum of all numbers in the array.
 */
function sumArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

/**countOccurrences
 * Counts the occurrences of each string in an array.
 * @param {string[]} arr - The array of strings.
 * @returns {Object} An object with keys being the unique strings from the array, and values being the counts of those strings.
 */
function countOccurrences(arr) {
  return arr.reduce((acc, str) => {
    acc[str] = (acc[str] || 0) + 1;
    return acc;
  }, {});
}

/**groupByProperty
 * Using the .reduce method
 * Groups an array of objects by a specific property.
 * @param {Object[]} arr - The array of objects.
 * @param {string} prop - The property by which to group the objects.
 * @returns {Object} An object with keys representing the property values and values being arrays of objects.
 */
function groupByProperty(arr, prop) {
  return arr.reduce((acc, obj) => {
    const key = obj[prop];
    if (!acc[key]) acc[key] = [];
    acc[key].push(obj);
    return acc;
  }, {});
}
module.exports = { groupByProperty, countOccurrences, sumArray };
