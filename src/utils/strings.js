const shortWeekdays = {
    "Понедельник": "Пн",
    "Вторник": "Вт",
    "Среда": "Ср",
    "Четверг": "Чт",
    "Пятница": "Пт",
    "Суббота": "Сб",
    "Воскресенье": "Вс"
}

export const cutWeekday = (weekday) => {
    return shortWeekdays[weekday];
}