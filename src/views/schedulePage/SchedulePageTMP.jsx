import React, {useEffect, useState} from "react";
import {Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import Constants from "expo-constants";

import Styles from "./schedule-page.scss";
import {getDate, getWeekday} from "../../utils/dateConvert";
import {getCalendarDays} from "../../utils/getCalendarDays";
import Calendar from "../../components/calendar/Calendar";

import TabsBar from "../../components/tabsBar/TabsBar";
import * as SecureStore from "expo-secure-store";
import ScheduleItem from "../../components/scheduleItem/ScheduleItem";

import {getFullWeekday} from "../../utils/strings";
import {sortByTime} from "../../utils/dateConvert";
import {useRoute} from "@react-navigation/native";
import FreeDay from "../../images/FreeDay";
import * as FileSystem from "expo-file-system";

const SchedulePage = (props) => {
    const route = useRoute();
    const { group } = route.params;

    const d = new Date();

    const [currentDate, setCurrentDate] = useState(getDate(d));
    const [currentWeekday, setCurrentWeekday] = useState(getWeekday(d));
    const [calendarDays, setCalendarDays] = useState(getCalendarDays(d));

    const dd = new Date();
    const [choosenDate, setChoosenDate] = useState(dd.getDate());
    const [choosenWeekday, setChoosenWeekday] = useState(getFullWeekday(choosenDate));

    const filterData = (schedule, group, choosenDate, choosenWeekday, startSemestr) => {
        const ddd = new Date();
        ddd.setDate(choosenDate);

        return schedule.filter(item => {
            const timeDiff = Math.abs(ddd.getTime() - startSemestr.getTime());
            const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
            const evenOrOddWeek = Math.floor(daysDiff / 7) % 2 === 1 ? 0 : 1;

            return item.groupName === group && item.weekday === choosenWeekday && item.week === evenOrOddWeek;
        });
    };

    const changeChoosenDate = (choise, title) => {
        setChoosenDate(choise);
        setChoosenWeekday(getFullWeekday(title));
    };

    const [schedule, setSchedule] = useState([]);
    const [startSemestr, setStartSemestr] = useState(null);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const loadSchedule = async () => {
            try {
                const fileUri = FileSystem.documentDirectory + 'schedule.json';
                const content = await FileSystem.readAsStringAsync(fileUri);
                setSchedule(JSON.parse(content));
                // console.log('Data loaded from file:', content);
            } catch (error) {
                console.log('Error loading data from file:', error);
            }
            // try {
            //     const data = await SecureStore.getItemAsync("schedule");
            //     setSchedule(JSON.parse(data));
            // } catch (error) {
            //     console.log('Error loading data:', error);
            // }
        };

        loadSchedule();
    }, []);

    useEffect(() => {
        const loadStartSemestr = async () => {
            try {
                const data = await SecureStore.getItemAsync("startSemestr");
                setStartSemestr(new Date(parseInt(data)));
            } catch (error) {
                console.log('Error loading data:', error);
            }
        };

        loadStartSemestr();
    }, []);

    useEffect(() => {
        if (schedule && group && choosenDate && choosenWeekday && startSemestr) {
            const tmp = filterData(schedule, group, choosenDate, choosenWeekday, startSemestr);
            setFilteredData(tmp);
        }
    }, [schedule, group, choosenDate, choosenWeekday, startSemestr]);

    return (
        <View style={styles.container}>
            <View style={Styles.content}>
                <View style={Styles.content__date}>
                    <View style={Styles.show}>
                        <Text style={Styles.content__date_full}>{ currentDate }</Text>
                        <Text style={Styles.group}>{ group }</Text>
                    </View>
                    <Text style={Styles.content__date_weekday}>{ currentWeekday }</Text>
                </View>
                <View style={Styles.content__calendar}>
                    <Calendar calendarDays={calendarDays} choosenDateFun={changeChoosenDate} choosenDate={choosenDate}/>
                </View>
                {
                    filteredData.length === 0 ? (
                        <FreeDay style={Styles.freeday_img} />
                    ) : (
                        <SafeAreaView style={styles.schedule__container}>
                            <ScrollView>
                                <ScheduleItem style={styles.content__schedule} schedule={sortByTime(filteredData)}
                                />
                            </ScrollView>
                        </SafeAreaView>
                    )
                }
            </View>
            <TabsBar tab={1}></TabsBar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
    },

    schedule__container: {
        height: Dimensions.get('window').height - Constants.statusBarHeight - 279,
    },
});

export default SchedulePage;