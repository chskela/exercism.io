export class ComplexNumber {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  get real() {
    return this.a;
  }

  get imag() {
    return this.b;
  }

  add({ a: c, b: d }) {
    this.a += c;
    this.b += d;
    return this;
  }

  sub({ a: c, b: d }) {
    this.a -= c;
    this.b -= d;
    return this;
  }

  div({ a: c, b: d }) {
    const { a, b } = this;
    this.a = (a * c + b * d) / (c ** 2 + d ** 2);
    this.b = (b * c - a * d) / (c ** 2 + d ** 2);
    return this;
  }

  mul({ a: c, b: d }) {
    const { a, b } = this;
    this.a = a * c - b * d;
    this.b = b * c + a * d;
    return this;
  }

  get abs() {
    const { a, b } = this;
    return (a ** 2 + b ** 2) ** 0.5;
  }

  get conj() {
    const { a, b } = this;
    return {
      a: a,
      b: (b === 0) ? 0 : -b
    };
  }

  get exp() {
    const { a, b } = this;
    return new ComplexNumber(Math.E ** a, 0)
      .mul(new ComplexNumber(Math.cos(b), Math.sin(b)));
  }

}
