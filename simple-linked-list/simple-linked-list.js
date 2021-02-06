export class Element {
  constructor(value) {
    this._value = value;
    this._next = null;
  }

  get value() {
    return this._value;
  }

  get next() {
    return this._next;
  }
}

export class List {
  constructor(list = []) {
    this._list = [];
    this._head = null;
    list.forEach((item) => {
      this.add(new Element(item));
    });
  }

  add(nextValue) {
    this._list.push(nextValue);
    this._head = nextValue;
    const l = this.length;
    if (l > 1) {
      nextValue._next = this._list[l - 2];
    }
  }

  get length() {
    return this._list.length;
  }

  get head() {
    return this._head;
  }

  toArray() {
    return this._list.map((item) => item.value).reverse();
  }

  reverse() {
    return new List(this.toArray());
  }
}
