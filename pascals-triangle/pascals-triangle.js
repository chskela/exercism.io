export const rows = (i) => {
  const arr = [];
  for (let n = 0; n < i; n++) {
    const row = [];
    for (let k = 0; k <= n; k++) {
      row[k] = (k === 0 || k === n) ? 1 : arr[n - 1][k - 1] + arr[n - 1][k];
    }
    arr[n] = row;
  }
  return arr;
};
