import { View, Text } from "react-native";

import Styles from "./lesson.scss";
import {useEffect, useState} from "react";

const Lesson = ({ time, title, teacher, room }) => {
    const [isActive, setIsActive] = useState(false);

    // useEffect(() => {
    //     const checkTimeRange = () => {
    //         const currentTime = new Date();
    //         const [startTime, endTime] = time.split(' - ');
    //
    //         const [startHours, startMinutes] = startTime.split(':').map(Number);
    //         const [endHours, endMinutes] = endTime.split(':').map(Number);
    //
    //         const startDate = new Date();
    //         startDate.setHours(startHours);
    //         startDate.setMinutes(startMinutes);
    //
    //         const endDate = new Date();
    //         endDate.setHours(endHours);
    //         endDate.setMinutes(endMinutes);
    //
    //         setIsActive(currentTime >= startDate && currentTime <= endDate);
    //     };
    //
    //     const interval = setInterval(checkTimeRange, 100);
    //
    //     return () => clearInterval(interval);
    // }, [time]);

    return (
        <View style={Styles.content}>
            <View style={Styles.content__timeline} >
                <View style={Styles.content__timeline_top} />
                <View
                    style={[Styles.content__timeline_point, isActive ? Styles.content__timeline_point_active : Styles.content__timeline_point_inactive]}
                />
                <View style={Styles.content__timeline_bottom} />
            </View>
            <View style={ isActive ? Styles.lesson__wrapper_active : Styles.lesson__wrapper_inactive }>
                <View style={ isActive ? Styles.lesson__wrapper_active_container_active : Styles.lesson__wrapper_inactive_container_inactive}>
                    <Text style={ isActive ? Styles.lesson__wrapper_active_container_active_time_active : Styles.lesson__wrapper_inactive_container_inactive_time_inactive}>{time}</Text>
                    <Text style={ isActive ? Styles.lesson__wrapper_active_container_active_title_active : Styles.lesson__wrapper_inactive_container_inactive_title_inactive}>{title}</Text>
                    <Text style={ isActive ? Styles.lesson__wrapper_active_container_active_info_active : Styles.lesson__wrapper_inactive_container_inactive_info_inactive}>{teacher}</Text>
                    <Text style={ isActive ? Styles.lesson__wrapper_active_container_active_info_active : Styles.lesson__wrapper_inactive_container_inactive_info_inactive}>{room}</Text>
                </View>
            </View>
        </View>
    );
}

export default Lesson;