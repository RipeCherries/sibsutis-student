import { View } from "react-native";
import SearchBarIcon from "../../images/SearchBarIcon";
import HeaderBar from "../../images/HeaderBar";
import HomeBarIcon from "../../images/HomeBarIcon";
import SettingsBarIcon from "../../images/SettingsBarIcon";

import Styles from "./tabs-bar.scss";

const TabsBar = () => {
    return(
        <View style={Styles.bar__wrapper}>
            <HeaderBar></HeaderBar>
            <View style={Styles.bar__container}>
                <SearchBarIcon style={Styles.bar__container_search}></SearchBarIcon>
                <HomeBarIcon style={Styles.bar__container_home}></HomeBarIcon>
                <SettingsBarIcon style={Styles.bar__container_settings}></SettingsBarIcon>
            </View>
            <View style={Styles.bar__rectangle}></View>
        </View>
    );
}

export default TabsBar;