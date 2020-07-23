export const convert = (ocr) => {
  const pattern = {
    ' _ | ||_|   ': '0',
    '     |  |   ': '1',
    ' _  _||_    ': '2',
    ' _  _| _|   ': '3',
    '   |_|  |   ': '4',
    ' _ |_  _|   ': '5',
    ' _ |_ |_|   ': '6',
    ' _   |  |   ': '7',
    ' _ |_||_|   ': '8',
    ' _ |_| _|   ': '9',
  };
  const lineByLine = ocr.split('\n');
  const result = [];

  const oneLine = line => {
    const r = [];
    for (let i = 0; i < line[0].length; i += 3) {
      r.push(line.map((it) => it.slice(i, i + 3)).join(''));
    }
    return r;
  };


  for (let i = 0; i < lineByLine.length; i += 4) {
    result
      .push(oneLine(lineByLine.slice(i, i + 4))
        .map(i => pattern[i] || '?')
        .join(''));
  }

  return result.join(',');
};
