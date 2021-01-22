class Node {
  constructor({ element, prev, next }) {
    this.element = element;
    this.prev = prev;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.last = null;
    this.first = null;
  }

  push(value) {
    const node = new Node({ element: value, prev: this.last, next: null });
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
    this.first = this.first ? this.first : node;
  }

  pop() {
    const lastNode = this.last;
    if (this.last === this.first) {
      this.first = null;
    }
    this.last = lastNode.prev;
    if (this.last) {
      this.last.next = null;
    }
    return lastNode.element;
  }

  shift() {
    const firstNode = this.first;
    if (this.last === this.first) {
      this.last = null;
    }
    this.first = firstNode.next;
    if (this.first) {
      this.first.prev = null;
    }
    return firstNode.element;
  }

  unshift(value) {
    const node = new Node({ element: value, prev: null, next: this.first });
    if (this.first) {
      this.first.prev = node;
    }
    this.last = this.last ? this.last : node;
    this.first = node;
  }

  delete(value) {
    let curenntNode = this.first;
    let search = true;
    while (search && curenntNode) {
      if (curenntNode.element === value) {
        const nextNode = curenntNode.next || null;
        const prevNode = curenntNode.prev || null;

        if (curenntNode === this.first) {
          this.first = nextNode;
        }
        if (curenntNode === this.last) {
          this.last = prevNode;
        }
        if (nextNode) {
          nextNode.prev = prevNode;
        }
        if (prevNode) {
          prevNode.next = nextNode;
        }
        search = false;
      }
      curenntNode = curenntNode.next;
    }
  }

  count() {
    let curenntNode = this.first;
    if (!curenntNode) {
      return 0;
    }
    let count = 1;
    while (curenntNode?.next) {
      count++;
      curenntNode = curenntNode.next;
    }
    return count;
  }
}
