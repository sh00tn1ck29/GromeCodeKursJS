export default (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const arrAbs = arr.map((element) => {
    return Math.abs(element);
  });

  const minNumber = Math.min(...arrAbs);
  return minNumber * minNumber;
};
