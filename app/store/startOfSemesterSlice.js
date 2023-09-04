import { createSlice } from '@reduxjs/toolkit';

const startOfSemesterSlice = createSlice({
  name: 'startOfSemester',
  initialState: null,
  reducers: {
    setStartOfSemester: (state, action) => action.payload,
    getStartOfSemester: (state) => state,
  },
});

export const { setStartOfSemester, getStartOfSemester } = startOfSemesterSlice.actions;
export default startOfSemesterSlice.reducer;
