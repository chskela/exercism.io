export const flatten = (array) =>
  array.reduce((acc, item) => {
    if (item === null || item === undefined) {
      return acc;
    }
    if (!Array.isArray(item)) {
      return [...acc, item];
    }
    return [...acc, ...flatten(item)];
  }, []);
