export const isValid = (str) => {
  const isbn = str.replace(/-/g, '');
  const res = isbn
    .split('')
    .map((i, idx) => i === 'X' && idx === 9 ? 10 : Number(i))
    .reduceRight((acc, item, index) => {
      return acc + item * (10 - index);
    }, 0);
  return isbn.length === 10 && res % 11 === 0;
};
