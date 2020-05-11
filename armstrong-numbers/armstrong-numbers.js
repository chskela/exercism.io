//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (n) => {
  const str = n.toString();
  const power = str.length;
  let result = 0;
  for (const i of str) {
    result += Number(i) ** power;
  }
  return n === result;
};
