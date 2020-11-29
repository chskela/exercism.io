export class House {
  static verse(n) {
    const strings = [
      ' the house that Jack built.',
      ' the malt',
      ' the rat',
      ' the cat',
      ' the dog',
      ' the cow with the crumpled horn',
      ' the maiden all forlorn',
      ' the man all tattered and torn',
      ' the priest all shaven and shorn',
      ' the rooster that crowed in the morn',
      ' the farmer sowing his corn',
      ' the horse and the hound and the horn'
    ];
    const startString = [
      'that lay in',
      'that ate',
      'that killed',
      'that worried',
      'that tossed',
      'that milked',
      'that kissed',
      'that married',
      'that woke',
      'that kept',
      'that belonged to'
    ];
    const firstStart = 'This is';

    let res = [firstStart + strings[n - 1]];
    for (let i = n - 2; i >= 0; i--) {
      res.push(startString[i] + strings[i]);
    }
    return res;
  }

  static verses(start, end) {
    let res = [];
    for (let i = start; i <= end; i++) {
      res.push(...this.verse(i), '');
    }
    res.pop();
    return res;
  }
}
