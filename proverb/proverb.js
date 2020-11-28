export const proverb = (...list) => {
  const qualifier = typeof list[list.length - 1] === "object"
    ? `${list.pop().qualifier} ` : '';

  const res = list.reduce((acc, item, index, arr) => {
    const currentValue = index === arr.length - 1
      ? ''
      : `For want of a ${item} the ${arr[index + 1]} was lost.\n`;
    return acc + currentValue;
  }, '') + `And all for the want of a ${qualifier}${list[0]}.`;
  
  return res;
};
