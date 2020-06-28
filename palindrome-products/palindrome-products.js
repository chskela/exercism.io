export class Palindromes {
  constructor(palindromes) {
    this.palindromes = palindromes;
  }

  get smallest() {
    return this.palindromes[0];
  }

  get largest() {
    return this.palindromes[this.palindromes.length - 1];
  }

  static generate({ maxFactor, minFactor }) {
    if (maxFactor < minFactor) {
      throw new Error('min must be <= max');
    }
    const result = [];
    for (let i = minFactor; i <= maxFactor; i++) {
      for (let j = i; j <= maxFactor; j++) {
        const numbers = Array.from(String(i * j), Number);
        const reversNumbers = [...numbers].reverse();
        if (Number(numbers.join('')) === Number(reversNumbers.join(''))) {
          const candidate = result.find(item => item.value === i * j);
          result.push(candidate
            ? {
              ...candidate,
              factors: [...candidate.factors, [i, j]]
            }
            : { value: i * j, factors: [[i, j]] });
        }
      }
    }
    return result.length == 0
      ? new Palindromes([{ value: null, factors: [] }])
      : new Palindromes(result.sort((a, b) => a.value - b.value));
  }
}