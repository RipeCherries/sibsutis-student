import {View, Text, StyleSheet, Image, Dimensions} from "react-native";
import Constants from "expo-constants";
import Logo from "../../images/Logo";

import Styles from "./start-page.scss"
import {Pressable} from "react-native";
import StartMan from "../../images/StartMan";
import {ImageBackground} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";

const StartPage = () => {
    const navigation = useNavigation();

    const navigateToSearchGroupPage = () => {
        navigation.navigate("SearchGroupPage");
    }

    return (
        <ImageBackground
            source={require("./bg.png")}
            style={styles.bg}
        >
            <View style={styles.container}>
                <View style={Styles.wrapper}>
                    <Logo />
                    <Text style={Styles.wrapper__title}>РАСПИСАНИЕ ЗАНЯТИЙ</Text>
                    <Pressable
                        style={Styles.wrapper__btn}
                        onPress={navigateToSearchGroupPage}
                    >
                        <Text style={Styles.wrapper__btn_title}>Выбрать группу</Text>
                    </Pressable>
                </View>
                <View style={Styles.bg__man_img}>
                    <StartMan />
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        height: Dimensions.get('window').height
    },
    bg: {
        height: Dimensions.get('window').height + Constants.statusBarHeight,
    }
});

export default StartPage;