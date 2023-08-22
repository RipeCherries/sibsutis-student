import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './app/navigation/TabNavigation';

export default function App() {
    return (
        <View style={{flex: 1}}>
            <NavigationContainer>
                <TabNavigation/>
            </NavigationContainer>
        </View>
    );
}