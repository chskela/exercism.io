//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  isTriangle() {
    return this.a === 0 || this.b === 0 || this.c === 0 || this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a;
  }



  isEquilateral() {
    if (this.isTriangle()) {
      return false;
    }

    return this.a === this.b && this.c === this.a
  }

  isIsosceles() {
    if (this.isTriangle()) {
      return false;
    }
    return this.a === this.b || this.c === this.a || this.c === this.b
  }

  isScalene() {
    if (this.isTriangle()) {
      return false;
    }
    return this.a !== this.b && this.c !== this.a && this.c !== this.b
  }
}
