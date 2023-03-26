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
            <View style={Styles.bar__container}>
                <View style={Styles.bar__container_rectangle}>
                    <SearchBarIcon style={Styles.bar__container_icon}></SearchBarIcon>
                </View>
                <View style={Styles.bar__container_rectangle}>
                    <HomeBarIcon style={Styles.bar__container_icon}></HomeBarIcon>
                </View>
                <View style={[Styles.bar__container_rectangle, Styles.bar__container_rectangle_active]}>
                    <SettingsBarIcon style={Styles.bar__container_icon}></SettingsBarIcon>
                </View>
            </View>      
        </View>
    );
}

export default TabsBar;