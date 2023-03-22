import { StyleSheet, View, Text } from "react-native";
import GroupIcon from "../images/GroupIcon";

import Styles from "./group.scss";

const Group = ({ groupName }) => {
    return(
        <View style={Styles.group__container}>
            <View style={Styles.group__wrapper}>
                <GroupIcon />
                <Text style={Styles.group__container_text}>
                    { groupName }
                </Text>
            </View>
            <View style={Styles.group__container_del}></View>
        </View>
    );
}

export default Group;