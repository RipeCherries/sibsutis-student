import { createSlice } from '@reduxjs/toolkit';

const lastUpdateSlice = createSlice({
  name: 'lastUpdate',
  initialState: null,
  reducers: {
    setLastUpdate: (state, action) => action.payload,
    getLastUpdate: (state) => state,
  },
});

export const { setLastUpdate, getLastUpdate } = lastUpdateSlice.actions;
export default lastUpdateSlice.reducer;
