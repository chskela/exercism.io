export const valid = (digits) => {
  const str = digits.split(' ').join('');

  if (str === '0') return false;

  const result = str.split('').reduce((acc, item, i) => {
    item = Number(item);

    if ((str.length - i) % 2 === 0) {
      item *= 2;

      if (item > 9) {
        item -= 9;
      }
    }
    
    return acc + item;
  }, 0);

  return result % 10 === 0;
};
