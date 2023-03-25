import { View } from "react-native";
import Day from "../day/Day";

import Styles from "./calendar.scss";

const Calendar = () => {
    return(
        <View style={Styles.calendar__wrapper}>
            <View style={Styles.calendar__wrapper_container}>
                <Day title={"Пн"} date={"21"}></Day>
                <Day title={"Вт"} date={"22"}></Day>
                <Day title={"Ср"} date={"23"}></Day>
                <Day title={"Чт"} date={"24"}></Day>
                <Day title={"Пт"} date={"25"}></Day>
                <Day title={"Сб"} date={"26"}></Day>
                <Day title={"Вс"} date={"27"}></Day>
            </View>      
        </View>
    );
}

export default Calendar;