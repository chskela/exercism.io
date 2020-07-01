export const largestProduct = (str, n) => {
  const numbers = str.split('').map(number => Number(number));
  const l = numbers.length;

  if (l < n) throw new Error('Span must be smaller than string length');

  if (!numbers.every(number => Number.isInteger(number))) {
    throw new Error('Digits input must only contain digits');
  }

  if (n < 0) throw new Error('Span must be greater than zero');

  return Math.max(...Array(l - n + 1).fill(null)
    .map((_, index) => numbers.slice(index, index + n)
      .reduce((acc, item) => acc * item, 1)));
};
