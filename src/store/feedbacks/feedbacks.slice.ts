import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import feedbacksApi from '../../api/feedbacks';
import { RootState } from '..';
import { Feedback, FeedbackState } from './feedbacks.types';
import { createAppAsyncThunk } from '../hooks';
import { FETCH_FEEDBACKS, FETCH_FEEDBACK_BY_ID } from '../store.types';

export const fetchFeedbacks = createAppAsyncThunk(
  FETCH_FEEDBACKS,
  async (_, { rejectWithValue }) => {
    try {
      return await feedbacksApi.fetchFeedbacks();
    } catch (error) {
      rejectWithValue(error instanceof Error ? error.message : 'Fetch feedbacks failed');
    }
  }
);

export const fetchFeedbackById = createAppAsyncThunk(
  FETCH_FEEDBACK_BY_ID,
  (id: number | string) => {
    return feedbacksApi.fetchFeedbackById(id);
  }
);

const initialState: FeedbackState = {
  feedbacks: [],
  feedbackDetail: undefined,
  status: 'idle',
  error: undefined,
};

export const feedbacksSlice = createSlice({
  name: 'feedbacks',
  initialState,
  reducers: {
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
    builder
      .addCase(fetchFeedbackById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFeedbackById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.feedbackDetail = action.payload as Feedback;
      })
      .addCase(fetchFeedbackById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { clearFeedbacksState, addFeedback } = feedbacksSlice.actions;

export const feedbacksSelector = (state: RootState) => state.feedbacks;

