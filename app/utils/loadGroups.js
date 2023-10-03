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
    const apiGroupResponse = await axios.get(`${process.env.EXPO_PUBLIC_API_BASE_URL}/groups`, {
      headers: {
        'x-api-key': process.env.EXPO_PUBLIC_API_TOKEN,
      },
    });

    await saveDataInStorage('groups', apiGroupResponse.data);
    dispatch(setGroups(apiGroupResponse.data));
  } catch (error) {
    console.log(error.message);
  }
}
