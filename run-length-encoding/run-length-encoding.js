export const encode = (str) => {
  if (!str.length) return '';
  let result = '';
  let count = 0;
  let char = str[0];
  for (const i of str) {
    if (char === i) {
      count++;
    } else {
      result += `${(count < 2) ? '' : count}${char}`;
      char = i;
      count = 1;
    }
  }
  result += `${(count < 2) ? '' : count}${char}`;
  return result;
};

export const decode = (str) => {
  if (!str.length) return '';
  let count = '';
  let result = '';
  for (const i of str) {
    if (/[0-9]/.test(i)) {
      count += i;
    } else {
      result += (count > 1) ? i.repeat(Number(count)) : i;
      count = '';
    }
  }
  return result;
};
