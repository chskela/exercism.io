export class CustomSet {
  constructor(array = []) {
    this.set = new Set(array);
  }

  empty() {
    return this.set.size === 0;
  }

  contains(element) {
    return this.set.has(element);
  }

  add(element) {
    this.set.add(element);
    return this;
  }

  subset(customSet) {
    for (const element of this.set) {
      if (!customSet.set.has(element)) {
        return false;
      }
    }
    return true;
  }

  disjoint(customSet) {
    for (const element of this.set) {
      if (customSet.set.has(element)) {
        return false;
      }
    }
    return true;
  }

  eql(customSet) {
    return this.subset(customSet) && customSet.subset(this);
  }

  union(customSet) {
    return new CustomSet([...this.set, ...customSet.set]);
  }

  intersection(customSet) {
    let arr = [];
    for (const element of this.set) {
      if (customSet.set.has(element)) {
        arr.push(element);
      }
    }
    return new CustomSet(arr);
  }

  difference(customSet) {
    let arr = [];
    for (const element of this.set) {
      if (!customSet.set.has(element)) {
        arr.push(element);
      }
    }
    return new CustomSet(arr);
  }
}
