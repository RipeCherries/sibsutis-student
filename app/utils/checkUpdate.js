import axios from 'axios';
import { getDataFromStorage, saveDataInStorage } from '../store/asyncStorage';
import { setLastUpdate } from '../store/lastUpdateSlice';

export async function checkUpdate(dispatch) {
  try {
    const storedLastUpdate = await getDataFromStorage('lastUpdate');

    const apiLastUpdateResponse = await axios.get(`${process.env.EXPO_PUBLIC_API_BASE_URL}/last-update`, {
      headers: {
        'x-api-key': process.env.EXPO_PUBLIC_API_TOKEN,
      },
    });

    if (!storedLastUpdate || storedLastUpdate.date < apiLastUpdateResponse.data.date) {
      await saveDataInStorage('lastUpdate', { date: apiLastUpdateResponse.data.date });
      dispatch(setLastUpdate(apiLastUpdateResponse.data.date));
      return true;
    }

    dispatch(setLastUpdate(storedLastUpdate.date));

    return false;
  } catch (error) {
    console.log(error.message);
    return false;
  }
}
