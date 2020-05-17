export const convert = (arr, a, b) => {
  const l = arr.length;
  const result = [];
  if (a < 2 || !Number.isInteger(a)) {
    throw new Error('Wrong input base');
  }
  if (b < 2 || !Number.isInteger(b)) {
    throw new Error('Wrong output base');
  }
  if (
    l === 0
    || (arr[0] === 0 && l > 1)
    || arr.some(i => i < 0)
    || arr.some(i => i >= a)
  ) {
    throw new Error('Input has wrong format');
  }

  let resultA = arr.reverse().map((item, ix) => {
    return item * a ** ix;
  }).reduce((acc, item) => acc + item, 0);

  do {
    result.push(resultA % b);
    resultA = Math.floor(resultA / b);
  } while (resultA >= b);

  if (resultA > 0) {
    result.push(resultA % b);
  }

  return result.reverse();
};
