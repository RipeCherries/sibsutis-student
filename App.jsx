import React, { useState, useEffect, useMemo } from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { ToastProvider } from 'react-native-toast-notifications';
import { Provider, useDispatch } from 'react-redux';
import Navigation from './app/navigation/Navigation';
import { ThemeContext } from './app/context/ThemeContext';
import { useTheme } from './app/hooks/useTheme';
import store from './app/store/store';
import Splash from './app/screens/splash/Splash';
import { getDataFromStorage } from './app/store/asyncStorage';
import { setUser } from './app/store/userSlice';

function AppInner() {
  const [appIsReady, setAppIsReady] = useState(true);

  const dispatch = useDispatch();

  const [fontsLoaded, fontError] = useFonts({
    'Montserrat-ExtraLight': require('./assets/fonts/Montserrat-ExtraLight.ttf'), // 200
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'), // 300
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'), // 400
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'), // 500
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'), // 700
  });
  if (fontError) {
    console.log(fontError);
  }

  const { theme, toggleTheme } = useTheme();
  const themeContextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  );

  useEffect(() => {
    const prepareApp = async () => {
      try {
        const userData = await getDataFromStorage('user');

        if (userData) {
          dispatch(setUser(userData));
        }
      } catch (e) {
        console.log(e);
      } finally {
        setAppIsReady(true);
      }
    };

    prepareApp();
  }, []);


  if (!fontsLoaded) {
    return null;
  }

  if (fontsLoaded && !appIsReady) {
    return (
      <ThemeContext.Provider value={themeContextValue}>
        <Splash />
        <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
      </ThemeContext.Provider>
    );
}

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <ToastProvider>
        <Navigation />
        <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
      </ToastProvider>
    </ThemeContext.Provider>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppInner />
    </Provider>
  );
}

export default App;
