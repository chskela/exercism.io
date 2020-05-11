//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (dna1, dna2) => {
  const l1 = dna1.length;
  const l2 = dna2.length;
  let result = 0;

  if (l1 === 0 && l2 !== 0) {
    throw new Error('left strand must not be empty');
  }

  if (l2 === 0 && l1 !== 0) {
    throw new Error('right strand must not be empty');
  }

  if (l1 !== l2) {
    throw new Error('left and right strands must be of equal length');
  }

  if (l1 === 0) {
    return 0;
  }

  for (let i = 0; i < l1; i++) {
    if (dna1[i] !== dna2[i]) {
      result++;
    }
  }
  return result;
};
