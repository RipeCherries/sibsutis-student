import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import {Search, Home, Settings} from '../screens';
import CustomTabBar from '../components/custom-tab-bar/CustomTabBar';
import CustomTabBarIcon from "../components/custom-tab-bar-icon/CustomTabBarIcon";

function TabNavigation() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}
            tabBar={(props) => <CustomTabBar {...props} />}
        >
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: (focused) => (
                        <CustomTabBarIcon focused={focused} name='ios-search' />
                    ),
                }}
            />
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: (focused) => (
                        <CustomTabBarIcon focused={focused} name='home' />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: (focused) => (
                        <CustomTabBarIcon focused={focused} name='settings'/>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigation;
