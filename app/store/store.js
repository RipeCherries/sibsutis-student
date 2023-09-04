import { configureStore } from '@reduxjs/toolkit';

import lastUpdateSlice from './lastUpdateSlice';
import groupsSlice from './groupsSlice';

const store = configureStore({
  reducer: {
    lastUpdate: lastUpdateSlice,
    groups: groupsSlice,
  },
});

export default store;
