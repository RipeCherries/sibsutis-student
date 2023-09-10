import { configureStore } from '@reduxjs/toolkit';

import lastUpdateSlice from './lastUpdateSlice';
import groupsSlice from './groupsSlice';
import mainGroupSlice from './mainGroupSlice';

const store = configureStore({
  reducer: {
    mainGroup: mainGroupSlice,
    lastUpdate: lastUpdateSlice,
    groups: groupsSlice,
  },
});

export default store;
