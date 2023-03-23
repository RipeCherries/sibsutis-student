import { View, SafeAreaView, ScrollView, StyleSheet, Dimensions } from "react-native";
import BackButton from "../components/BackButton";
import SearchFiled from "../components/SearchField";
import Group from "../components/Group";
import Constants from 'expo-constants';

import Styles from "./group-search.scss";

const GroupSearch = () => {
    return (
        <View style={styles.container}>

            <View style={Styles.container__wrapper}>
                <BackButton/>

                <View style={Styles.container__wrapper_search}>
                    <SearchFiled/>
                </View>

                <SafeAreaView style={styles.container__list}>
                    <ScrollView>
                        <Group groupName="ИП-016" />
                        <Group groupName="ИП-016" />
                        <Group groupName="ИП-016" />
                        <Group groupName="ИП-016" />
                        <Group groupName="ИП-016" />
                        <Group groupName="ИП-016" />
                        <Group groupName="ИП-016" />
                        <Group groupName="ИП-016" />
                        <Group groupName="ИП-016" />
                        <Group groupName="ИП-016" />
                        <Group groupName="ИП-016" />
                        <Group groupName="ИП-016" />
                        <Group groupName="ИП-016" />
                        <Group groupName="ИП-016" />
                        <Group groupName="ИП-016" />
                        <Group groupName="ИП-016" />
                        <Group groupName="ИП-016" />
                        <Group groupName="ИП-016" />
                        <Group groupName="ИП-016" />
                        <Group groupName="ИП-016" />
                        <Group groupName="ИП-016" />
                        <Group groupName="ИП-016" />
                        <Group groupName="ИП-016" />
                        <Group groupName="ИП-016" />    
                    </ScrollView>
                </SafeAreaView>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
    },
    container__list: {
        height: Dimensions.get('window').height - Constants.statusBarHeight - 126,
    },
});

export default GroupSearch;