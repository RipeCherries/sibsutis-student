import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from '../../components/custom-tab-bar/CustomTabBar';
import SearchStack from './SearchStack';
import SettingsStack from './SettingsStack';
import CustomTabBarIcon from '../../components/custom-tab-bar-icon/CustomTabBarIcon';
import { Home } from '../../screens';

function MainNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: (focused) => (
            <CustomTabBarIcon focused={focused} name="ios-search" />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (focused) => (
            <CustomTabBarIcon focused={focused} name="home" />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarIcon: (focused) => (
            <CustomTabBarIcon focused={focused} name="settings" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainNavigation;
