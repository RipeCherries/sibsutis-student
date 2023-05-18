import {Pressable, View} from "react-native";

import SearchBarIconBlue from "../../images/SearchBarIconBlue";
import HomeBarIconBlue from "../../images/HomeBarIconBlue";
import SettingsBarIconBlue from "../../images/SettingsBarIconBlue";

import SearchBarIcon from "../../images/SearchBarIcon";
import HomeBarIcon from "../../images/HomeBarIcon";
import SettingsBarIcon from "../../images/SettingsBarIcon";

import BarContainerImage from "../../images/BarContainerImage";


import Styles from "./tabs-bar.scss";
import {useNavigation, useRoute} from "@react-navigation/native";

const TabsBar = ({ tab }) => {
    const navigation = useNavigation();

    const navigateToSearchGroupPage = () => {
        navigation.navigate("SearchGroupTMP");
    }

    const navigateToSchedulePage = () => {
        navigation.navigate("SchedulePage");
    }

    const navigateSettingsPage = () => {
        navigation.navigate("SettingsPage");
    }

    return(
        <View style={Styles.bar__wrapper}>
            <BarContainerImage></BarContainerImage>
            <View style={Styles.bar__container}>
                <Pressable
                    onPress={navigateToSearchGroupPage}
                >
                    <View style={ tab === 1 ? [Styles.bar__container_rectangle, Styles.bar__container_rectangle_active] : Styles.bar__container_rectangle }>
                        {
                            tab === 1 ? (
                                <SearchBarIconBlue style={Styles.bar__container_icon}></SearchBarIconBlue>
                            ) : (
                                <SearchBarIcon style={Styles.bar__container_icon}></SearchBarIcon>
                            )
                        }
                    </View>
                </Pressable>
                <Pressable
                    onPress={navigateToSchedulePage}
                >
                    <View style={tab === 2 ? [Styles.bar__container_rectangle, Styles.bar__container_rectangle_active] : Styles.bar__container_rectangle}>
                        {
                            tab === 2 ? (
                                <HomeBarIconBlue style={Styles.bar__container_icon}></HomeBarIconBlue>
                            ) : (
                                <HomeBarIcon style={Styles.bar__container_icon}></HomeBarIcon>
                            )
                        }
                    </View>
                </Pressable>
                <Pressable
                    onPress={navigateSettingsPage}
                >
                    <View style={tab === 3 ? [Styles.bar__container_rectangle, Styles.bar__container_rectangle_active] : Styles.bar__container_rectangle}>
                        {
                            tab === 3 ? (
                                <SettingsBarIconBlue style={Styles.bar__container_icon}></SettingsBarIconBlue>
                            ) : (
                                <SettingsBarIcon style={Styles.bar__container_icon}></SettingsBarIcon>
                            )
                        }
                    </View>
                </Pressable>
            </View>      
        </View>
    );
}

export default TabsBar;