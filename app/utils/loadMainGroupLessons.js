import axios from 'axios';
import { getDataFromStorage, saveDataInStorage } from '../store/asyncStorage';
import { setMainGroupLessons } from '../store/mainGroupLessonsSlice';

export async function loadMainGroupLessonsFromStorage(dispatch) {
  try {
    const storedMainGroupLessons = await getDataFromStorage('mainGroupLessons');
    dispatch(setMainGroupLessons(storedMainGroupLessons));
  } catch (error) {
    console.log(error);
  }
}

export async function loadMainGroupLessonsAndSaveFromApi(dispatch, group) {
  try {
    const apiMainGroupLessonsResponse = await axios.get(`https://sibsutis-schedule-api-nine.vercel.app/lessons/${group.groupId}`, {
      headers: {
        'x-api-key': '0GpVzFuguPr62pT6c4CCifHP4KvxD4zgMznTyH6lRq6d2yrfZe7rS3LTmzTVKTho',
      },
    });

    await saveDataInStorage('mainGroupLessons', apiMainGroupLessonsResponse.data);
    dispatch(setMainGroupLessons(apiMainGroupLessonsResponse.data));
  } catch (error) {
    console.log(error.message);
  }
}
