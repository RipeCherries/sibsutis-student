import {View, StyleSheet, Text, Dimensions, Pressable} from "react-native";
import Constants from 'expo-constants';

import Styles from "./settings-view.scss";
import SwitchTheme from "../../components/switch/SwitchTheme";
import TabsBar from "../../components/tabsBar/TabsBar";
import {useNavigation} from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import {useEffect, useState} from "react";

const SettingsView = () => {
    const [group, setGroup] = useState("");


    useEffect(() => {
        const loadGroup = async () => {
            try {
                const data = await SecureStore.getItemAsync("group");
                setGroup(data);
            } catch (error) {
                console.log('Error loading data:', error);
            }
        };

        loadGroup();
    }, []);

    const navigation = useNavigation();

    const navigateToSearchGroupPage = () => {
        navigation.navigate("SearchGroupPage");
    }

    return(
        <View style={styles.settings__container}>
            <View style={Styles.settings__wrapper}>

                <Text style={Styles.settings__wrapper_title}>
                    Настройки
                </Text>

            </View>

            <View style={Styles.settings__wrapper_line}></View>

            <View style={Styles.settings__wrapper}>
                <Pressable
                    onPress={navigateToSearchGroupPage}
                >
                    <View style={Styles.settings__wrapper_change}>
                        <Text style={Styles.settings__wrapper_change_title}>Изменить основную группу</Text>
                        <Text style={Styles.settings__wrapper_change_group}>{ group }</Text>
                    </View>
                </Pressable>

            </View>

            <View style={styles.menu}>
                <TabsBar tab={3}/>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    settings__container: {
        marginTop: Constants.statusBarHeight,
    },
    menu: {
        marginTop: Dimensions.get('window').height - 235,
    },
});

export default SettingsView;