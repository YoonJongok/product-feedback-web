import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './products/products.slice';

const rootReducer = combineReducers({
  [productsSlice.name]: productsSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

