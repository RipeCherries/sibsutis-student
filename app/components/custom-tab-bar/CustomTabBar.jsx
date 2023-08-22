import React from 'react';
import {View, TouchableOpacity} from "react-native";

import CustomTabBarStyles from "./CustomTabBar.styles";

const CustomTabBar = ({state, descriptors, navigation}) => {
    return (
        <View style={CustomTabBarStyles.customTabBarContainer}>
            {
                state.routes.map((route, index) => {
                    const {options} = descriptors[route.key];
                    const icon = options.tabBarIcon;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate({name: route.name, merge: true});
                        }
                    }

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key
                        })
                    }

                    return (
                        <TouchableOpacity
                            style={CustomTabBarStyles.customTabBarButton}
                            accessibilityRole='button'
                            accessibilityState={isFocused ? {selected: true} : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            key={index}
                        >
                            <View>
                                {icon && icon(isFocused)}
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    );
}

export default CustomTabBar;