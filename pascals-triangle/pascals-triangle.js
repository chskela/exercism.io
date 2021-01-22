export const rows = (n) => {
  if (n === 0) {
    return [];
  }
  const triangle = [[1]];
  for (let i = 1; i < n; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      const next = triangle[i - 1];
      const previousLeft = next[j - 1] || 0;
      const previousRight = next[j] || 0;
      row[j] = previousLeft + previousRight;
    }
    triangle[i] = row;
  }
  return triangle;
};
