export class HighScores {
  constructor(score = [0]) {
    this._score = score;
    this._scoreSort = [...this._score].sort((a, b) => b - a);
    this.l = this._score.length;
  }

  get scores() {
    return this._score;
  }

  get latest() {
    return this._score[this.l - 1];
  }

  get personalBest() {
    return this._scoreSort[0];
  }

  get personalTopThree() {
    return this.l > 3
      ? this._scoreSort.slice(0,3)
      : this._scoreSort;
  }
}
