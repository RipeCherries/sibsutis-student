import React from "react";
import { View } from "react-native";
import Day from "../day/Day";

import Styles from "./calendar-item.scss"

const CalendarItem = ({ weekdays }) => {
    return (
        <View style={Styles.container}>
            {
                weekdays.map((item, index) => {
                    return (
                        <Day key={ index } title={ item.title } date={ item.date } />
                    );
                })
            }
        </View>
    );
}

export default CalendarItem;