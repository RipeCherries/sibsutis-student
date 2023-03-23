import { View, Text  } from "react-native";
import BackArrowIcon from "../../images/BackArrowIcon";

import Styles from "./back-button.scss";

const BackButton = () => {
    return(
        <View style={Styles.back__container}>
            <BackArrowIcon/>
            <Text style={Styles.back__container_text}>
                Назад
            </Text>
        </View>
    );
}

export default BackButton;