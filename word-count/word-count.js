export const countWords = (str) => {
  const result = {};
  [...str.toLowerCase().matchAll(/(\w+'?\w+)|(\w+)/ig)]
    .forEach(item => result[item[0]] = result.hasOwnProperty(item[0])
      ? result[item[0]] + 1
      : 1);
  return result;
};
