import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveDataInStorage = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log(error.message);
  }
};

export const getDataFromStorage = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return JSON.parse(jsonValue);
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
