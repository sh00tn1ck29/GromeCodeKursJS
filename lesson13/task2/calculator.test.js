import getSum, { getSquaredNumbers, getOddNumbers } from './calculator';

it('function for get square numbers from array', () => {
  const result = getSquaredNumbers([1, 2, 3, 4, 5, 6]);
  expect(result).toEqual([1, 4, 9, 16, 25, 36]);
});

it('function for get odd numbers from array', () => {
  const result = getOddNumbers([1, 2, 3, 4, 5, 6]);
  expect(result).toEqual([1, 3, 5]);
});

it('default sum function whihc return sum two numbers', () => {
  const result = getSum(5, 5);

  expect(result).toEqual(10);
});
