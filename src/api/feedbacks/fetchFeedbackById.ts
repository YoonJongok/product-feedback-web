import { Feedback, FeedbackSchema } from '../../store/feedbacks/feedbacks.types';
import { apiService } from '../apiService';

// http://localhost:4000/feedbacks/{:id}?_embed=comments

export const fetchFeedbackById = async (id: number | string): Promise<Feedback | string> => {
  // return new Promise((resolve) => {
  //   const feedback = mockFeedback.find((feedback) => feedback.id === +id);
  //   if (!feedback) throw new Error('Feedback not found');
  //   setTimeout(() => resolve(feedback), 2000);
  // })
  //   .then((res) => {
  //     const feedback = FeedbackSchema.safeParse(res);
  //     if (!feedback.success) {
  //       throw new Error(feedback.error.message);
  //     } else {
  //       return feedback.data;
  //     }
  //   })
  //   .catch((err) => err);

  const response = await apiService
    .get(`/feedbacks/${id}?_embed=comments`)
    .then((res) => {
      const feedbacks = FeedbackSchema.safeParse(res.data);
      if (!feedbacks.success) {
        throw new Error(feedbacks.error.message);
      } else {
        return feedbacks.data;
      }
    })
    .catch((err) => err);
  return response;
};

