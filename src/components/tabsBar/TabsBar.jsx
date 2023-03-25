import { View } from "react-native";
import SearchBarIcon from "../../images/SearchBarIcon";
import HomeBarIcon from "../../images/HomeBarIcon";
import SettingsBarIcon from "../../images/SettingsBarIcon";
import BarContainerImage from "../../images/BarContainerImage";

import Styles from "./tabs-bar.scss";

const TabsBar = () => {
    return(
        <View style={Styles.bar__wrapper}>
            <BarContainerImage></BarContainerImage>
            <View style={Styles.bar__rectangle}></View>
            <View style={Styles.bar__container}>
                <SearchBarIcon style={Styles.bar__container_search}></SearchBarIcon>
                <HomeBarIcon style={Styles.bar__container_home}></HomeBarIcon>
                <SettingsBarIcon style={Styles.bar__container_settings}></SettingsBarIcon>
            </View>      
        </View>
    );
}

export default TabsBar;