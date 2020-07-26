export const saddlePoints = (matrix) => {
  const points = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const el = matrix[i][j];
      const r = matrix[i].every(item => el >= item);
      if (r) {
        const r2 = matrix.map(item => item[j]).every(item => item >= el);
        if (r2) {
          points.push({
            row: i + 1, column: j + 1
          });
        }
      }
    }
  }
  return points;
};
