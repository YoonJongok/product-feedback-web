import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { ProductState } from './products.types';

// TODO: Set slice for product and initial state

const initialState: ProductState = {
  products: undefined,
  status: 'idle',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

// export const {} = productsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default productsSlice.reducer;

