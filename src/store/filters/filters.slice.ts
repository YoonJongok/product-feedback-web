import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { Filter, FiltersState } from './filters.types';

const initialState: FiltersState = {
  filter: 'All',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;

export const filtersSelecter = (state: RootState) => state.filters;

