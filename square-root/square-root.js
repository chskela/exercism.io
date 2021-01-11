export const squareRoot = (n) => {
  let res = 0;
  let d = 1;
  while (n > 0) {
    res++;
    n -= d;
    d += 2;
  }
  return res;
};
