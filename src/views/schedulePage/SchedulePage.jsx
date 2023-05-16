import React, { useState, useEffect } from "react";
import { View, StyleSheet, SafeAreaView, ScrollView, Text, Dimensions } from "react-native";
import Constants from "expo-constants";

import Styles from "./schedule-page.scss";
import { getDate, getWeekday } from "../../utils/dateConvert";
import { getCalendarDays } from "../../utils/getCalendarDays";
import Calendar from "../../components/calendar/Calendar";
import ScheduleItem from "../../components/scheduleItem/ScheduleItem";

import TabsBar from "../../components/tabsBar/TabsBar";

const schedule = [
    {
        time: "09:50 - 11:25",
        title: "Визуальное программирование и человеко-машинной взаимодействие (лк)",
        teacher: "Павский К. В.",
        room: "а. 210 (К.1)",
        isActive: false
    },
    {
        time: "09:50 - 11:25",
        title: "Визуальное программирование и человеко-машинной взаимодействие (лк)",
        teacher: "Павский К. В.",
        room: "а. 210 (К.1)",
        isActive: false
    },
    {
        time: "09:50 - 11:25",
        title: "Визуальное программирование и человеко-машинной взаимодействие (лк)",
        teacher: "Павский К. В.",
        room: "а. 210 (К.1)",
        isActive: false
    },
    {
        time: "11:40 - 13:15",
        title: "Программирование мобильных устройств (лк)",
        teacher: "Нечта И. В.",
        room: "а. 202 (К.1)",
        isActive: true
    },
    {
        time: "13:45 - 15:20",
        title: "Алгоритмы и вычислительные методы оптимизации (лк)",
        teacher: "Галкина М. Ю.",
        room: "а. 218 (К.1)",
        isActive: false
    },
    {
        time: "15:35 - 17:10",
        title: "Безопасность жизнедеятельности (лк)",
        teacher: "Абрамова Е. С.",
        room: "а. 218 (К.1)",
        isActive: false
    },
]


const SchedulePage = () => {
    const d = new Date();
    // setCurrentDate(getDate(d));
    // setCurrentWeekday(getWeekday(d));

    // setCalendarDays(getCalendarDays(d));

    const [currentDate, setCurrentDate] = useState(getDate(d));
    const [currentWeekday, setCurrentWeekday] = useState(getWeekday(d));
    const [calendarDays, setCalendarDays] = useState(getCalendarDays(d));

    // useEffect(() => {
    //     console.log("ABOBA");
    //     const d = new Date();
    //     setCurrentDate(getDate(d));
    //     setCurrentWeekday(getWeekday(d));
    //
    //     setCalendarDays(getCalendarDays(d));
    // }, []);

    console.log(calendarDays);
    return (
        <View style={styles.container}>
            <View style={Styles.content}>
                <View style={Styles.content__date}>
                    <Text style={Styles.content__date_full}>{ currentDate }</Text>
                    <Text style={Styles.content__date_weekday}>{ currentWeekday }</Text>
                </View>
                <View style={Styles.content__calendar}>
                    <Calendar calendarDays={calendarDays} />
                </View>

                <SafeAreaView style={styles.schedule__container}>
                    <ScrollView>
                        <ScheduleItem style={Styles.content__schedule} schedule={ schedule } />
                    </ScrollView>
                </SafeAreaView>


            </View>
            <TabsBar>

            </TabsBar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
    },

    schedule__container: {
        height: Dimensions.get('window').height - Constants.statusBarHeight - 260,
    },
});

export default SchedulePage;