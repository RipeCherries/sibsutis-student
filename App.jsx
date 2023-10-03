import React, { useState, useEffect, useMemo } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useFonts } from 'expo-font';
import Navigation from './app/navigation/Navigation';
import { ThemeContext } from './app/context/ThemeContext';
import { useTheme } from './app/hooks/useTheme';
import { checkUpdate } from './app/utils/checkUpdate';
import store from './app/store/store';
import { loadGroupsAndSaveFromApi, loadGroupsFromStorage } from './app/utils/loadGroups';
import Splash from './app/screens/splash/Splash';
import { getMainGroup } from './app/utils/mainGroup';
import { loadStartOfSemesterAndSaveFromApi, loadStartOfSemesterFromStorage } from './app/utils/startOfSemester';
import { loadMainGroupLessonsAndSaveFromApi, loadMainGroupLessonsFromStorage } from './app/utils/loadMainGroupLessons';

function AppInner() {
  const [appIsReady, setAppIsReady] = useState(false);

  const dispatch = useDispatch();

  const [fontsLoaded] = useFonts({
    'Montserrat-ExtraLight': require('./assets/fonts/Montserrat-ExtraLight.ttf'), // 200
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'), // 300
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'), // 400
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
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

  const mainGroup = useSelector((store) => store.mainGroup);

  useEffect(() => {
    async function prepare() {
      try {
        // await AsyncStorage.clear();
        const updateRequired = await checkUpdate(dispatch);

        await getMainGroup(dispatch);

        if (updateRequired) {
          await loadGroupsAndSaveFromApi(dispatch);
          await loadStartOfSemesterAndSaveFromApi(dispatch);

          if (mainGroup) {
            await loadMainGroupLessonsAndSaveFromApi(dispatch, mainGroup);
          }
        } else {
          await loadGroupsFromStorage(dispatch);
          await loadStartOfSemesterFromStorage(dispatch);
          await loadMainGroupLessonsFromStorage(dispatch);
        }
      } catch (e) {
        alert(e.message);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  if (fontsLoaded && !appIsReady) {
    return (
      <ThemeContext.Provider value={themeContextValue}>
        <Splash />
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <Navigation />
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
