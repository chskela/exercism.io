
export const score = (x, y) => {
  const r = Math.sqrt(x ** 2 + y ** 2);
  if (r <= 1) {
    return 10;
  } else if (r <= 5) {
    return 5;
  } else if (r <= 10){
    return 1;
  } else {
    return 0;
  }
};
