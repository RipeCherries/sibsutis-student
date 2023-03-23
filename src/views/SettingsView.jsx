import { View, StyleSheet, Text } from "react-native";
import Constants from 'expo-constants';

import Styles from "./settings-view.scss";
import SwitchTheme from "../components/SwitchTheme";

const SettingsView = () => {
    return(
        <View style={styles.settings__container}>
            <View style={Styles.settings__wrapper}>

                <Text style={Styles.settings__wrapper_title}>
                    Настройки
                </Text>

            </View>

            <View style={Styles.settings__wrapper_line}></View>

            <View style={Styles.settings__wrapper}>
                <View style={Styles.settings__wrapper_theme}>
                    <Text style={Styles.settings__wrapper_theme_text}>Тёмная тема</Text>
                    <SwitchTheme style={Styles.settings__wrapper_theme_switch}></SwitchTheme>
                </View>
                <Text style={Styles.settings__wrapper_change}>Изменить основную группу</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    settings__container: {
        marginTop: Constants.statusBarHeight,
    },
});

export default SettingsView;