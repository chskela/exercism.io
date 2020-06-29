export const clean = (pN) => {

  const candidate = [...pN.matchAll(/\d/g)].map(n => n[0]);
  const l = candidate.length;

  if ([...pN.matchAll(/[a-z]/ig)].length !== 0) {
    throw new Error('Letters not permitted');
  }
  if ([...pN.matchAll(/[:punct:]/ig)].length !== 0) {
    throw new Error('Punctuations not permitted');
  }

  if (l < 10) {
    throw new Error('Incorrect number of digits');
  }

  if (l > 11) {
    throw new Error('More than 11 digits');
  }

  if (candidate[0] !== '1' && l === 11) {
    throw new Error('11 digits must start with 1');
  }

  if (candidate[l - 10] === '0') {
    throw new Error('Area code cannot start with zero');
  }

  if (candidate[l - 10] === '1') {
    throw new Error('Area code cannot start with one');
  }

  if (candidate[l - 7] === '0') {
    throw new Error('Exchange code cannot start with zero');
  }
  
  if (candidate[l - 7] === '1') {
    throw new Error('Exchange code cannot start with one');
  }

  return l === 11 ? candidate.join('').slice(1) : candidate.join('');
};
