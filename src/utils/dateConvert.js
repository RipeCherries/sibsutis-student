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

export const sortByTime = (jsonData) => {
    const sortedData = jsonData.sort((a, b) => {
        const timeA = new Date(`1970-01-01T${a.time}`);
        const timeB = new Date(`1970-01-01T${b.time}`);
        return timeA - timeB;
    });
    return sortedData;
}