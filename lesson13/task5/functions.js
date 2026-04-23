export function reverseArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  const result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result;
}

export const clients = [
  'Ann',
  'John',
  'Denis',
  'Andrey',
  'Frank',
  'Serg',
  'Kate',
  'Liza',
];
export const balances = [1400, 18887, -6, 0, 200, 5000, 220, 100500];

export const withdraw = (clientName, amount) => {
  const clientIndex = clients.indexOf(clientName);

  if (clientIndex === -1 || balances[clientIndex] < amount) {
    return -1;
  }

  balances[clientIndex] -= amount;

  return balances[clientIndex];
};

export const getAdults = (obj) => {
  const result = {};

  for (const key in obj) {
    if (obj[key] >= 18) {
      result[key] = obj[key];
    }
  }

  return result;
};
