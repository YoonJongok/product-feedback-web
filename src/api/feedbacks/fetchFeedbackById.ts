import { Feedback, FeedbackSchema } from '../../store/feedbacks/feedbacks.types';
import { mockFeedback } from '../../utils/mockData/mockFeedback';

export const fetchFeedbackById = async (id: number): Promise<Feedback | string> => {
  return new Promise((resolve) => {
    const feedback = mockFeedback.find((feedback) => feedback.id === +id);
    if (!feedback) throw new Error('Feedback not found');
    setTimeout(() => resolve(feedback), 2000);
  })
    .then((res) => {
      const feedback = FeedbackSchema.safeParse(res);
      if (!feedback.success) {
        throw new Error(feedback.error.message);
      } else {
        return feedback.data;
      }
    })
    .catch((err) => err);
};

