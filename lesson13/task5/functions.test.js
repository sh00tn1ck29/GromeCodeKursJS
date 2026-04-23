import {
  reverseArr,
  withdraw,
  balances,
  clients,
  getAdults,
} from './functions';

it('function which reverse array', () => {
  const result = reverseArr('sasa');

  expect(result).toEqual(null);
});

it('function which reverse array', () => {
  const result = reverseArr([1, 2, 3, 4, 5, 6]);

  expect(result).toEqual([6, 5, 4, 3, 2, 1]);
});

it('function which reverse array', () => {
  const result = reverseArr(23232);

  expect(result).toEqual(null);
});

it('should withdraw money and return balance for John', () => {
  const result = withdraw('John', 887);

  expect(result).toEqual(18000);
  expect(balances[1]).toEqual(18000);
});

it('should return -1 if balance is insufficient (Andrey)', () => {
  const result = withdraw('Andrey', 100);

  expect(result).toEqual(-1);
});

it('should return -1 if client does not exist', () => {
  const result = withdraw('Unknown', 50);

  expect(result).toEqual(-1);
});

it('should get only people who are 18 or older', () => {
  const users = {
    'John Doe': 19,
    Tom: 17,
    Bob: 18,
  };
  const result = getAdults(users);

  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should return an empty object if an empty object is passed', () => {
  const result = getAdults({});

  expect(result).toEqual({});
});

it('should not filter anyone if everyone is an adult', () => {
  const users = {
    Ann: 56,
    Jack: 25,
  };
  const result = getAdults(users);

  expect(result).toEqual({ Ann: 56, Jack: 25 });
});
