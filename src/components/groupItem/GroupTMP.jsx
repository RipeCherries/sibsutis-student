import {StyleSheet, View, Text, Pressable} from "react-native";
import GroupIcon from "../../images/GroupIcon";
import {useNavigation, useRoute} from "@react-navigation/native";

import Styles from "./group.scss";
import * as SecureStore from "expo-secure-store";

const Group = ({ groupName }) => {
    const navigation = useNavigation();

    const navigateToSchedulePage = () => {
        navigation.navigate("SchedulePageTMP", { group: groupName });
    }

    return(
        <Pressable
            onPress={navigateToSchedulePage}
        >
            <View style={Styles.group__container}>
                <View style={Styles.group__wrapper}>
                    <GroupIcon />
                    <Text style={Styles.group__container_text}>
                        { groupName }
                    </Text>
                </View>
                <View style={Styles.group__container_del}></View>
            </View>
        </Pressable>
    );
}

export default Group;