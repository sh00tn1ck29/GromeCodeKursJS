export const getSquaredNumbers = (arr) => {
  return arr.map((element) => {
    return element * element;
  });
};

export const getOddNumbers = (arr) => {
  return arr.filter((element) => {
    return element % 2 === 1;
  });
};

export default (a, b) => {
  return a + b;
};
