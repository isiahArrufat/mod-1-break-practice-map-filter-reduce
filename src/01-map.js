/**
 * Doubles each number in the provided array and then adds the provided value.
 * @param {number[]} arr - The array of numbers to be doubled and added to.
 * @param {number} value - The value to be added after doubling each number.
 * @returns {number[]} A new array with each number doubled and added to.
 *
 * EXAMPLE:
 * doubleAndAdd([1, 2, 3], 5)
 *
 * OUTPUT:
 * [7, 9, 11]
 */
function doubleAndAdd(arr, value) {
  return arr.map((num) => num * 2 + value);
}

/**concatenateAndUppercase
 * Concatenates a string to each string in the provided array and then converts to uppercase.
 * @param {string[]} arr - The array of strings to be concatenated and converted.
 * @param {string} str - The string to be concatenated.
 * @returns {string[]} A new array with each string concatenated and converted to uppercase.
 * 
 * EXAMPLE:
 * concatenateAndUppercase(['apple', 'banana'], ' fruit')
 * 
 * OUTPUT:
 * [
      'APPLE FRUIT',
      'BANANA FRUIT'
    ]
 */
function concatenateAndUppercase(arr, str) {}

/**convertToObjects
 * Converts an array of strings to an array of objects with properties extracted from the strings.
 * @param {string[]} arr - The array of strings, each string is in "key:value" format.
 * @returns {Object[]} A new array with objects created from the strings.
 *
 * EXAMPLE:
 * convertToObjects(['name:John', 'age:30', 'city:New York'])
 *
 * OUTPUT:
 * [ { name: 'John' }, { age: '30' }, { city: 'New York' } ]
 */

function convertToObjects(arr) {}

/**transformToASCII
 * https://www.asciitable.com/
 * Transforms each character in the provided array of strings to its ASCII code.
 * @param {string[]} arr - The array of strings to be transformed.
 * @returns {number[][]} A new array with each string transformed to an array of ASCII codes.
 * EXAMPLE:  transformToASCII(['dog', 'cat'])
 *
 * OUTPUT:
 * [ [ 100, 111, 103 ], [ 99, 97, 116 ] ]
 */

function transformToASCII(arr) {}

module.exports = {
  convertToObjects,
  transformToASCII,
  doubleAndAdd,
  concatenateAndUppercase
};
