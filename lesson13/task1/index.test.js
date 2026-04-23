it('check that 17 equal to 17', () => {
  expect(17).toEqual(17);
});

it('check that 18 noot  equal to 17', () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = (arr) => {
  return arr.filter((element) => {
    return element % 2 === 0;
  });
};

it('Function which return even numbers from array', () => {
  const result = getEvenNumbers([1, 2, 3, 4]);
  expect(result).toEqual([2, 4]);
});
