export const findAnagrams = (str, worlds) => {
  const l = s => s.toLowerCase();
  const h = s => l(s).split('').sort().join('');
  return worlds.filter(world => h(str) === h(world) && l(str) !== l(world));
};
