const {
  convertToObjects,
  transformToASCII,
  doubleAndAdd,
  concatenateAndUppercase
} = require('../src/01-map');

describe('doubleAndAdd', () => {
  test('should double each number and add the provided value', () => {
    expect(doubleAndAdd([1, 2, 3], 5)).toEqual([7, 9, 11]);
  });

  test('should handle empty array', () => {
    expect(doubleAndAdd([], 5)).toEqual([]);
  });

  test('should handle zero value', () => {
    expect(doubleAndAdd([1, 2, 3], 0)).toEqual([2, 4, 6]);
  });

  test('should use .map()', () => {
    const spy = jest.spyOn(Array.prototype, 'map');
    const input = [1, 2, 3];

    doubleAndAdd(input, 5);

    expect(spy).toHaveBeenCalled();

    spy.mockRestore(); // Restore the original function after the test
  });
});

describe('concatenateAndUppercase', () => {
  test('should concatenate and convert to uppercase', () => {
    expect(concatenateAndUppercase(['apple', 'banana'], ' fruit')).toEqual([
      'APPLE FRUIT',
      'BANANA FRUIT'
    ]);
  });

  test('should handle empty array', () => {
    expect(concatenateAndUppercase([], ' test')).toEqual([]);
  });

  test('should handle empty string', () => {
    expect(concatenateAndUppercase(['apple', 'banana'], '')).toEqual([
      'APPLE',
      'BANANA'
    ]);
  });
  test('should use .map()', () => {
    const spy = jest.spyOn(Array.prototype, 'map');
    const input = ['apple', 'banana'];

    concatenateAndUppercase(input, ' fruit');

    expect(spy).toHaveBeenCalled();

    spy.mockRestore(); // Restore the original function after the test
  });
});

describe('convertToObjects', () => {
  test('should convert array of strings to array of objects', () => {
    const input = ['name:John', 'age:30', 'city:New York'];
    const output = [{ name: 'John' }, { age: '30' }, { city: 'New York' }];
    expect(convertToObjects(input)).toEqual(output);
  });

  test('should handle strings with no value', () => {
    const input = ['name:', 'age:', 'city:'];
    const output = [{ name: '' }, { age: '' }, { city: '' }];
    expect(convertToObjects(input)).toEqual(output);
  });

  test('should handle empty strings', () => {
    const input = ['', '', ''];
    const output = [{ '': undefined }, { '': undefined }, { '': undefined }];
    expect(convertToObjects(input)).toEqual(output);
  });

  test('should handle strings with no colon', () => {
    const input = ['name', 'age', 'city'];
    const output = [
      { name: undefined },
      { age: undefined },
      { city: undefined }
    ];
    expect(convertToObjects(input)).toEqual(output);
  });

  test('should handle empty array', () => {
    const input = [];
    const output = [];
    expect(convertToObjects(input)).toEqual(output);
  });

  test('should use .map()', () => {
    const spy = jest.spyOn(Array.prototype, 'map');
    const input = ['name:John', 'age:30', 'city:New York'];

    convertToObjects(input);

    expect(spy).toHaveBeenCalled();

    spy.mockRestore(); // Restore the original function after the test
  });
});

describe('transformToASCII', () => {
  test('should transform array of strings to array of ASCII codes', () => {
    expect(transformToASCII(['abc', '123'])).toEqual([
      [97, 98, 99],
      [49, 50, 51]
    ]);
  });

  test('should return empty arrays for empty strings', () => {
    expect(transformToASCII(['', ''])).toEqual([[], []]);
  });

  test('should handle empty array', () => {
    expect(transformToASCII([])).toEqual([]);
  });

  test('should use .map()', () => {
    const spy = jest.spyOn(Array.prototype, 'map');
    const input = ['abc', '123'];

    transformToASCII(input);

    expect(spy).toHaveBeenCalled();

    spy.mockRestore(); // Restore the original function after the test
  });
});
