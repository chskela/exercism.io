export const isPangram = str => 'abcdefghijklmnopqrstuvwxyz'
  .split('')
  .every(i => str.toLowerCase().includes(i));

