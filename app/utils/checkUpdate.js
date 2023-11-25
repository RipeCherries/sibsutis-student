import axios from 'axios';
import { getDataFromStorage, saveDataInStorage } from '../store/asyncStorage';
import { setLastUpdate } from '../store/lastUpdateSlice';

export async function checkUpdate(dispatch) {
  try {
    const storedLastUpdate = await getDataFromStorage('lastUpdate');

    const apiLastUpdateResponse = await axios.get('https://sibsutis-schedule-api-nine.vercel.app/last-update', {
      headers: {
        'x-api-key': '0GpVzFuguPr62pT6c4CCifHP4KvxD4zgMznTyH6lRq6d2yrfZe7rS3LTmzTVKTho',
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
