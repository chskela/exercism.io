export class BinarySearchTree {
  constructor(data) {
    this._data = data;
    this._right = null;
    this._left = null;
  }

  get data() {
    return this._data;
  }

  get right() {
    return this._right;
  }

  get left() {
    return this._left;
  }

  insert(value) {
    if (value <= this._data) {
      if (this._left) {
        this.left.insert(value);
      } else {
        this._left = new BinarySearchTree(value);
      }
    } else {
      if (this._right) {
        this.right.insert(value);
      } else {
        this._right = new BinarySearchTree(value);
      }
    }
  }

  allData() {
    let res = [this._data];
    const left = this._left ? this._left.allData() : [];
    const right = this._right ? this._right.allData() : [];
    res = [...left, ...res, ...right];
    return res;
  }

  each(cb) {
    this.allData().forEach(cb);
  }
}
