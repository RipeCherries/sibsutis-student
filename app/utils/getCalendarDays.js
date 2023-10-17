function getDayTitle(dayIndex) {
  const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  return daysOfWeek[dayIndex];
}

export function getCalendarDays(date) {
  const daysUntilMonday = (date.getDay() === 0 ? 7 : date.getDay()) - 1;
  date.setDate(date.getDate() - daysUntilMonday - 7);

  const daysInWeek = 7;
  const countWeeks = 3;

  const result = [];

  for (let i = 0; i < countWeeks; i += 1) {
    const week = [];

    for (let j = 0; j < daysInWeek; j += 1) {
      const tmp = {};
      tmp.dayName = getDayTitle(j);
      tmp.day = date.getDate();
      tmp.obj = new Date(date);

      week.push(tmp);
      date.setDate(date.getDate() + 1);
    }

    result.push(week);
  }

  return result;
}
