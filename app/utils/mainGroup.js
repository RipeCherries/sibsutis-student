import { getDataFromStorage, saveDataInStorage } from '../store/asyncStorage';
import { setMainGroup } from '../store/mainGroupSlice';

export async function getMainGroup(dispatch) {
  try {
    const mainGroup = await getDataFromStorage('mainGroup');

    dispatch(setMainGroup(mainGroup));
  } catch (error) {
    console.log(error.message);
  }
}

export async function saveMainGroup(dispatch, group) {
  try {
    await saveDataInStorage('mainGroup', group);

    dispatch(setMainGroup(group));
  } catch (error) {
    console.log(error.message);
  }
}
