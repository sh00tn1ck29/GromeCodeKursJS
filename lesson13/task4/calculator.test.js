import { calc } from './calculator';

it('function which calculate', () => {
  const result = calc('5 + 5');

  expect(result).toEqual('5 + 5 = 10');
});

it('function which calculate', () => {
  const result = calc('5 - 5');

  expect(result).toEqual('5 - 5 = 0');
});

it('function which calculate', () => {
  const result = calc('5 * 5');

  expect(result).toEqual('5 * 5 = 25');
});

it('function which calculate', () => {
  const result = calc('5 / 5');

  expect(result).toEqual('5 / 5 = 1');
});
