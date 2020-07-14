import { dir } from "console";

export class SpiralMatrix {

  static ofSize(size) {
    const matrix = Array(size).fill(null).map(i => Array(size).fill(null));
    const summ = size ** 2;
    let correctY = 0;
    let correctX = 0;
    let count = 1;

    while (size > 0) {
      for (let y = 0; y < 4; y++) {
        for (let x = 0; x < size; x++) {
          if (y == 0 && x < size - correctX && count <= summ)
            matrix[y + correctY][x + correctX] = count++;
          if (y == 1 && x < size - correctY && x != 0 && count <= summ)
            matrix[x + correctY][size - 1] = count++;
          if (y == 2 && x < size - correctX && x != 0 && count <= summ)
            matrix[size - 1][size - (x + 1)] = count++;
          if (y == 3 && x < size - (correctY + 1) && x != 0 && count <= summ)
            matrix[size - (x + 1)][correctY] = count++;
        }
      }
      size--;
      correctY += 1;
      correctX += 1;

    }
    return matrix;
  }
}