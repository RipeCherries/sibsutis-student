import axios from 'axios';
import { getDataFromStorage, saveDataInStorage } from '../store/asyncStorage';
import { setStartOfSemester } from '../store/startOfSemesterSlice';

export async function loadStartOfSemesterFromStorage(dispatch) {
  try {
    const storedStartOfSemester = await getDataFromStorage('startOfSemester');
    dispatch(setStartOfSemester(storedStartOfSemester.date));
  } catch (error) {
    console.log(error);
  }
}

export async function loadStartOfSemesterAndSaveFromApi(dispatch) {
  try {
    const apiStartOfSemesterResponse = await axios.get(
      'https://sibsutis-schedule-api-nine.vercel.app/start-of-semester',
      {
        headers: {
          'x-api-key': '0GpVzFuguPr62pT6c4CCifHP4KvxD4zgMznTyH6lRq6d2yrfZe7rS3LTmzTVKTho',
        },
      },
    );

    await saveDataInStorage('startOfSemester', { date: apiStartOfSemesterResponse.data.date });
    dispatch(setStartOfSemester(apiStartOfSemesterResponse.data.date));
  } catch (error) {
    console.log(error.message);
  }
}
