import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { FiltersState, SortBy } from './filters.types';
import { Category } from '../feedbacks/feedbacks.types';

const initialState: FiltersState = {
  filter: 'All',
  sortBy: 'Most Upvotes',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<Category>) => {
      state.filter = action.payload;
    },
    setSortBy: (state, action: PayloadAction<SortBy>) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setCategory, setSortBy } = filtersSlice.actions;

export const filtersSelecter = (state: RootState) => state.filters;

