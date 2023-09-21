/**filterByLengthAndCharacter
 * Filters the array of strings based on the minimum length and a character that the string must contain.
 * @param {string[]} arr - The array of strings to be filtered.
 * @param {number} length - The minimum length of the string.
 * @param {string} char - The character that the string must contain.
 * @returns {string[]} A new array with strings that meet the criteria.
 */
function filterByLengthAndCharacter(arr, length, char) {
  return arr.filter((str) => str.length >= length && str.includes(char));
}

/**filterObjectsByKeyValue
 * Filters an array of objects based on a key-value pair.
 * @param {Object[]} arr - The array of objects to be filtered.
 * @param {string} key - The key to be checked.
 * @param {*} value - The value to be matched.
 * @returns {Object[]} A new array with objects that have the specified key-value pair.
 * 
 * 
 * EXAMPLE:
 *  const objects = [
      { a: 1, b: 2 },
      { a: 2, b: 3 },
      { a: 1, b: 4 }
    ];

    filterObjectsByKeyValue(objects, 'a', 1)

    OUTPUT:
    [
      { a: 1, b: 2 },
      { a: 1, b: 4 }
    ])
 */
function filterObjectsByKeyValue(arr, key, value) {
  return arr.filter((obj) => obj[key] === value);
}

module.exports = { filterByLengthAndCharacter, filterObjectsByKeyValue };
