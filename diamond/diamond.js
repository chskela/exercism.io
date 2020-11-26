export const rows = (letter) => {
  const arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const idx = arr.indexOf(letter);
  const a = arr
    .slice(0, idx + 1)
    .map((l, i) => {
      const lr = ' '.repeat(idx - i);
      const c = ' '.repeat(i === 0 ? 0 : 1 + (i - 1) * 2);
      return i === 0 ? `${lr}${l}${lr}` : `${lr}${l}${c}${l}${lr}`;
    });

  return([...a, ...a.slice(0, idx).reverse()]);
};
