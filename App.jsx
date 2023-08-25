import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TabNavigation from './app/navigation/TabNavigation';
import { ThemeContext } from './app/context/ThemeContext';
import { useTheme } from './app/hooks/useTheme';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'), // 400
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'), // 700
  });

  const {
    theme,
    toggleTheme,
  } = useTheme();

  const themeContextValue = useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme, toggleTheme]);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </View>
    </ThemeContext.Provider>
  );
}
