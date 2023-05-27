import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { feedbacksSlice } from './feedbacks/feedbacks.slice';
import { filtersSlice } from './filters/filters.slice';

const rootReducer = combineReducers({
  [feedbacksSlice.name]: feedbacksSlice.reducer,
  [filtersSlice.name]: filtersSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

