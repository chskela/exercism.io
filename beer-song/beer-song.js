export const recite = (initialBottlesCount, takeDownCount) => {
  let result = [];

  const firstUpperCase = (str) =>
    `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;

  const getBottles = (n) =>
    n === 0 ? "no more bottles" : n === 1 ? "1 bottle" : `${n} bottles`;

  const firstStr = (n) =>
    `${firstUpperCase(getBottles(n))} of beer on the wall, ${getBottles(
      n
    )} of beer.`;

  const secondStr = (n) =>
    n === 0
      ? `Go to the store and buy some more, 99 bottles of beer on the wall.`
      : n === 1
      ? `Take it down and pass it around, no more bottles of beer on the wall.`
      : `Take one down and pass it around, ${getBottles(
          n - 1
        )} of beer on the wall.`;

  const getTwoLine = (n) => [firstStr(n), secondStr(n)];

  for (
    let i = initialBottlesCount;
    i > initialBottlesCount - takeDownCount;
    i--
  ) {
    result = [...result, ...getTwoLine(i), ""];
  }
  result.pop();
  return result;
};
