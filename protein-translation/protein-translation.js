//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (protein) => {
  if (!protein) {
    return [];
  }

  const obj = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP'
  }

  const result = [];
  const length = protein.length

  for (let i = 0; i < length; i += 3) {
    const element = protein.slice(i, i + 3);

    if (element in obj) {
      if (obj[element] === 'STOP') {
        return result;
      }
      result.push(obj[element])
    } else {
      throw new Error('Invalid codon');
    }
  }
  return result;
};
