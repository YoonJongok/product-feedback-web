import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { Product, ProductState } from './products.types';
import productsApi from '../../api/products';
import { createAppAsyncThunk } from '../hooks';
import { FETCH_PRODUCTS } from '../store.types';

export const fetchProducts = createAppAsyncThunk(FETCH_PRODUCTS, async () => {
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
  reducers: {
    clearProductsState: () => initialState,
  },
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

export const { clearProductsState } = productsSlice.actions;

export const productsSelector = (state: RootState) => state.products;

