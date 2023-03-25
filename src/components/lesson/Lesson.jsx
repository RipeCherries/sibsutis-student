import { View, Text } from "react-native";

import Styles from "./lesson.scss";

const Lesson = ({ time, title, teacher, room }) => {
    return(
        <View style={Styles.lesson__wrapper}>
            <View style={Styles.lesson__wrapper_container}>
                <Text style={Styles.lesson__wrapper_container_time}>{time}</Text>
                <Text style={Styles.lesson__wrapper_container_title}>{title}</Text>
                <Text style={Styles.lesson__wrapper_container_info}>{teacher}</Text>
                <Text style={Styles.lesson__wrapper_container_info}>{room}</Text>
            </View>
        </View>
    );
}

export default Lesson;