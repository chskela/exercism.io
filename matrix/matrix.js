export class Matrix {
  constructor(str) {
    this.matrix = this.convertToMatrix(str);
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    return this.transpose(this.matrix);
  }

  transpose = matrix => matrix[0].map((col, i) => matrix.map(row => row[i]));

  convertToMatrix = str => str.split('\n').map(i => i.split(' ').map(i => Number(i)));

}
