export const recite = (start, end = start) => {
  const startStr = (numeral) =>
    `On the ${numeral} day of Christmas my true love gave to me:`;

  const endStr = (n) => {
    const partStr = [
      "a Partridge in a Pear Tree",
      "two Turtle Doves",
      "three French Hens",
      "four Calling Birds",
      "five Gold Rings",
      "six Geese-a-Laying",
      "seven Swans-a-Swimming",
      "eight Maids-a-Milking",
      "nine Ladies Dancing",
      "ten Lords-a-Leaping",
      "eleven Pipers Piping",
      "twelve Drummers Drumming",
    ];
    if (n === 1) {
      return ` ${partStr[n - 1]}.\n`;
    }
    const res = [];
    for (let i = n; i >= 1; i--) {
      const el = i === 1 ? ` and ${partStr[i - 1]}.` : ` ${partStr[i - 1]},`;
      res.push(el);
    }
    return res.join("") + "\n";
  };
  const numeral = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth",
    "tenth",
    "eleventh",
    "twelfth",
  ];
  const res = [];
  for (let i = start; i <= end; i++) {
    res.push(`${startStr(numeral[i - 1])}${endStr(i)}`);
  }
  return res.join("\n");
};
