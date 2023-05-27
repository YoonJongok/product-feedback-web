import { mockFeedback } from '../../utils/mockData/mockFeedback';
import { Feedback, FeedbackSchema } from '../../store/feedbacks/feedbacks.types';

export const fetchFeedbacks = async (): Promise<Feedback[] | string> => {
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
};

