import axios from 'axios';
import { getDataFromStorage, saveDataInStorage } from '../store/asyncStorage';
import { setGroups } from '../store/groupsSlice';

export async function loadGroupsFromStorage(dispatch) {
  try {
    const storedGroups = await getDataFromStorage('groups');
    dispatch(setGroups(storedGroups));
  } catch (error) {
    console.log(error);
  }
}

export async function loadGroupsAndSaveFromApi(dispatch) {
  try {
    const apiGroupResponse = await axios.get('https://sibsutis-schedule-api-nine.vercel.app/groups', {
      headers: {
        'x-api-key': '0GpVzFuguPr62pT6c4CCifHP4KvxD4zgMznTyH6lRq6d2yrfZe7rS3LTmzTVKTho',
      },
    });

    await saveDataInStorage('groups', apiGroupResponse.data);
    dispatch(setGroups(apiGroupResponse.data));
  } catch (error) {
    console.log(error.message);
  }
}
