import React, {useCallback} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './app/navigation/TabNavigation';
import {useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),         // 400
        'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf')                // 700
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }


    return (
        <View style={{flex: 1}} onLayout={onLayoutRootView}>
            <NavigationContainer>
                <TabNavigation/>
            </NavigationContainer>
        </View>
    );
}
