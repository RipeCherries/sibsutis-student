import { getWeekday } from "./dateConvert";
import { cutWeekday } from "./strings";

export const getCalendarDays = (date) => {
    // нахождение начала недели (ПН)
    // date.getDate() - date.getDay() = вернет в начало недели,
    // + 1 = преобразует в наш стиль календаря,
    // - 7 = откатит на неделю назад
    date.setDate(date.getDate() - date.getDay() + 1 - 7);

    const daysInWeek = 7;
    const countWeeks = 3;

    const result = [];

    for (let i = 0; i < countWeeks; ++i) {
        const week = [];

        for (let j = 0; j < daysInWeek; ++j) {
            const tmp = {};
            tmp.title = cutWeekday(getWeekday(date));
            tmp.date = date.getDate();

            week.push(tmp);
            date.setDate(date.getDate() + 1);
        }

        result.push(week);
    }

    return result;
}