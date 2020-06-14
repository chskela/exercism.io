export const primeFactors = (n) => {
  const result = [];
  const max = Math.sqrt(n);
  for (let i = 2; i <= max; i++) {
    while (n % i === 0) {
      n = n / i;
      result.push(i);
    }
  }
  if (n > 1) {
    result.push(n);
  }
  return result;
};
