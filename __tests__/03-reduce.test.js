const {
  countOccurrences,
  groupByProperty,
  sumArray
} = require('../src/03-reduce');

describe('sumArray', () => {
  test('should return the sum of all numbers in an array', () => {
    expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
  });

  test('should return 0 for an empty array', () => {
    expect(sumArray([])).toBe(0);
  });
  test('should use .reduce()', () => {
    const spy = jest.spyOn(Array.prototype, 'reduce');
    const input = [1, 2, 3, 4, 5];

    sumArray(input);

    expect(spy).toHaveBeenCalled();

    spy.mockRestore(); // Restore the original function after the test
  });
});

describe('countOccurrences', () => {
  test('should count the occurrences of each string in an array', () => {
    expect(
      countOccurrences(['apple', 'banana', 'apple', 'orange', 'banana'])
    ).toEqual({ apple: 2, banana: 2, orange: 1 });
  });

  test('should return an empty object for an empty array', () => {
    expect(countOccurrences([])).toEqual({});
  });

  test('should handle array with one element', () => {
    expect(countOccurrences(['apple'])).toEqual({ apple: 1 });
  });

  // ... other tests ...

  test('should use .reduce()', () => {
    const spy = jest.spyOn(Array.prototype, 'reduce');
    const input = ['apple', 'banana', 'apple', 'orange', 'banana'];

    countOccurrences(input);

    expect(spy).toHaveBeenCalled();

    spy.mockRestore(); // Restore the original function after the test
  });
});

describe('groupByProperty', () => {
  test('should group objects by a specific property', () => {
    const input = [
      { a: 1, b: 2 },
      { a: 2, b: 3 },
      { a: 1, b: 4 }
    ];
    const output = {
      1: [
        { a: 1, b: 2 },
        { a: 1, b: 4 }
      ],
      2: [{ a: 2, b: 3 }]
    };
    expect(groupByProperty(input, 'a')).toEqual(output);
  });

  test('should return an empty object if the input array is empty', () => {
    expect(groupByProperty([], 'a')).toEqual({});
  });

  test('should use .reduce()', () => {
    const spy = jest.spyOn(Array.prototype, 'reduce');
    const input = [
      { a: 1, b: 2 },
      { a: 2, b: 3 },
      { a: 1, b: 4 }
    ];

    groupByProperty(input, 'a');

    expect(spy).toHaveBeenCalled();

    spy.mockRestore(); // Restore the original function after the test
  });
});
