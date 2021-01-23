export class Rational {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add({ a, b }) {
    return new Rational(this.a * b + a * this.b, this.b * b).reduce();
  }

  sub({ a, b }) {
    return new Rational(this.a * b - a * this.b, this.b * b).reduce();
  }

  mul({ a, b }) {
    return new Rational(this.a * a, this.b * b).reduce();
  }

  div({ a, b }) {
    return new Rational(this.a * b, a * this.b).reduce();
  }

  abs() {
    return new Rational(Math.abs(this.a), Math.abs(this.b));
  }

  exprational(n) {
    return new Rational(this.a ** n, this.b ** n).reduce();
  }
  expreal(x) {
    return Math.round((x ** this.a) ** (1 / this.b) * 100) / 100;
  }

  reduce() {
    const gcd = this.getGCD(this.a, this.b);
    this.a /= gcd;
    this.b /= gcd;
    return this.flip();
  }

  getGCD(a, b) {
    let x = Math.abs(a);
    let y = Math.abs(b);
    if (x === 0) {
      return y;
    }
    if (y === 0) {
      return x;
    }

    if (x > y) {
      if (x % y === 0) {
        return y;
      } else {
        const tmpY = y;
        y = x % y;
        x = tmpY;
        return this.getGCD(x, y);
      }
    } else {
      if (y % x === 0) {
        return x;
      } else {
        const tmpX = x;
        x = y % x;
        y = tmpX;
        return this.getGCD(y, x);
      }
    }
  }

  flip() {
    if (this.b < 0) {
      this.a *= -1;
      this.b *= -1;
    }
    return this;
  }
}
