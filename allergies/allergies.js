export class Allergies {
  constructor(a) {
    this.a = a;

    this.items = {
      'cats': 128,
      'pollen': 64,
      'chocolate': 32,
      'tomatoes': 16,
      'strawberries': 8,
      'shellfish': 4,
      'peanuts': 2,
      'eggs': 1,
    };
  }

  list() {
    return Object.entries(this.items)
      .reduce((acc, item) => {
        if (item[1] <= this.a % 256) {
          this.a -= item[1];
          return [...acc, item[0]];
        }
        return acc;
      }, [])
    .reverse();
  }

  allergicTo(item) {
    return this.list().includes(item);
  }
}
