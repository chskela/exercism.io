export class List {
  constructor(values = []) {
    this.values = values;
  }

  append(list) {
    return new List([...this.values, ...list.values]);
  }

  concat(list) {
    let res = [...this.values];
    for (const i of list.values) {
      res = typeof i === "object" ? [...res, ...i.values] : [...res, i];
    }
    return new List(res);
  }

  filter(fn) {
    let res = [];
    for (const i of this.values) {
      res = fn(i) ? [...res, i] : res;
    }
    return new List(res);
  }

  map(fn) {
    let res = [];
    for (const i of this.values) {
      res = [...res, fn(i)];
    }
    return new List(res);
  }

  length() {
    let l = 0;
    for (const i of this.values) {
      l++;
    }
    return l;
  }

  foldl(fn, init) {
    let res = init;
    for (const i of this.values) {
      res = fn(res, i);
    }
    return res;
  }

  foldr(fn, init) {
    return this.reverse().foldl(fn, init);
  }

  reverse() {
    let res = [];
    for (const i of this.values) {
      res = [i, ...res];
    }
    return new List(res);
  }
}
