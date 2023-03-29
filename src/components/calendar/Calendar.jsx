import {Dimensions, ScrollView, View} from "react-native";

import Styles from "./calendar.scss";
import React from "react";
import CalendarItem from "../calendarItem/CalendarItem";

const { width } = Dimensions.get('window');

const Calendar = ({ calendarDays }) => {
    return (
        <View style={Styles.calendar__container}>
            <ScrollView
                horizontal={ true }
                decelerationRate={ 0 }
                snapToInterval={ width - 70 }
                pagingEnabled={ true }
                contentOffset={ {x: width - 70, y:0 } }
                showsHorizontalScrollIndicator={false}
                snapToAlignment={ "center" }
            >
                <CalendarItem weekdays={ calendarDays[0] } />
                <CalendarItem weekdays={ calendarDays[1] } />
                <CalendarItem weekdays={ calendarDays[2] } />
            </ScrollView>
        </View>
    );
}

export default Calendar;