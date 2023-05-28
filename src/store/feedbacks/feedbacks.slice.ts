import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import feedbacksApi from '../../api/feedbacks';
import { RootState } from '..';
import { Feedback, FeedbackState } from './feedbacks.types';
import { createAppAsyncThunk } from '../hooks';
import { FETCH_FEEDBACKS } from '../store.types';
import { mockFeedback } from '../../utils/mockData/mockFeedback';

export const fetchFeedbacks = createAppAsyncThunk(FETCH_FEEDBACKS, async () => {
  return await feedbacksApi.fetchFeedbacks();
});

const initialState: FeedbackState = {
  feedbacks: [],
  status: 'idle',
  error: undefined,
};

export const feedbacksSlice = createSlice({
  name: 'feedbacks',
  initialState,
  reducers: {
    // fetchFeedbacks: (state) => {
    //   state.feedbacks = [...mockFeedback];
    // },
    addFeedback: (state, action: PayloadAction<Feedback>) => {
      state.feedbacks = [...state.feedbacks, action.payload];
    },
    clearFeedbacksState: () => initialState,
  },
  // Enable when api is ready
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

export const { clearFeedbacksState, addFeedback } = feedbacksSlice.actions;

export const feedbacksSelector = (state: RootState) => state.feedbacks;

