import getMinSquaredNumber from './getMinSquaredNumbers';

it('function which get min squared number', () => {
  const result = getMinSquaredNumber([]);

  expect(result).toEqual(null);
});

it('function which get min squared number', () => {
  const result = getMinSquaredNumber('dsdsd');

  expect(result).toEqual(null);
});

it('function which get min squared number', () => {
  const result = getMinSquaredNumber([32, 2, 3, 32132, 43, -1, 334]);

  expect(result).toEqual(1);
});
