import { View, Text } from "react-native";

import Styles from "./day.scss";

const Day = ({ title, date }) => {
    return(
        <View style={Styles.day__wrapper}>
            <Text style={Styles.day__wrapper_title}>{title}</Text>
            <Text style={Styles.day__wrapper_date}>{date}</Text>
        </View>
    );
}

export default Day;