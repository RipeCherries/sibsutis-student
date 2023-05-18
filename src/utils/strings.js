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

export const getFullWeekday = (value) => {
    const keys = Object.keys(shortWeekdays);
    for (let i = 0; i < keys.length; i++) {
        if (shortWeekdays[keys[i]] === value) {
            return keys[i];
        }
    }
};