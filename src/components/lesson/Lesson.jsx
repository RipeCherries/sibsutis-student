import { View, Text } from "react-native";

import Styles from "./lesson.scss";

const Lesson = ({ time, title, teacher, room, isActive }) => {
    console.log(isActive);
    return (
        <View style={Styles.content}>
            <View style={Styles.content__timeline} >
                <View style={Styles.content__timeline_top} />
                <View
                    style={[Styles.content__timeline_point, isActive ? Styles.content__timeline_point_active : Styles.content__timeline_point_inactive]}
                />
                <View style={Styles.content__timeline_bottom} />
            </View>
            <View style={Styles.lesson__wrapper}>
                <View style={Styles.lesson__wrapper_container}>
                    <Text style={Styles.lesson__wrapper_container_time}>{time}</Text>
                    <Text style={Styles.lesson__wrapper_container_title}>{title}</Text>
                    <Text style={Styles.lesson__wrapper_container_info}>{teacher}</Text>
                    <Text style={Styles.lesson__wrapper_container_info}>{room}</Text>
                </View>
            </View>
        </View>
    );
}

export default Lesson;