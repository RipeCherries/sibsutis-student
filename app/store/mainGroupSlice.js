import { createSlice } from '@reduxjs/toolkit';

const mainGroupSlice = createSlice({
  name: 'mainGroup',
  initialState: null,
  reducers: {
    setMainGroup: (state, action) => action.payload,
    getMainGroup: (state) => state,
  },
});

export const { setMainGroup, getMainGroup } = mainGroupSlice.actions;
export default mainGroupSlice.reducer;
