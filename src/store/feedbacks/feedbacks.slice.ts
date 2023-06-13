import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import feedbacksApi from '../../api/feedbacks';
import { RootState } from '..';
import { Comment, Feedback, FeedbackState } from './feedbacks.types';
import { createAppAsyncThunk } from '../hooks';
import { Add_COMMENT_ON_FEEDBACK, FETCH_FEEDBACKS, FETCH_FEEDBACK_BY_ID } from '../store.types';

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
  async (id: number | string) => {
    return await feedbacksApi.fetchFeedbackById(id);
  }
);

export const addCommentOnFeedback = createAppAsyncThunk(
  Add_COMMENT_ON_FEEDBACK,
  async (comment: Comment, { dispatch }) => {
    await feedbacksApi.addComment(comment);
    return dispatch(fetchFeedbackById(comment.feedbackId));
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
    builder
      .addCase(addCommentOnFeedback.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addCommentOnFeedback.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(addCommentOnFeedback.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { clearFeedbacksState, addFeedback } = feedbacksSlice.actions;

export const feedbacksSelector = (state: RootState) => state.feedbacks;

