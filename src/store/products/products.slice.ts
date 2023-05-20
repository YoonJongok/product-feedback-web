import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { Product, ProductState } from './products.types';
import productsApi from '../../api/products';
import { createAppAsyncThunk } from '../hooks';
import { FETCH_PRODUCTS } from '../store.types';

export const fetchProducts = createAsyncThunk(FETCH_PRODUCTS, async () => {
  return await productsApi.getProducts();
});

const initialState: ProductState = {
  products: undefined,
  status: 'idle',
  error: undefined,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload as Product[];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

// export const {} = productsSlice.actions;

export const productsSelector = (state: RootState) => state.products;

