export const parse = (str) => [...str.matchAll(/[a-z']+/ig)]
  .map(i => i[0][0]).join('').toUpperCase();
