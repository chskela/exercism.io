
export const transpose = (arr) => {
  const mL = Math.max(...arr.map(i => i.length));
  const result = [];
  for (let i = 0; i < mL; i++) {
    const row = [];
    for (let j = 0; j < arr.length; j++) {
      row.push(arr[j][i] || ' ');
    }
    const r = row.join('');
    result.push(i === mL - 1 ? r.trimRight() : r);
  }
  return result;
};
