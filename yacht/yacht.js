export const score = (theDice, category) => {
  const sort = theDice.sort((a, b) => a - b);
  const first = sort.filter((item, idx, arr) => item === arr[0]);
  const last = sort.filter((item, idx, arr) => item === arr[4]);
  const l1 = first.length;
  const l2 = last.length;

  switch (category) {
    case "yacht": {
      const res = sort.every((item, idx, arr) => arr[0] === item);
      return res ? 50 : 0;
    }
    case "ones": {
      const res = sort.filter((item) => item === 1);
      return res.length * 1;
    }
    case "twos": {
      const res = sort.filter((item) => item === 2);
      return res.length * 2;
    }
    case "threes": {
      const res = sort.filter((item) => item === 3);
      return res.length * 3;
    }
    case "fours": {
      const res = sort.filter((item) => item === 4);
      return res.length * 4;
    }
    case "fives": {
      const res = sort.filter((item) => item === 5);
      return res.length * 5;
    }
    case "sixes": {
      const res = sort.filter((item) => item === 6);
      return res.length * 6;
    }
    case "full house": {
      if ((l1 === 3 && l2 === 2) || (l1 === 2 && l2 === 3)) {
        return l1 * first[0] + l2 * last[0];
      } else {
        return 0;
      }
    }
    case "four of a kind": {
      if (l1 >= 4) {
        return 4 * first[0];
      } else if (l2 >= 4) {
        return 4 * last[0];
      }
      {
        return 0;
      }
    }
    case "little straight": {
      return sort.join("") === "12345" ? 30 : 0;
    }
    case "big straight": {
      return sort.join("") === "23456" ? 30 : 0;
    }
    case "choice": {
      return sort.reduce((acc, item) => acc + item);
    }
  }
};
