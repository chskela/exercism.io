export class ResistorColorTrio {
  constructor(colors) {
    const rating = {
      black: 0,
      brown: 1,
      red: 2,
      orange: 3,
      yellow: 4,
      green: 5,
      blue: 6,
      violet: 7,
      grey: 8,
      white: 9
    };

    if (colors.some(color => !rating.hasOwnProperty(color))) {
      throw new Error("invalid color");
    }

    const [color1, color2, color3] = [...colors];

    const fullMeaning = (rating[color1] * 10 + rating[color2]) * Math.pow(10, rating[color3]);
    const unit = fullMeaning % 1000 === 0 ? 'kilo' : '';
    const value = unit === '' ? fullMeaning : fullMeaning / 1000;

    this._label = `Resistor value: ${value} ${unit}ohms`;
  }

  get label() {
    return this._label;
  }
}
