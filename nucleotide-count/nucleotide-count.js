export class NucleotideCounts {
  static parse(str) {
    const matches = str.matchAll(/A|C|G|T/g);
    if (Array.from(matches, m => m[0]).length !== str.length) {
      throw new Error('Invalid nucleotide in strand');
    }
    const res = [0, 0, 0, 0];
    for (const i of str) {
      const n = ['A', 'C', 'G', 'T'];
      n.forEach((item, idx) => {
        if (item === i) {
          res[idx]++;
        }
      });
    }
    return res.join(' ');
  }
}
