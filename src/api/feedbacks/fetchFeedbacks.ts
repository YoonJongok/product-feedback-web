import { Feedback, FeedbackSchema } from '../../store/feedbacks/feedbacks.types';
import { isMockApi } from '../../utils/isMockApi';
import { mockFeedback } from '../../utils/mockData/mockFeedback';
import { apiService } from '../apiService';
// http://localhost:4000/feedbacks?_embed=comments

export const fetchFeedbacks = async (): Promise<Feedback[] | string> => {
  if (isMockApi()) {
    return new Promise((resolve) => setTimeout(() => resolve(mockFeedback), 2000))
      .then((res) => {
        const feedbacks = FeedbackSchema.array().safeParse(res);
        if (!feedbacks.success) {
          throw new Error(feedbacks.error.message);
        } else {
          return feedbacks.data;
        }
      })
      .catch((err) => err);
  }

  return await apiService
    .get('/feedbacks?_embed=comments')
    .then((res) => {
      const feedbacks = FeedbackSchema.array().safeParse(res.data);
      if (!feedbacks.success) {
        throw new Error(feedbacks.error.message);
      } else {
        return feedbacks.data;
      }
    })
    .catch((err) => err);
};

