export const annotate = (input) => {
  const lInput = input.length;
  if (lInput === 0) {
    return [];
  };
  const lEl = input[0].length;
  const tempResult = input.map(item => item.split('').slice());

  for (let i = 0; i < lInput; i++) {
    for (let k = 0; k < lEl; k++) {
      if (tempResult[i][k] === '*') {
        [-1, 0, 1].forEach(t1 => {
          [-1, 0, 1].forEach(t2 => {
            if (i + t1 >= 0
              && k + t2 >= 0
              && i + t1 < lInput
              && k + t2 < lEl
              && tempResult[i + t1][k + t2] !== '*') {
              tempResult[i + t1][k + t2] = tempResult[i + t1][k + t2] === ' '
                ? 1
                : ++tempResult[i + t1][k + t2];
            }
          });
        });
      }
    }
  }
  return tempResult.map(i => i.join(''));
};
