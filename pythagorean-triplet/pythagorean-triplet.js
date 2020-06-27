export class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  sum() {
    return this.a + this.b + this.c;
  }

  product() {
    return this.a * this.b * this.c;
  }

  isPythagorean() {
    return this.a ** 2 + this.b ** 2 === this.c ** 2;
  }

  static where({ minFactor = 1, maxFactor, sum }) {
    const result = [];
    for (let i = minFactor; i <= maxFactor; i++) {
      for (let j = i + 1; j <= maxFactor; j++) {
        for (let k = j + 1; k <= maxFactor; k++) {
          const triplet = new Triplet(i, j, k);
          if (!sum && triplet.isPythagorean()) {
            result.push(triplet);
          }
          if (triplet.sum() === sum && triplet.isPythagorean()) {
            result.push(triplet);
          }
        }
      }
    }
    return result;
  }
}
