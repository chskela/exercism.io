const gcd = (a, b) => (b === 0 ? Math.abs(a) : gcd(b, a % b));

export class TwoBucket {
  constructor(buckOne, buckTwo, goal, starterBuck) {
    this.goal = goal;
    this.starterBuck = starterBuck;
    this.one = {
      name: "one",
      value: 0,
      maxValue: buckOne,
    };
    this.two = {
      name: "two",
      value: 0,
      maxValue: buckTwo,
    };
  }

  moves() {
    if (
      this.goal % gcd(this.two.maxValue, this.one.maxValue) ||
      this.goal > Math.max(this.two.maxValue, this.one.maxValue)
    ) {
      throw new Error("Not possible");
    }
    let startB,
      otherB,
      step = 1;

    if (this.starterBuck === "one") {
      startB = this.one;
      otherB = this.two;
    } else {
      startB = this.two;
      otherB = this.one;
    }

    startB.value = startB.maxValue;

    while (startB.value !== this.goal && otherB.value !== this.goal) {
      if (otherB.maxValue === this.goal) {
        otherB.value = otherB.maxValue;
        step++;
      } else {
        // другое ведро полное, опустошить его
        if (otherB.value === otherB.maxValue) {
          otherB.value = 0;
          step++;
        }
        // стартовое ведро пустое, то заполнить его
        if (startB.value === 0) {
          startB.value = startB.maxValue;
          step++;
        }
        // переливаем между ведрами
        if (startB.value + otherB.value <= otherB.maxValue) {
          otherB.value += startB.value;
          startB.value = 0;
          step++;
        } else {
          startB.value += otherB.value - otherB.maxValue;
          otherB.value = otherB.maxValue;
          step++;
        }
      }
    }

    return step;
  }

  get goalBucket() {
    return this.goal === this.one.value ? this.one.name : this.two.name;
  }

  get otherBucket() {
    return this.goal === this.one.value ? this.two.value : this.one.value;
  }
}
