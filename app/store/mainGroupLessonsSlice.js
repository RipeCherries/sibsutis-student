import { createSlice } from '@reduxjs/toolkit';

const mainGroupLessonsSlice = createSlice({
  name: 'mainGroupLessonsSlice',
  initialState: [],
  reducers: {
    setMainGroupLessons: (state, action) => action.payload,
    getMainGroupLessons: (state) => state,
  },
});

export const { setMainGroupLessons, getMainGroupLessons } = mainGroupLessonsSlice.actions;
export default mainGroupLessonsSlice.reducer;
