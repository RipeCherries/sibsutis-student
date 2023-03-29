const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
                 "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

const weekdays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

export const getDate = (currentDate) => {
    const day = currentDate.getDate();      // день (1 - 31)
    const month = currentDate.getMonth();   // месяц (0 - 11)
    const year = currentDate.getFullYear(); // год

    return months[month] + " " + day + ", " + year;
}

export const getWeekday = (currentDate) => {
    const weekday = currentDate.getDay();   // день недели (0 - 6) по европейскому стилю

    return weekdays[weekday];
}