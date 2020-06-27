export class Squares {
  constructor(n) {
    this.n = n;
  }

  get sumOfSquares() {
    const n = this.n;
    return n * (n + 1) * (2 * n + 1) / 6;
  }

  get squareOfSum() {
    const n = this.n;
    return ((n + 1) * n / 2) ** 2;
  }

  get difference() {
    const { squareOfSum, sumOfSquares } = this;
    return squareOfSum - sumOfSquares;
  }
}
