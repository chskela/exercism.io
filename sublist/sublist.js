export class List {
  constructor(list = []) {
    this.list = list;
    this.l = this.list.length;
  }

  compare(listTwo) {
    if (this.#equal(listTwo.list)) {
      return "EQUAL";
    }

    if (this.#sublist(listTwo.list)) {
      return "SUBLIST";
    }

    if (this.#superlist(listTwo)) {
      return "SUPERLIST";
    }

    return "UNEQUAL";
  }

  #equal = (list) =>
    this.l === list.length &&
    this.list.every((item, idx) => item === list[idx]);

  #sublist = (list) =>
    this.l < list.length &&
    list.reduce(
      (acc, item, idx, arr) =>
        this.l === 0 ||
        (item === this.list[0] &&
          new List(arr.slice(idx, idx + this.l)).#equal(this.list))
          ? !acc
          : acc,
      false
    );

  #superlist = (listTwo) => listTwo.#sublist(this.list);
}
