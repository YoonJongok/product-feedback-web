import { createSlice } from '@reduxjs/toolkit';
import feedbacksApi from '../../api/feedbacks';
import { RootState } from '..';
import { Feedback, FeedbackState } from './feedbacks.types';
import { createAppAsyncThunk } from '../hooks';
import { FETCH_FEEDBACKS } from '../store.types';

export const fetchFeedbacks = createAppAsyncThunk(FETCH_FEEDBACKS, async () => {
  return await feedbacksApi.fetchFeedbacks();
});

const initialState: FeedbackState = {
  feedbacks: undefined,
  status: 'idle',
  error: undefined,
};

export const feedbacksSlice = createSlice({
  name: 'feedbacks',
  initialState,
  reducers: {
    clearFeedbacksState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeedbacks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFeedbacks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.feedbacks = action.payload as Feedback[];
      })
      .addCase(fetchFeedbacks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { clearFeedbacksState } = feedbacksSlice.actions;

export const feedbacksSelector = (state: RootState) => state.feedbacks;

