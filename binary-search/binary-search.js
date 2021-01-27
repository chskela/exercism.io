export const find = (array, key) => {
  let index = 0;

  return recurs(array);

  function recurs(arr) {
    const l = arr.length;

    if (l <= 1) {
      if (arr[0] === key) {
        return index;
      } else {
        throw new Error("Value not in array");
      }
    }
    if (l % 2 === 1) {
      const centIdx = Math.floor(l / 2);
      return compare(centIdx);
    } else {
      const centIdx = l / 2;
      return compare(centIdx);
    }

    function compare(centIdx) {
      if (arr[centIdx] === key) {
        return centIdx + index;
      } else if (arr[centIdx - 1] >= key) {
        return recurs(arr.slice(0, centIdx), key);
      } else {
        index += centIdx + 1;
        return recurs(arr.slice(centIdx + 1), key);
      }
    }
  }

  //
};
