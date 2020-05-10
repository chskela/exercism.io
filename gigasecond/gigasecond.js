//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  const GIGASECOND = 1000000000;
  const startDate = new Date(date);
  const someDate = new Date();
  someDate.setTime(startDate.getTime() + GIGASECOND * 1000);
  return someDate;
};
