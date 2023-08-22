import React from 'react';
import {View} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import CustomTabBarIconStyles from "./CustomTabBarIcon.styles";

const CustomTabBarIcon = ({focused, name}) => {
    const basicColor = "#FFFFFF";
    const focusedColor = '#187DC2';

    return (
        <View style={focused ? CustomTabBarIconStyles.customTabBarIconFocused : ''}>
            <Ionicons name={name} size={24} color={focused ? focusedColor : basicColor}/>
        </View>
    );
}

export default CustomTabBarIcon;