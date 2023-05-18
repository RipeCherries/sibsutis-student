import {View, Text, Pressable} from "react-native";

import Styles from "./day.scss";
import {useState} from "react";

const Day = ({ isActive, title, date, choosenDateFun, choosenDate }) => {
    // const [isActiveDay, setIsActiveDay] = useState(false);
    const handlePress = () => {
        choosenDateFun(date, title);
        // if ()
        // setIsActiveDay(true);
    };

    return(
        <Pressable
            onPress={handlePress}
        >
            <View style={ choosenDate === date && !isActive ? [Styles.day__wrapper, Styles.day__wrapper_active] : Styles.day__wrapper }>
                {/*<View style={isActive ? Styles.day__wrapper_title_active : Styles.day__wrapper_title}>*/}
                    <Text style={ isActive ? Styles.day__wrapper_title_active : Styles.day__wrapper_title}>{title}</Text>
                    <Text style={ isActive ? Styles.day__wrapper_date_active : Styles.day__wrapper_date}>{date}</Text>
                {/*</View>*/}
            </View>
        </Pressable>
    );
}

export default Day;