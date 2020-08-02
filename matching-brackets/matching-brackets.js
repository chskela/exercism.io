export const isPaired = (str) => {
  const template = {
    '}': '{',
    ')': '(',
    ']': '['
  };
  const stack = [];

  const brackets = str.split('').filter(item => /[\(\)\{\}\[\]]/.test(item));

  if (brackets.length % 2 !== 0) {
    return false;
  }

  brackets.forEach(el => {
    if (el === '{' ||
      el === '[' ||
      el === '(') {

      stack.push(el);
    }

    if ((el === '}' || el === ']' || el === ')')
      && stack[stack.length - 1] === template[el]) {
      stack.pop();
    }
  });

  return stack.length === 0 ? true : false;
};
