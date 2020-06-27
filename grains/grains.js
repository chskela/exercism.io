//
// This is only a SKELETON file for the 'Grains' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const square = (n) => {
  if (n < 1 || n > 64) throw new Error('square must be between 1 and 64');
  return BigInt(2 ** (n - 1));
};

export const total = () => (square(64) * 2n - 1n);
