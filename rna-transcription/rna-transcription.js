export const toRna = (dna) => {
  const match = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  };
return dna.split('').map(i => match.hasOwnProperty(i) && match[i]).join('');
};
