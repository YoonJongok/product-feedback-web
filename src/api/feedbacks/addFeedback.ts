import { Feedback } from '../../store/feedbacks/feedbacks.types';
import { apiService } from '../apiService';

export const addFeedback = async (feedback: Feedback) => {
  return await apiService.post('/feedbacks?_embed=comments', feedback);
};

