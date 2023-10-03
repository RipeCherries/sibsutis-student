import { createSlice } from '@reduxjs/toolkit';

const groupsSlice = createSlice({
  name: 'groups',
  initialState: [],
  reducers: {
    setGroups: (state, action) => action.payload,
    getGroups: (state) => state,
  },
});

export const { setGroups, getGroups } = groupsSlice.actions;
export default groupsSlice.reducer;
