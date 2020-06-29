export const classify = (n) => {
  if (n <= 0) {
    throw new Error('Classification is only possible for natural numbers.');
  }

  let factors = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      factors.push(i);
      factors.push(n/i);
    }
  }
  const sum = Array.from(new Set(factors)).reduce((acc, i) => acc + i) - n;

  if (sum < n || n === 1) {
    return 'deficient';
  }
  if (sum > n) {
    return 'abundant';
  }
  return 'perfect';
};
