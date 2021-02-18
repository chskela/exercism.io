export const keep = (arr, fn) => arr.filter(fn);

export const discard = (arr, fn) =>
  arr.filter((item) => !keep(arr, fn).includes(item));
