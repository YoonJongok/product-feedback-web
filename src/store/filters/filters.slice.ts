import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { Filter, FiltersState, SortBy } from './filters.types';

const initialState: FiltersState = {
  filter: 'All',
  sortBy: 'Most Upvotes',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
    setSortBy: (state, action: PayloadAction<SortBy>) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setFilter, setSortBy } = filtersSlice.actions;

export const filtersSelecter = (state: RootState) => state.filters;

