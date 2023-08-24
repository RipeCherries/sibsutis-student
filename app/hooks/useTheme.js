import { useState, useEffect } from 'react';
import { getData, storeData } from '../store/asyncStorage';

function useTheme() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = async () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    await storeData('theme', { theme: newTheme });
  };

  const fetchThemeFromAsyncStorage = async () => {
    try {
      const themeData = await getData('theme');
      return themeData.theme;
    } catch (error) {
      console.log(error.message);
      return 'light';
    }
  };

  useEffect(() => {
    fetchThemeFromAsyncStorage()
      .then((storedTheme) => {
        if (storedTheme) {
          setTheme(storedTheme);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return { theme, toggleTheme };
}

export { useTheme };
