export function getCalendarDays(date) {
  date.setDate(date.getDate() - date.getDay() + 1 - 7);

  const daysInWeek = 7;
  const countWeeks = 3;

  const result = [];

  for (let i = 0; i < countWeeks; ++i) {
    const week = [];

    for (let j = 0; j < daysInWeek; ++j) {
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

function getDayTitle(dayIndex) {
  const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  return daysOfWeek[dayIndex];
}
