export class Zipper {
  constructor(tree, parent = null) {
    this.tree = tree;
    this.parent = parent;
  }
  static fromTree(tree) {
    return new Zipper(JSON.parse(JSON.stringify(tree)));
  }

  toTree() {
    return this.parent ? this.parent.toTree() : this.tree;
  }

  value() {
    return this.tree.value;
  }

  left() {
    if (this.tree.left) {
      return new Zipper(this.tree.left, this);
    } else {
      return null;
    }
  }

  right() {
    if (this.tree.right) {
      return new Zipper(this.tree.right, this);
    } else {
      return null;
    }
  }

  up() {
    return this.parent;
  }

  setValue(value) {
    this.tree.value = value;
    return this;
  }

  setLeft(tree) {
    this.tree.left = tree;
    return this;
  }

  setRight(tree) {
    this.tree.right = tree;

    return this;
  }
}
