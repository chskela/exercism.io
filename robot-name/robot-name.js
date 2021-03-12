const LETTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const allNames = [];
LETTERS.forEach((l1) => {
  LETTERS.forEach((l2) => {
    NUMBERS.forEach((n1) => {
      NUMBERS.forEach((n2) => {
        NUMBERS.forEach((n3) => {
          allNames.push(`${l1}${l2}${n1}${n2}${n3}`);
        });
      });
    });
  });
});

shuffle(allNames);

let idx = 0;

function getUnicName() {
  if (idx > allNames.length - 1) {
    idx = 0;
  } else {
    return allNames[idx++];
  }
}

export class Robot {
  #name = "";

  constructor() {
    this.#name = getUnicName();
  }

  get name() {
    return this.#name;
  }

  reset = () => {
    this.#name = getUnicName();
  };

  static releaseNames = () => {
    shuffle(allNames);
    idx = 0;
  };
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
