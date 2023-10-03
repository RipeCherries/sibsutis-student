import { configureStore } from '@reduxjs/toolkit';

import lastUpdateSlice from './lastUpdateSlice';
import groupsSlice from './groupsSlice';
import mainGroupSlice from './mainGroupSlice';
import startOfSemesterSlice from './startOfSemesterSlice';
import mainGroupLessonsSlice from './mainGroupLessonsSlice';

const store = configureStore({
  reducer: {
    mainGroup: mainGroupSlice,
    mainGroupLessons: mainGroupLessonsSlice,
    lastUpdate: lastUpdateSlice,
    groups: groupsSlice,
    startOfSemester: startOfSemesterSlice,
  },
});

export default store;
