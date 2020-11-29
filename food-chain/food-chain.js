export class Song {
  constructor() {
    this.animals = [
      'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n',
      'She swallowed the spider to catch the fly.\n',
      'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n',
      'She swallowed the cat to catch the bird.\n',
      'She swallowed the dog to catch the cat.\n',
      'She swallowed the goat to catch the dog.\n',
      'She swallowed the cow to catch the goat.\n',
      'I know an old lady who swallowed a horse.\nShe\'s dead, of course!\n'
    ];
    this.firstLine = [
      'I know an old lady who swallowed a fly.\n',
      'I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n',
      'I know an old lady who swallowed a bird.\nHow absurd to swallow a bird!\n',
      'I know an old lady who swallowed a cat.\nImagine that, to swallow a cat!\n',
      'I know an old lady who swallowed a dog.\nWhat a hog, to swallow a dog!\n',
      'I know an old lady who swallowed a goat.\nJust opened her throat and swallowed a goat!\n',
      'I know an old lady who swallowed a cow.\nI don\'t know how she swallowed a cow!\n',
    ];
  }
  verse(n) {
    if (n === 8) {
      return this.animals[n - 1];
    }
    let res = this.firstLine[n - 1];
    for (let i = n - 1; i >= 0; i--) {
      res += this.animals[i];
    }
    return res;
  }

  verses(start, end) {
    let res = '';
    for (let i = start; i <= end; i++) {
      res += this.verse(i) + '\n';
    }
    return res;
  }
}
