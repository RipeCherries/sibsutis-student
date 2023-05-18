import {View, SafeAreaView, ScrollView, StyleSheet, Dimensions, TextInput, Pressable} from "react-native";
import BackButton from "../../components/backButton/BackButton";
import SearchFiled from "../../components/searchField/SearchField";
import Group from "../../components/groupItem/GroupTMP";
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';
import React, {useEffect, useState} from "react";

import Styles from "./group-search.scss";
import SearchIcon from "../../images/SearchIcon";
import TabsBar from "../../components/tabsBar/TabsBar";

const GroupSearch = () => {
    const [allGroups, setAllGroups] = useState([]);
    const [searchText, setSearchText] = useState("");

    const filteredData = allGroups.filter(item => item.toLowerCase().includes(searchText.toLowerCase()));
    GroupSearch.js
    useEffect(() => {
        const loadAllGroups = async () => {
            try {
                const data = await SecureStore.getItemAsync("allGroups");
                setAllGroups(JSON.parse(data));
            } catch (error) {
                console.log('Error loading data:', error);
            }
        };

        loadAllGroups();
    }, []);

    return (
        <View style={styles.container}>

            <View style={Styles.container__wrapper}>
                <View style={Styles.container__wrapper_search}>
                    {/*<SearchFiled/>*/}
                    <View style={Styles.search__container}>
                        <View style={Styles.search__container_wrapper}>
                            <SearchIcon/>
                            <TextInput
                                style={Styles.search__container_wrapper_input}
                                placeholder="Поиск по группе"
                                value={ searchText }
                                onChangeText={ text => setSearchText(text)}
                            />
                        </View>
                    </View>
                </View>

                <SafeAreaView style={styles.container__list}>
                    <ScrollView>
                        {
                            filteredData.map((item, index) => {
                                return (
                                    <Group key={ index } groupName={ item } />
                                )
                            })
                        }
                    </ScrollView>
                </SafeAreaView>
            </View>
            <TabsBar tab={1}></TabsBar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
    },
    container__list: {
        height: Dimensions.get('window').height - Constants.statusBarHeight - 151,
    },
});

export default GroupSearch;