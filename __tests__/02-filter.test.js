const {
  filterByLengthAndCharacter,
  filterObjectsByKeyValue
} = require('../src/02-filter');

describe('filterByLengthAndCharacter', () => {
  test('should filter strings by length and character', () => {
    expect(
      filterByLengthAndCharacter(['apple', 'banana', 'cherry'], 6, 'a')
    ).toEqual(['banana']);
  });

  test('should return an empty array if no strings meet the criteria', () => {
    expect(
      filterByLengthAndCharacter(['apple', 'banana', 'cherry'], 7, 'z')
    ).toEqual([]);
  });

  test('should handle empty array', () => {
    expect(filterByLengthAndCharacter([], 5, 'a')).toEqual([]);
  });
  test('should use .filter()', () => {
    const spy = jest.spyOn(Array.prototype, 'filter');
    const input = ['apple', 'banana', 'cherry'];

    filterByLengthAndCharacter(input, 6, 'a');

    expect(spy).toHaveBeenCalled();

    spy.mockRestore(); // Restore the original function after the test
  });
});

describe('filterObjectsByKeyValue', () => {
  test('should filter objects by key value', () => {
    const objects = [
      { a: 1, b: 2 },
      { a: 2, b: 3 },
      { a: 1, b: 4 }
    ];
    expect(filterObjectsByKeyValue(objects, 'a', 1)).toEqual([
      { a: 1, b: 2 },
      { a: 1, b: 4 }
    ]);
  });

  test('should return an empty array if no objects meet the criteria', () => {
    const objects = [
      { a: 1, b: 2 },
      { a: 2, b: 3 },
      { a: 1, b: 4 }
    ];
    expect(filterObjectsByKeyValue(objects, 'a', 3)).toEqual([]);
  });

  test('should handle empty array', () => {
    expect(filterObjectsByKeyValue([], 'a', 1)).toEqual([]);
  });

  test('should use .filter()', () => {
    const spy = jest.spyOn(Array.prototype, 'filter');
    const objects = [
      { a: 1, b: 2 },
      { a: 2, b: 3 },
      { a: 1, b: 4 }
    ];

    filterObjectsByKeyValue(objects, 'a', 1);

    expect(spy).toHaveBeenCalled();

    spy.mockRestore(); // Restore the original function after the test
  });
});
