
export class QueenAttack {
  constructor(queens = { white: [0, 3], black: [7, 3] }) {
    const { white, black } = queens;
    const compare = (a, b) => a.length == b.length && a.every((v, i) => v === b[i]);

    if (compare(white, black)) {
      throw new Error('Queens cannot share the same space');
    }

    this.white = white;
    this.black = black;
  }

  toString() {
    const [w1, w2] = this.white;
    const [b1, b2] = this.black;
    const board = [];
    for (let i = 0; i < 8; i++) {
      const row = Array(8).fill('_');
      if (i === w1) {
        row[w2] = 'W';
      }
      if (i === b1) {
        row[b2] = 'B';
      }
      board.push(row.join(' '));
    }
    return board.join('\n').slice(0, 128) + '\n';
  }

  canAttack() {
    const [w1, w2] = this.white;
    const [b1, b2] = this.black;

    if (w1 === b1 || w2 === b2) {
      return true;
    }
    if (Math.abs(w1 - b1) === Math.abs(w2 - b2)) {
      return true;
    }

    return false;
  }
}
