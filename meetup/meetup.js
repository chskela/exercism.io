//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const meetup = (year, month, descriptor, day) => {
  const firstDateMonth = new Date(Date.UTC(year, month - 1, 1));
  const lastDateMonth = new Date(Date.UTC(year, month, 0));
  const teenthDateMonth = new Date(Date.UTC(year, month - 1, 13));
  const firstDayMonth = firstDateMonth.getDay();
  const lastDayMonth = lastDateMonth.getDay();
  const teenthDayMonth = teenthDateMonth.getDay();
  const dayWeek = day === 'Monday' ? 1 :
    day === 'Tuesday' ? 2 :
      day === 'Wednesday' ? 3 :
        day === 'Thursday' ? 4 :
          day === 'Friday' ? 5 :
            day === 'Saturday' ? 6 : 0;

  if (descriptor === 'last') {
    const dayMonthWithEnd = lastDayMonth - dayWeek;
    const dayMonth = dayMonthWithEnd + ((dayMonthWithEnd < 0) ? 7 : 0);
    return new Date(Date.UTC(year, month, - dayMonth));
  }

  if (descriptor === 'teenth') {
    const dayMonthWithTeenth = dayWeek - teenthDayMonth;
    const dayMonth = 13 + dayMonthWithTeenth + ((dayMonthWithTeenth < 0) ? 7 : 0);
    return new Date(Date.UTC(year, month - 1, dayMonth));
  }

  const dayMonthWithStart = dayWeek - firstDayMonth;
  const dayMonth = dayMonthWithStart + 1 + ((dayMonthWithStart < 0) ? 7 : 0);

  if (descriptor === 'first') {
    return new Date(Date.UTC(year, month - 1, dayMonth));
  }

  if (descriptor === 'second') {
    return new Date(Date.UTC(year, month - 1, dayMonth + 7));
  }

  if (descriptor === 'third') {
    return new Date(Date.UTC(year, month - 1, dayMonth + 14));
  }

  if (descriptor === 'fourth') {
    return new Date(Date.UTC(year, month - 1, dayMonth + 21));
  }

  if (descriptor === 'fifth') {
    return new Date(Date.UTC(year, month - 1, dayMonth + 28));
  }



};


