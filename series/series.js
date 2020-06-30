export class Series {
  constructor(digits) {
    this._digits = digits.split('').map(digit => Number(digit));
  }

  get digits() {
    return this._digits;
  }

  slices(n) {
    const result = [];
    const l = this._digits.length;
    if (l < n) {
      throw new Error('Slice size is too big.')
    }
    for (let i = 0; i <= l - n; i++) {
      result.push(this._digits.slice(i, i + n));
    }
    return result;
  }
}
