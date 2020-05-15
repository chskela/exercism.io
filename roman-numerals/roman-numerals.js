export const toRoman = (i) => {
  let result = '';

  if ((i / 1000) > 0) {
    result += 'M'.repeat(Math.floor(i / 1000));
  }

  if (Math.floor(i / 100) === 9) {
    result += 'CM';
  }
  if (Math.floor(i / 100) === 5) {
    result += 'D';
  }
  if (Math.floor(i / 100) === 4) {
    result += 'CD';
  }

  if ((i / 100) < 4 && Math.floor(i / 100) > 0) {
    result += 'C'.repeat(Math.floor(i / 100));
  }
  if (Math.floor((i % 100) / 10) === 9) {
    result += 'XC';
  }
  if (Math.floor((i % 100) / 10) === 8) {
    result += 'LXXX';
  }
  if (Math.floor((i % 100) / 10) === 7) {
    result += 'LXX';
  }
  
  if (Math.floor((i % 100) / 10) === 6) {
    result += 'LX';
  }
  if (Math.floor((i % 100) / 10) === 5) {
    result += 'L';
  }

  if (Math.floor((i % 100) / 10) === 4) {
    result += 'XL';
  }
  
  if (((i % 100) / 10) < 4 && Math.floor((i % 100) / 10) > 0) {
    result += 'X'.repeat(Math.floor((i % 100) / 10));
  }

  if ((i % 10) === 9) {
    result += 'IX';
  }
  if ((i % 10) === 8) {
    result += 'VIII';
  }
  if ((i % 10) === 7) {
    result += 'VII';
  }
  if ((i % 10) === 6) {
    result += 'VI';
  }
  if ((i % 10) === 5) {
    result += 'V';
  }
  if ((i % 10) === 4) {
    result += 'IV';
  }
  if ((i % 10) < 4) {
    result += 'I'.repeat(Math.floor(i % 10));
  }

  return result;
};
