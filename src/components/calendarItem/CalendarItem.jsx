import React, {useEffect, useState} from "react";
import { View } from "react-native";
import Day from "../day/Day";

import Styles from "./calendar-item.scss"
import {getDate, getWeekday} from "../../utils/dateConvert";
import {getCalendarDays} from "../../utils/getCalendarDays";

const CalendarItem = ({ weekdays, choosenDateFun, choosenDate }) => {
    const [d, setD] = useState(new Date());

    return (
        <View style={Styles.container}>
            {
                weekdays.map((item, index) => {
                    return (
                        <Day
                            isActive={d.getDate() === item.date}
                            key={ index }
                            title={ item.title }
                            date={ item.date }
                            choosenDateFun={choosenDateFun}
                            choosenDate={choosenDate}
                        />
                    );
                })
            }
        </View>
    );
}

export default CalendarItem;