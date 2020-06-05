export const convert = (n) => {
  const r = [];
  const d = { 3: 'Pling', 5: 'Plang', 7: 'Plong' };
  Object.keys(d).forEach(item => {
    if (n % item === 0) {
      r.push(d[item]);
    }
  });
  const res = r.join('');
  return res.length === 0 ? n.toString() : res;
};
