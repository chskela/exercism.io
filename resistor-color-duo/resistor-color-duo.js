//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (arrColors) => {
  const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
  return Number(arrColors.map((color, index) => (index <= 1) ? COLORS.indexOf(color) : null).join(''));
};
