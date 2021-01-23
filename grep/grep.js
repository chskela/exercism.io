const fs = require("fs");

const main = async () => {
  const argv = process.argv;

  const flags = getFlags(argv);
  const files = getFiles(argv);

  const vFlag = getFlag(flags, "-v");
  const nFlag = getFlag(flags, "-n");
  const iFlag = getFlag(flags, "-i");
  const lFlag = getFlag(flags, "-l");
  const xFlag = getFlag(flags, "-x");

  let pattern = getPettern(argv);
  pattern = xFlag ? `^(${pattern})$` : pattern;
  pattern = iFlag ? new RegExp(pattern, "i") : pattern;

  if (files.length === 1) {
    const res = await readFile(files[0]);
    console.log(res);
  } else {
    const res = await processArray(files);
    res.forEach((item) => console.log(item));
  }

  async function processArray(files) {
    const result = [];
    for (const file of files) {
      result.push(await readFile(file, true));
    }
    return result.filter(Boolean);
  }

  async function readFile(file, pathFile = false) {
    const data = await fs.promises.readFile(file, "utf8");
    const result = data
      .split("\n")
      .map((line, index) => {
        const match = vFlag ? !line.match(pattern) : line.match(pattern);
        if (match) {
          const numberLine = nFlag ? `${index + 1}:` : "";
          const path = pathFile ? `${file}:` : "";
          return `${path}${numberLine}${line}`;
        }
      })
      .filter(Boolean);

    const output = result.join("\n");

    if (output && lFlag) {
      return file;
    } else {
      return output;
    }
  }

  function getFlags(argv) {
    return argv.filter((arg) => arg.match(/^\-[vnilx]$/));
  }
  function getFlag(arr, f) {
    return arr.find((flag) => flag === f);
  }

  function getFiles(argv) {
    return argv.filter(
      (arg, idx) => idx > 2 && arg.match(/\/([a-zA-Z0-9_\-]+)+\//)
    );
  }
  function getPettern(argv) {
    const res = argv.filter(
      (arg, idx) =>
        !(idx > 2 && arg.match(/\/([a-zA-Z0-9_\-]+)+\//)) &&
        !arg.match(/^\-[vnilx]$/)
    );
    return res[2];
  }
};

main();
