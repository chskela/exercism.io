export const isIsogram = (str) => {
  const f = i => /[a-z]/.test(i);
  const temp = str.toLowerCase().split('')
  return [... new Set(temp)].filter(f).length === temp.filter(f).length;
};
